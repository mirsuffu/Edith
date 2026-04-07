import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useAppStore } from '@/store/appStore';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { sendChatMessage, buildSystemPrompt, AIError } from '@/services/aiService';
import { isAIConfigured } from '@/config/ai';
import { generateId } from '@/utils/dates';
import { toast, TOAST_MESSAGES } from '@/utils/toast';
import type { ChatSession, ChatMessage, PendingToolCall } from '@/types';
import { SendHorizontal, Plus, Brain, Trash2, MessageSquare, X, Square, Zap, Globe } from 'lucide-react';
import { ConfirmModal } from '@/components/modals/ConfirmModal';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const THINKING_KEY = 'edith_thinking_mode';

const quickActions = [
  { label: '🔍 Audit my pace', prompt: 'Audit my current pace and give me honest feedback.' },
  { label: '📋 Plan tomorrow', prompt: 'Give me a strict study plan for tomorrow based on my weaknesses.' },
  { label: "🔄 What should I revise?", prompt: 'Based on my progress, which subjects should I prioritize for revision right now?' },
  { label: "😮‍💨 I'm burnt out", prompt: "I'm feeling burnt out. Give me a psychological reset and practical advice." },
];

/** Fix #10: Context-aware error message */
const getErrorMessage = (error: any): string => {
  if (error instanceof AIError) {
    switch (error.type) {
      case 'network':
        return "Edith is disconnected from Suffu's Mind. Check your connection and try again.";
      case 'capacity':
        return "Edith is disconnected from Suffu's Mind. Servers are overloaded — wait a while and try again.";
      case 'api':
        return "Edith is disconnected from Suffu's Mind. Wait a while and try again.";
      default:
        return "Edith is disconnected from Suffu's Mind. Wait a while and try again.";
    }
  }
  if (error?.message?.includes('fetch') || error?.message?.includes('network') || error?.message?.includes('net::')) {
    return "Edith is disconnected from Suffu's Mind. Check your connection and try again.";
  }
  return "Edith is disconnected from Suffu's Mind. Wait a while and try again.";
};

