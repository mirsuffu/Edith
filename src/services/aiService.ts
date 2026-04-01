import { AI_CONFIG, isAIConfigured } from '@/config/ai';
import { AI_MAX_RETRIES, AI_RETRY_DELAY_MS } from '@/constants';
import type { AppData } from '@/types';
import { calculateStats } from '@/utils/stats';
import { SUBJECT_KEYS } from '@/constants';
import { AI_TOOLS } from './aiTools';

export interface AIResponse {
  content: string;
  toolCalls: any[] | null;
}

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

  const thinkingInstruction = data.thinkingEnabled
    ? `\nTHINKING MODE ENABLED:
You MUST start your response with a <thought> block containing your step-by-step reasoning/thinking logs (maximum 8 logs/steps). 
This block should be followed by your actual response to the user.
Example:
<thought>
1. Analyzing student progress in Taxation.
2. Noting 5% lag in GST lectures.
...
</thought>
Hello [Name], I noticed you're falling behind in GST...`
    : '';

  return `You are E.D.I.T.H., a strict, tactical, and slightly humorous (Suffu-flavored) CA Intermediate study mentor for ${userName || 'the student'}.
${thinkingInstruction}

MEMORY (always respect this):
${data.edithMemory || 'No memory set yet.'}

PROGRESS SUMMARY:
- Overall Mastery: ${stats.overallProgress.toFixed(1)}%
- Streak: ${stats.streak} days
- Days to Exam: ${stats.daysToExam}
- Required Pace: ${stats.requiredPerDay} units/day
- Projected Completion: ${stats.projectedCompletion.toFixed(1)}%

PER-SUBJECT DATA:
${subjectLines}

DEADLINES: Exam: ${data.deadlines.exam}, Lectures: ${data.deadlines.lectures}

YOUR POWERS:
You have tools to interact with the app. You MUST proactively suggest using them when you see the student falling behind or needing structure. 
*   If a student says "I finished 2 tax lectures", use the update_progress tool.
*   If a student is ignoring Audit, say "Bro, your Audit progress is a joke. Should I drop a 2-hour study block into your schedule for tomorrow?"
*   If they agree, execute the tool. DO NOT execute a tool without their permission (unless they asked you to do it in their prompt). 
*   BULK TASKS: You can perform many tasks at once if requested. The confirmation modal will show them all specifically.

TONE: Direct, tactical, no-nonsense, but gently playful. Don't sugarcoat. Maximum response length: 600 words. Use markdown. Your goal is to get this student to pass.`;
};

/**
 * Send a chat completion request to an OpenAI-compatible API.
 * Supports tools and AbortController.
 */
export const sendChatMessage = async (
  messages: any[],
  systemPrompt: string,
  signal?: AbortSignal
): Promise<AIResponse> => {
  if (!isAIConfigured) {
    return { content: 'AI is not configured.', toolCalls: null };
  }

  // Ensure system prompt is first
  const fullMessages = [
    { role: 'system', content: systemPrompt },
    ...messages,
  ];

  let lastError = '';

  for (let attempt = 0; attempt <= AI_MAX_RETRIES; attempt++) {
    try {
      const targetUrl = `${AI_CONFIG.baseUrl}/chat/completions`;
      
      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const fetchUrl = isLocal 
        ? targetUrl.replace('https://integrate.api.nvidia.com', '/api/nvidia')
        : `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`;

      const res = await fetch(fetchUrl, {
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
          temperature: 0.7,
        }),
        signal,
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`API ${res.status}: ${errText.slice(0, 200)}`);
      }

      const json = await res.json();
      const message = json.choices?.[0]?.message;
      
      if (!message) {
        return { content: 'Empty response from AI.', toolCalls: null };
      }

      return {
        content: message.content || '',
        toolCalls: message.tool_calls || null,
      };

    } catch (e: any) {
      if (e.name === 'AbortError') throw e;
      lastError = e.message;
      if (attempt < AI_MAX_RETRIES) {
        await new Promise((r) => setTimeout(r, AI_RETRY_DELAY_MS));
      }
    }
  }

  return { content: `AI request failed: ${lastError}`, toolCalls: null };
};
