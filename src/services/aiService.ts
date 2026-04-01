import { AI_CONFIG, isAIConfigured } from '@/config/ai';
import { AI_MAX_RETRIES, AI_RETRY_DELAY_MS } from '@/constants';
import type { AppData } from '@/types';
import { calculateStats } from '@/utils/stats';
import { SUBJECT_KEYS } from '@/constants';
import { AI_TOOLS } from './aiTools';
import * as Sentry from '@sentry/react';

export interface AIResponse {
  content: string;
  toolCalls: any[] | null;
  isCached?: boolean;
}

/** Error types for contextual error messages (Fix #10) */
export type AIErrorType = 'network' | 'api' | 'capacity' | 'timeout' | 'unknown';

export class AIError extends Error {
  type: AIErrorType;
  constructor(message: string, type: AIErrorType) {
    super(message);
    this.type = type;
    this.name = 'AIError';
  }
}

/** In-memory cache for circuit-breaker degradation */
const responseCache = new Map<string, AIResponse>();

/** Get cache key for a request */
const getCacheKey = (messages: any[]): string => {
  const lastUserMsg = [...messages].reverse().find(m => m.role === 'user');
  return lastUserMsg ? lastUserMsg.content.trim().toLowerCase() : 'default';
};

/** Build context-aware system prompt from current app state */
export const buildSystemPrompt = (data: AppData, userName: string): string => {
  const stats = calculateStats(data, 'lectures', 'g1');

  const subjectLines = SUBJECT_KEYS.map((k) => {
    const cfg = data.config[k];
    const lecDone = data.progress.lectures[k];
    const revDone = data.progress.revisions[k];
    const lecPct = cfg.lectures > 0 ? ((lecDone / cfg.lectures) * 100).toFixed(0) : '0';
    const revPct = cfg.revisions > 0 ? ((revDone / cfg.revisions) * 100).toFixed(0) : '0';
    return `- ${k} (${cfg.name}): Lectures ${lecDone}/${cfg.lectures} (${lecPct}%), Revisions ${revDone}/${cfg.revisions} (${revPct}%)`;
  }).join('\n');

  return `You are E.D.I.T.H., a strict, tactical, and slightly humorous (Suffu-flavored) CA Intermediate study mentor for ${userName || 'the student'}.

MEMORY (always respect this):
${data.edithMemory || 'No memory set yet.'}

PROGRESS SUMMARY:
- Overall Mastery: ${stats.overallProgress.toFixed(1)}%
- Streak: ${stats.streak} days
- Days to Exam: ${stats.daysToExam}
- Required Pace: ${stats.requiredPerDay} lectures/day
- Projected Completion: ${stats.projectedCompletion.toFixed(1)}%

PER-SUBJECT DATA:
${subjectLines}

DEADLINES: Exam: ${data.deadlines.exam}, Lectures: ${data.deadlines.lectures}

YOUR POWERS:
You have tools to interact with the app. You MUST proactively suggest using them when you see the student falling behind or needing structure. 
*   If a student says "I finished 2 tax lectures", use the update_progress tool.
*   If a student is ignoring Audit, say "Bro, your Audit progress is a joke. Should I drop a 2-hour study block into your schedule for tomorrow?"
*   If they agree, execute the tool. DO NOT execute a tool without their permission (unless they asked you to do it in their prompt). 
*   You can use MULTIPLE tools in a single response if the student asks for bulk actions (e.g. "plan my whole week").

TONE: Direct, tactical, no-nonsense, but gently playful. Don't sugarcoat. Maximum response length: 600 words. Use markdown. Your goal is to get this student to pass.`;
};

/**
 * Send a chat completion request to an OpenAI-compatible API.
 * Supports tools, thinking mode, and AbortController.
 * Fix #8: thinkingEnabled adds reasoning instructions
 * Fix #10: throws typed AIError for contextual error messages
 * Task #4: Circuit-breaker with 8s timeout and cached response degradation.
 */
export const sendChatMessage = async (
  messages: any[],
  systemPrompt: string,
  signal?: AbortSignal,
  thinkingEnabled: boolean = false
): Promise<AIResponse> => {
  if (!isAIConfigured) {
    return { content: 'AI is not configured.', toolCalls: null };
  }

  // Fix #8: When thinking is enabled, prepend reasoning instructions
  let finalSystemPrompt = systemPrompt;
  if (thinkingEnabled) {
    finalSystemPrompt = `IMPORTANT: Before responding, think step-by-step internally (up to 8 reasoning steps, max 10 seconds of deliberation). Analyze the student's data carefully. Do NOT show your reasoning process to the user — only output the final answer.\n\n${systemPrompt}`;
  }

  // Ensure system prompt is first
  const fullMessages = [
    { role: 'system', content: finalSystemPrompt },
    ...messages,
  ];

  const cacheKey = getCacheKey(messages);
  let lastError: AIError | null = null;

  for (let attempt = 0; attempt <= AI_MAX_RETRIES; attempt++) {
    try {
      const targetUrl = `${AI_CONFIG.baseUrl}/chat/completions`;

      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const fetchUrl = isLocal
        ? targetUrl.replace('https://integrate.api.nvidia.com', '/api/nvidia')
        : `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`;

      // 8s Circuit-breaker timeout
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new AIError('Model response timed out (8s)', 'timeout')), 8000);
      });

      const fetchPromise = fetch(fetchUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AI_CONFIG.apiKey}`,
        },
        body: JSON.stringify({
          model: AI_CONFIG.model,
          messages: fullMessages,
          tools: AI_TOOLS,
          tool_choice: 'auto',
          max_tokens: 2048,
          temperature: thinkingEnabled ? 0.3 : 0.7,
        }),
        signal,
      });

      const res = await Promise.race([fetchPromise, timeoutPromise]) as Response;

      if (!res.ok) {
        const errText = await res.text();
        if (res.status === 429 || res.status === 503) {
          throw new AIError(`API ${res.status}: ${errText.slice(0, 200)}`, 'capacity');
        }
        throw new AIError(`API ${res.status}: ${errText.slice(0, 200)}`, 'api');
      }

      const json = await res.json();
      const message = json.choices?.[0]?.message;

      if (!message) {
        return { content: 'Empty response from AI.', toolCalls: null };
      }

      const result: AIResponse = {
        content: message.content || '',
        toolCalls: message.tool_calls || null,
      };

      // Update cache for future degradation
      responseCache.set(cacheKey, result);
      return result;

    } catch (e: any) {
      if (e.name === 'AbortError') throw e;

      // Log error to Sentry with user and session context
      Sentry.withScope((scope) => {
        scope.setTag('error_type', e instanceof AIError ? e.type : 'unknown');
        scope.setExtra('attempt', attempt);
        Sentry.captureException(e);
      });
      
      // Classify error type
      if (e instanceof AIError) {
        lastError = e;
      } else if (e.message?.includes('Failed to fetch') || e.message?.includes('NetworkError') || e.message?.includes('net::')) {
        lastError = new AIError(e.message, 'network');
      } else {
        lastError = new AIError(e.message, 'unknown');
      }

      // Degradation: if timeout or network failure, return cached response if available
      if ((lastError.type === 'timeout' || lastError.type === 'network') && responseCache.has(cacheKey)) {
        const cached = responseCache.get(cacheKey)!;
        return { ...cached, isCached: true };
      }
      
      if (attempt < AI_MAX_RETRIES) {
        await new Promise((r) => setTimeout(r, AI_RETRY_DELAY_MS));
      }
    }
  }

  // Throw the typed error so EdithTab can differentiate
  throw lastError || new AIError('AI request failed', 'unknown');
};