export const EdithTab: React.FC = React.memo(() => {
  // Use more granular selectors to avoid unnecessary re-renders
  const sessions = useAppStore((s) => s.data.edithChatSessions);
  const activeSessionId = useAppStore((s) => s.data.activeEdithSessionId);
  const edithMemory = useAppStore((s) => s.data.edithMemory);
  const userName = useAppStore((s) => s.userProfile?.name || 'Student');
  const activeTab = useAppStore((s) => s.activeTab);
  
  const addSession = useAppStore((s) => s.addChatSession);
  const addMessage = useAppStore((s) => s.addChatMessage);
  const setActiveSession = useAppStore((s) => s.setActiveEdithSessionId);
  const deleteSession = useAppStore((s) => s.deleteChatSession);
  const setEdithMemory = useAppStore((s) => s.setEdithMemory);
  const setPendingToolCall = useAppStore((s) => s.setPendingToolCall);
  
  const thinkingEnabled = useAppStore((s) => s.data.isThinkingEnabled);
  const webSearchEnabled = useAppStore((s) => s.data.isWebSearchEnabled);
  const setThinkingEnabled = useAppStore((s) => s.setThinkingEnabled);
  const setWebSearchEnabled = useAppStore((s) => s.setWebSearchEnabled);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showMemory, setShowMemory] = useState(false);
  const [memoryDraft, setMemoryDraft] = useState(edithMemory);
  const [showSessions, setShowSessions] = useState(false);
  const [sessionToDelete, setSessionToDelete] = useState<string | null>(null);
  
  // Use ref for focus-locking to avoid re-renders and ensure stability
  const isTypingRef = useRef(false);

  const abortRef = useRef<AbortController | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const activeSession = sessions.find((s) => s.id === activeSessionId);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeSession?.messages.length, loading]);

  // Stable focus-lock mechanism
  useEffect(() => {
    // Only run focus lock when the Edith tab is actually active
    if (activeTab !== 'edith') return;

    const handleFocusLock = (e: FocusEvent) => {
      // If we are typing and focus is lost, and it wasn't to an interactive element, snap back
      if (isTypingRef.current && textareaRef.current && e.target === textareaRef.current) {
        // We use requestAnimationFrame to check the active element AFTER the blur event has completed
        requestAnimationFrame(() => {
          const activeEl = document.activeElement;
          const isInteractive = activeEl?.tagName === 'BUTTON' || 
                              activeEl?.tagName === 'INPUT' || 
                              activeEl?.tagName === 'TEXTAREA' ||
                              activeEl?.tagName === 'A' ||
                              activeEl?.closest('[role="button"]');
          
          if (!isInteractive && isTypingRef.current) {
            textareaRef.current?.focus();
          }
        });
      }
    };
    
    document.addEventListener('blur', handleFocusLock, true);
    
    // Safety interval (higher frequency for mobile responsiveness)
    const interval = setInterval(() => {
      if (isTypingRef.current && textareaRef.current && document.activeElement !== textareaRef.current) {
        const activeEl = document.activeElement;
        const isInteractive = activeEl?.tagName === 'BUTTON' || 
                            activeEl?.tagName === 'INPUT' || 
                            activeEl?.tagName === 'TEXTAREA' || 
                            activeEl?.tagName === 'A' ||
                            activeEl?.closest('[role="button"]');
        if (!isInteractive) {
          textareaRef.current.focus();
        }
      }
    }, 50);

    return () => {
      document.removeEventListener('blur', handleFocusLock, true);
      clearInterval(interval);
    };
  }, [activeTab]);

  // Auto-resize textarea
  const autoResize = useCallback(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      const newHeight = `${Math.min(el.scrollHeight, 120)}px`;
      el.style.height = newHeight;
    }
  }, []);

  useEffect(() => { autoResize(); }, [input, autoResize]);

  // Fix #8: Persist thinking toggle
  const toggleThinking = useCallback(() => {
    setThinkingEnabled(!thinkingEnabled);
  }, [thinkingEnabled, setThinkingEnabled]);

  const toggleWebSearch = useCallback(() => {
    setWebSearchEnabled(!webSearchEnabled);
  }, [webSearchEnabled, setWebSearchEnabled]);

  const createNewSession = () => {
    const session: ChatSession = {
      id: generateId(), title: 'New Chat',
      createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
      messages: [],
    };
    addSession(session);
    setShowSessions(false);
  };

  const handleSend = async (prompt?: string) => {
    const text = (prompt || input).trim();
    if (!text || loading) return;

    isTypingRef.current = false; // Stop focus lock during send

    if (!isAIConfigured) { toast.error(TOAST_MESSAGES.aiNotConfigured); return; }

    // Ensure we have a session
    let sessionId = activeSessionId;
    if (!sessionId || !sessions.find((s) => s.id === sessionId)) {
      const session: ChatSession = {
        id: generateId(), title: text.slice(0, 40),
        createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
        messages: [],
      };
      addSession(session);
      sessionId = session.id;
    }

    // Add user message
    const userMsg: ChatMessage = { id: generateId(), role: 'user', content: text, timestamp: new Date().toISOString() };
    addMessage(sessionId!, userMsg);
    setInput('');
    setLoading(true);

    // Re-focus after send (mobile optimization)
    setTimeout(() => {
      textareaRef.current?.focus();
      isTypingRef.current = true;
    }, 100);

    // Get all messages for context
    const data = useAppStore.getState().data;
    const currentSession = data.edithChatSessions.find((s) => s.id === sessionId);
    const messages: any[] = (currentSession?.messages || []).map((m) => ({ role: m.role, content: m.content }));

    const systemPrompt = buildSystemPrompt(data, userName);
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      let response = await sendChatMessage(messages, systemPrompt, data, controller.signal, thinkingEnabled, webSearchEnabled);

      // Fix #11: Handle tool calls — support bulk (multiple at once)
      if (response.toolCalls && response.toolCalls.length > 0) {
        // Process all tool calls via the confirmation modal
        const toolCalls = response.toolCalls.filter((c: any) => c.type === 'function');
        
        if (toolCalls.length > 0) {
          // For bulk actions, show all in modal. The modal handles the batch.
          const toolResults: any[] = [];
          
          for (const call of toolCalls) {
            const args = JSON.parse(call.function.arguments);
            const toolName = call.function.name;

            // Request user confirmation via the modal
            const toolResult = await new Promise((resolve, reject) => {
              setPendingToolCall({
                id: call.id,
                name: toolName,
                args,
                description: `AI Action${toolCalls.length > 1 ? ` (${toolResults.length + 1}/${toolCalls.length})` : ''}`,
                resolve,
                reject
              });
            });

            toolResults.push({ callId: call.id, name: toolName, result: toolResult });
          }

          // Send all results back to AI for the final verbal response
          messages.push({ role: 'assistant', content: null, tool_calls: response.toolCalls });
          for (const tr of toolResults) {
            messages.push({ role: 'tool', tool_call_id: tr.callId, name: tr.name, content: JSON.stringify(tr.result) });
          }

          response = await sendChatMessage(messages, systemPrompt, data, controller.signal, thinkingEnabled);
        }
      }

      if (response.content) {
        const assistantMsg: ChatMessage = { id: generateId(), role: 'assistant', content: response.content, timestamp: new Date().toISOString() };
        addMessage(sessionId!, assistantMsg);
      }
    } catch (e: any) {
      if (e.name !== 'AbortError') {
        // Fix #10: Contextual error message
        const errorText = getErrorMessage(e);
        const errMsg: ChatMessage = { id: generateId(), role: 'assistant', content: errorText, timestamp: new Date().toISOString() };
        addMessage(sessionId!, errMsg);
      }
    } finally {
      setLoading(false);
      abortRef.current = null;
    }
  };

  const handleCancel = () => {
    abortRef.current?.abort();
    setLoading(false);
  };

  const saveMemory = () => {
    setEdithMemory(memoryDraft);
    toast.success(TOAST_MESSAGES.memoryUpdated);
    setShowMemory(false);
  };

  return (
    <div className="h-full flex flex-col tab-content-enter">
      <div className="flex flex-1 min-h-0">
        {/* Sidebar (desktop) */}
        <div className="hidden md:flex flex-col w-56 border-r border-border shrink-0">
          <div className="p-3 border-b border-border flex items-center gap-2">
            <Button size="sm" className="flex-1 text-[10px]" onClick={createNewSession}>
              <Plus size={12} /> New Chat
            </Button>
            <button onClick={() => setShowMemory(true)} className="p-2 rounded-xl border border-border hover:bg-surface-2 text-text-2 transition-colors" aria-label="Edith Memory">
              <Brain size={16} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto no-scrollbar p-2 space-y-1">
            {sessions.map((s) => (
              <div key={s.id}
                onClick={() => setActiveSession(s.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer transition-colors group ${s.id === activeSessionId ? 'bg-accent/10 text-accent' : 'text-text-2 hover:bg-surface-2'
                  }`}>
                <MessageSquare size={13} className="shrink-0" />
                <span className="text-xs font-medium truncate flex-1">{s.title}</span>
                <button onClick={(e) => { e.stopPropagation(); setSessionToDelete(s.id); }}
                  className="opacity-100 md:opacity-0 md:group-hover:opacity-100 text-danger/60 hover:text-danger p-0.5 transition-opacity" aria-label="Delete session">
                  <Trash2 size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Mobile header */}
          <div className="md:hidden flex items-center gap-2 p-3 border-b border-border">
            <button onClick={() => setShowSessions(!showSessions)} className="p-2 rounded-xl border border-border hover:bg-surface-2 text-text-2">
              <MessageSquare size={16} />
            </button>
            <span className="text-xs font-semibold text-text-2 truncate flex-1">{activeSession?.title || 'E.D.I.T.H AI'}</span>
            <button onClick={createNewSession} className="p-2 rounded-xl border border-border hover:bg-surface-2 text-text-2">
              <Plus size={16} />
            </button>
            <button onClick={() => setShowMemory(true)} className="p-2 rounded-xl border border-border hover:bg-surface-2 text-text-2">
              <Brain size={16} />
            </button>
          </div>

          {/* Mobile sessions dropdown */}
          {showSessions && (
            <div className="md:hidden border-b border-border bg-surface-2 p-2 space-y-1 max-h-48 overflow-y-auto">
              {sessions.map((s) => (
                <button key={s.id} onClick={() => { setActiveSession(s.id); setShowSessions(false); }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${s.id === activeSessionId ? 'bg-accent/10 text-accent' : 'text-text-2 hover:bg-surface-3'
                    }`}>
                  {s.title}
                </button>
              ))}
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4">
            {!activeSession?.messages.length && (
              <div className="h-full flex flex-col items-center justify-center text-center px-4">
                <img src={import.meta.env.BASE_URL + 'logo.png'} alt="E.D.I.T.H" className="w-16 h-16 rounded-2xl mb-4" />
                <h3 className="font-display text-lg font-bold text-text-1 mb-1">E.D.I.T.H AI</h3>
                <p className="text-sm text-text-2 max-w-md">Your tactical study mentor. Ask anything about your prep — I don't sugarcoat.</p>
              </div>
            )}

            {activeSession?.messages.map((msg) => (
              <div key={msg.id} className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {/* AI avatar */}
                {msg.role === 'assistant' && (
                  <img src={import.meta.env.BASE_URL + 'logo.png'} alt="Edith" className="w-7 h-7 rounded-full shrink-0 mt-1" />
                )}
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                    ? 'bg-accent text-white rounded-br-md'
                    : 'bg-surface-2 border border-border text-text-1 rounded-bl-md'
                  }`}>
                  {msg.role === 'assistant' ? (
                    <div className="selectable prose prose-sm dark:prose-invert max-w-none 
                      [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&_p]:my-1.5 [&_ul]:my-1 [&_ol]:my-1 [&_li]:my-0.5 
                      /* Text colors for different themes */
                      text-text-1 dark:text-[#EEEEF5]
                      /* Ensure headings and strong text follow theme */
                      [&_strong]:text-text-1 dark:[&_strong]:text-[#EEEEF5]
                      [&_h1]:text-text-1 dark:[&_h1]:text-[#EEEEF5]
                      [&_h2]:text-text-1 dark:[&_h2]:text-[#EEEEF5]
                      [&_h3]:text-text-1 dark:[&_h3]:text-[#EEEEF5]
                      /* Code and Table styling */
                      [&_code]:bg-surface-3 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-accent [&_code]:text-xs 
                      [&_table]:w-full [&_table]:my-2 [&_th]:border [&_th]:border-border [&_th]:bg-surface-3 [&_th]:px-2 [&_th]:py-1 [&_th]:text-left 
                      [&_td]:border [&_td]:border-border [&_td]:px-2 [&_td]:py-1">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
                    </div>
                  ) : (
                    <div className="whitespace-pre-wrap selectable">{msg.content}</div>
                  )}
                  <div className={`text-[9px] mt-1.5 font-mono ${msg.role === 'user' ? 'text-white/50' : 'text-text-3'}`}>
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
                {/* User avatar */}
                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1 text-[11px]">🧑</div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-2.5 justify-start">
                {/* Dual-arc thinking animation replaces logo during loading */}
                <div className="w-7 h-7 shrink-0 mt-1 flex items-center justify-center" style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    border: '2.5px solid transparent',
                    borderTopColor: 'var(--accent, #3b82f6)',
                    borderBottomColor: 'var(--accent, #3b82f6)',
                    animation: 'edith-arc-spin 1.5s cubic-bezier(0.68, -0.15, 0.265, 1.15) infinite',
                    filter: 'drop-shadow(0 0 4px var(--accent, #3b82f6))',
                  }} />
                  <div style={{
                    position: 'absolute',
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    border: '2px solid transparent',
                    borderLeftColor: 'var(--accent, #3b82f6)',
                    borderRightColor: 'var(--accent, #3b82f6)',
                    animation: 'edith-arc-spin-rev 1s cubic-bezier(0.68, -0.15, 0.265, 1.15) infinite',
                    opacity: 0.8,
                  }} />
                  <style>{`
                    @keyframes edith-arc-spin {
                      0% { transform: rotate(0deg) scale(1); }
                      50% { transform: rotate(180deg) scale(1.05); }
                      100% { transform: rotate(360deg) scale(1); }
                    }
                    @keyframes edith-arc-spin-rev {
                      0% { transform: rotate(0deg) scale(1); }
                      50% { transform: rotate(-180deg) scale(0.95); }
                      100% { transform: rotate(-360deg) scale(1); }
                    }
                  `}</style>
                </div>
                <div className="bg-surface-2 border border-border rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-3">
                  <Brain size={14} className="text-accent animate-pulse" />
                  <div className="text-xs font-semibold text-text-2 tracking-wide">
                    {thinkingEnabled ? 'E.D.I.T.H is thinking deeply...' : 'E.D.I.T.H is thinking'}
                  </div>
                  <div className="flex space-x-1 items-center ml-1">
                    <div className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick actions */}
          <div className="relative shrink-0">
            <div className="flex gap-2 px-4 py-2 overflow-x-auto no-scrollbar border-t border-border">
              {quickActions.map((qa) => (
                <button key={qa.label} onClick={() => handleSend(qa.prompt)}
                  disabled={loading}
                  className={`px-3 py-1.5 rounded-full bg-surface-2 border border-border text-[10px] font-semibold text-text-2 hover:bg-surface-3 hover:text-text-1 transition-colors whitespace-nowrap shrink-0 ${loading ? 'opacity-40 pointer-events-none' : ''}`}>
                  {qa.label}
                </button>
              ))}
            </div>
            {/* Scroll hint gradient (right edge) */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-bg to-transparent pointer-events-none md:hidden" />
          </div>

          {/* Input — Unified Command Bar */}
          <div className="p-4 border-t border-border flex flex-col gap-2 shrink-0">
            <div className={`group flex items-end gap-2 p-1.5 rounded-2xl border bg-surface-2 transition-all duration-200 ${
              loading ? 'opacity-80' : 'focus-within:border-accent/50 focus-within:shadow-[0_0_15px_rgba(var(--accent-rgb),0.05)]'
            }`}>
              {/* Left Toggles (Icon Only) */}
              <div className="flex items-center gap-1 pl-1 pb-1">
                <button
                  onClick={toggleThinking}
                  className={`p-2 rounded-xl border transition-all ${
                    thinkingEnabled
                      ? 'border-accent/30 bg-accent/10 text-accent shadow-[0_0_10px_rgba(var(--accent-rgb),0.15)]'
                      : 'border-transparent text-text-3 hover:text-text-2 hover:bg-surface-3'
                  }`}
                  title={thinkingEnabled ? 'Thinking: ON (Super 120B)' : 'Thinking: OFF (Nano 30B)'}
                >
                  <Zap size={15} className={thinkingEnabled ? 'fill-current' : ''} />
                </button>

                <button
                  onClick={toggleWebSearch}
                  className={`p-2 rounded-xl border transition-all ${
                    webSearchEnabled
                      ? 'border-blue-500/30 bg-blue-500/10 text-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.15)]'
                      : 'border-transparent text-text-3 hover:text-text-2 hover:bg-surface-3'
                  }`}
                  title={webSearchEnabled ? 'Search: ON (Real-time)' : 'Search: OFF (Local)'}
                >
                  <Globe size={15} className={webSearchEnabled ? 'animate-pulse' : ''} />
                </button>
              </div>

              {/* Textarea Core */}
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  isTypingRef.current = true;
                }}
                onBlur={() => {
                  setTimeout(() => {
                    const activeEl = document.activeElement;
                    const isInteractive = activeEl?.tagName === 'BUTTON' || activeEl?.tagName === 'INPUT' || activeEl?.tagName === 'A';
                    if (!isInteractive) {
                      isTypingRef.current = false;
                    }
                  }, 100);
                }}
                onFocus={() => {
                  isTypingRef.current = true;
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder={
                  thinkingEnabled && webSearchEnabled ? "Conduct deep research..." :
                  thinkingEnabled ? "Solve a complex problem..." :
                  webSearchEnabled ? "Search and summarize..." :
                  "Ask Edith anything..."
                }
                rows={1}
                inputMode="text"
                autoComplete="off"
                className="flex-1 px-2 py-2 bg-transparent text-sm text-text-1 placeholder:text-text-3 focus:outline-none resize-none no-scrollbar min-h-[40px]"
                style={{ maxHeight: '120px' }}
              />

              {/* Right Status + Send */}
              <div className="flex items-center gap-2 pr-1 pb-1">
                {/* State Indicator (Compact) */}
                <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-lg bg-surface-3/50 border border-border/50">
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    thinkingEnabled && webSearchEnabled ? 'bg-purple-500 animate-pulse' :
                    thinkingEnabled ? 'bg-accent' :
                    webSearchEnabled ? 'bg-blue-500' :
                    'bg-green-500'
                  }`} />
                  <span className="text-[8px] font-mono text-text-3 uppercase tracking-tighter whitespace-nowrap">
                    {thinkingEnabled && webSearchEnabled ? 'Research' :
                     thinkingEnabled ? 'Logic' :
                     webSearchEnabled ? 'Fact-Check' :
                     'Fast'}
                  </span>
                </div>

                <Button
                  onClick={() => loading ? handleCancel() : handleSend()}
                  disabled={(!loading && !input.trim())}
                  variant={loading ? 'danger' : 'primary'}
                  className="w-10 h-10 p-0 rounded-xl shrink-0 flex items-center justify-center transition-all active:scale-95"
                  aria-label={loading ? "Stop generation" : "Send message"}
                >
                  {loading ? (
                    <Square size={16} fill="white" stroke="white" />
                  ) : (
                    <SendHorizontal 
                      size={18} 
                      stroke="white" 
                      strokeWidth={2.5} 
                      className="text-white flex-shrink-0 w-[18px] h-[18px]"
                    />
                  )}
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Memory Modal */}
      <Modal open={showMemory} onClose={() => setShowMemory(false)} title="🧠 Edith Memory" maxWidth="max-w-md">
        <div className="p-5">
          <p className="text-xs text-text-2 mb-3">Write anything you want Edith to always remember about your study context, preferences, or schedule.</p>
          <textarea
            value={memoryDraft}
            onChange={(e) => setMemoryDraft(e.target.value)}
            rows={8}
            className="w-full px-4 py-3 rounded-xl border border-border bg-surface-2 text-sm text-text-1 placeholder:text-text-3 focus:outline-none focus:border-accent resize-none"
            placeholder="e.g. I study best in the morning. I find GST harder than Income Tax. My exam group 1 is in September..."
          />
        </div>
        <div className="p-5 border-t border-border flex justify-end gap-3">
          <Button variant="ghost" onClick={() => setShowMemory(false)}>Cancel</Button>
          <Button onClick={saveMemory}>Save Memory</Button>
        </div>
      </Modal>

      <ConfirmModal
        open={!!sessionToDelete}
        onClose={() => setSessionToDelete(null)}
        onConfirm={() => {
          if (sessionToDelete) {
            deleteSession(sessionToDelete);
            toast.info(TOAST_MESSAGES.chatDeleted);
            if (activeSessionId === sessionToDelete) {
              setActiveSession(sessions[0]?.id || null);
            }
          }
        }}
        title="Delete Chat Session"
        message="Delete this chat with E.D.I.T.H? Those messages aren't coming back 🪦"
      />
    </div>
  );
});
