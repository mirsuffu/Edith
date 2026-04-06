import { AI_CONFIG, isAIConfigured } from '@/config/ai';
import { AI_MAX_RETRIES, AI_RETRY_DELAY_MS } from '@/constants';
import type { AppData } from '@/types';
import { calculateStats } from '@/utils/stats';
import { SUBJECT_KEYS } from '@/constants';
import { db } from '@/config/firebase';
import { doc, onSnapshot, deleteDoc } from 'firebase/firestore';

export interface AIResponse {
  content: string;
  toolCalls?: any[] | null;
  isCached?: boolean;
}

export type AIErrorType = 'network' | 'api' | 'capacity' | 'timeout' | 'config' | 'unknown';

export class AIError extends Error {
  type: AIErrorType;
  constructor(type: AIErrorType, message: string) {
    super(message);
    this.type = type;
    this.name = 'AIError';
  }
}

const responseCache = new Map<string, AIResponse>();

const getCacheKey = (messages: any[]): string => {
  const lastUserMsg = [...messages].reverse().find(m => m.role === 'user');
  return lastUserMsg ? lastUserMsg.content.trim().toLowerCase() : 'default';
};

export const buildSystemPrompt = (data: AppData, userName: string | null): string => {
  const stats = calculateStats(data, 'lectures', 'g1');
  const subjectLines = SUBJECT_KEYS.map((k) => {
    const cfg = data.config[k];
    const lecDone = data.progress.lectures[k];
    const lecPct = cfg.lectures > 0 ? ((lecDone / cfg.lectures) * 100).toFixed(0) : '0';
    return `- ${k} (${cfg.name}): ${lecDone}/${cfg.lectures} (${lecPct}%)`;
  }).join('\n');

  return `You are E.D.I.T.H., a tactful CA Intermediate study mentor for ${userName || 'the student'}.
PROGRESS: ${stats.overallProgress.toFixed(1)}%, Streak: ${stats.streak}d, Pace: ${stats.requiredPerDay} lec/day.
Subjects:
${subjectLines}
Tone: Tactical, blunt, motivational. Max 600 words.`;
};

export const sendChatMessage = async (
  messages: any[],
  systemPrompt: string,
  data: AppData,
  signal?: AbortSignal,
  thinkingEnabled: boolean = false,
  webSearchEnabled: boolean = false
): Promise<AIResponse> => {
  if (!isAIConfigured) return { content: 'AI is not configured.', toolCalls: null };

  const cacheKey = getCacheKey(messages);
  const modelId = thinkingEnabled ? 'super' : 'nano';
  let lastError: AIError | null = null;

  for (let attempt = 0; attempt <= AI_MAX_RETRIES; attempt++) {
    try {
      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const requestId = `ai-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

      if (isLocal) {
        const fetchUrl = `${AI_CONFIG.baseUrl}/chat/completions`.replace('https://integrate.api.nvidia.com', '/api/nvidia');
        const response = await fetch(fetchUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${AI_CONFIG.apiKey}`,
          },
          body: JSON.stringify({
            model: AI_CONFIG.modelIds[modelId as keyof typeof AI_CONFIG.modelIds] || AI_CONFIG.modelIds.nano,
            messages: [{ role: 'system', content: systemPrompt }, ...messages],
            temperature: 0.2,
            top_p: 0.7,
            max_tokens: 1024,
            stream: false,
          }),
          signal,
        });

        if (!response.ok) throw new AIError('api', `NVIDIA API error: ${response.status}`);
        const json = await response.json();
        return { content: json.choices[0].message.content, toolCalls: json.choices[0].message.tool_calls };
      }

      // PRODUCTION: GitHub Actions Relay
      const githubToken = data.githubToken;
      if (!githubToken) throw new AIError('config', 'GitHub Token missing in Settings.');

      const dispatchRes = await fetch('https://api.github.com/repos/mirsuffu/Edith/dispatches', {
        method: 'POST',
        headers: {
          'Authorization': `token ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event_type: 'ai_request',
          client_payload: {
            requestId,
            model: AI_CONFIG.modelIds[modelId as keyof typeof AI_CONFIG.modelIds] || AI_CONFIG.modelIds.nano,
            messages: [{ role: 'system', content: systemPrompt }, ...messages],
            temperature: 0.2,
            top_p: 0.7,
            max_tokens: 1024,
            webSearchEnabled
          }
        }),
        signal,
      });

      if (!dispatchRes.ok) throw new AIError('api', `Relay trigger failed: ${dispatchRes.status}`);

      return await new Promise<AIResponse>((resolve, reject) => {
        const responseRef = doc(db, 'ai_responses', requestId);
        let timeout = setTimeout(() => {
          unsub();
          reject(new AIError('timeout', 'AI Relay timed out. GitHub Actions cold-start can take 40-60s...'));
        }, 90000);
        const unsub = onSnapshot(responseRef, (snap) => {
          if (snap.exists()) {
            const resData = snap.data();
            if (resData.status === 'completed') {
              clearTimeout(timeout); unsub(); deleteDoc(responseRef).catch(() => {});
              resolve({ content: resData.content, toolCalls: resData.toolCalls });
            } else if (resData.status === 'error') {
              clearTimeout(timeout); unsub(); deleteDoc(responseRef).catch(() => {});
              reject(new AIError('api', resData.error || 'AI Relay failed.'));
            }
          }
        }, (err) => {
          clearTimeout(timeout); unsub(); reject(new AIError('network', `Firestore error: ${err.message}`));
        });
      });

    } catch (e: any) {
      if (e.name === 'AbortError') throw e;
      lastError = e instanceof AIError ? e : new AIError('unknown', e.message);
      if (attempt < AI_MAX_RETRIES) await new Promise(r => setTimeout(r, AI_RETRY_DELAY_MS));
    }
  }

  throw lastError || new AIError('unknown', 'AI Request failed.');
};
