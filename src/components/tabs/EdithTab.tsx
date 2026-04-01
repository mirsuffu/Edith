import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useAppStore } from '@/store/appStore';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { sendChatMessage, buildSystemPrompt } from '@/services/aiService';
import { isAIConfigured } from '@/config/ai';
import { generateId } from '@/utils/dates';
import { toast, TOAST_MESSAGES } from '@/utils/toast';
import type { ChatSession, ChatMessage } from '@/types';
import { Send, Plus, Brain, Trash2, MessageSquare, X, Square } from 'lucide-react';
import { ConfirmModal } from '@/components/modals/ConfirmModal';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const quickActions = [
  { label: '🔍 Audit my pace', prompt: 'Audit my current pace and give me honest feedback.' },
  { label: '📋 Plan tomorrow', prompt: 'Give me a strict study plan for tomorrow based on my weaknesses.' },
  { label: "🔄 What should I revise?", prompt: 'Based on my progress, which subjects should I prioritize for revision right now?' },
  { label: "😮‍💨 I'm burnt out", prompt: "I'm feeling burnt out. Give me a psychological reset and practical advice." },
];

export const EdithTab: React.FC = () => {
  const data = useAppStore((s) => s.data);
  const userName = useAppStore((s) => s.userProfile?.name || 'Student');
  const sessions = data.edithChatSessions;
  const activeSessionId = data.activeEdithSessionId;
  const addSession = useAppStore((s) => s.addChatSession);
  const addMessage = useAppStore((s) => s.addChatMessage);
  const setActiveSession = useAppStore((s) => s.setActiveEdithSessionId);
  const deleteSession = useAppStore((s) => s.deleteChatSession);
  const edithMemory = data.edithMemory;
  const setEdithMemory = useAppStore((s) => s.setEdithMemory);
  const setPendingToolCall = useAppStore((s) => s.setPendingToolCall);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showMemory, setShowMemory] = useState(false);
  const [memoryDraft, setMemoryDraft] = useState(edithMemory);
  const [showSessions, setShowSessions] = useState(false);
  const [sessionToDelete, setSessionToDelete] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const activeSession = sessions.find((s) => s.id === activeSessionId);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeSession?.messages.length, loading]);

  // Auto-resize textarea
  const autoResize = useCallback(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
    }
  }, []);

  useEffect(() => { autoResize(); }, [input, autoResize]);

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

    // Get all messages for context
    const currentSession = useAppStore.getState().data.edithChatSessions.find((s) => s.id === sessionId);
    const messages: any[] = (currentSession?.messages || []).map((m) => ({ role: m.role, content: m.content }));

    const systemPrompt = buildSystemPrompt(data, userName);
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      let response = await sendChatMessage(messages, systemPrompt, controller.signal);

      // Handle tool calls
      if (response.toolCalls && response.toolCalls.length > 0) {
        const call = response.toolCalls[0];
        if (call.type === 'function') {
          const args = JSON.parse(call.function.arguments);
          const toolName = call.function.name;

          // Request user confirmation via the modal
          const toolResult = await new Promise((resolve, reject) => {
            setPendingToolCall({
              id: call.id,
              name: toolName,
              args,
              description: 'AI Action',
              resolve,
              reject
            });
          });

          // Send result back to AI to get the final verbal response
          messages.push({ role: 'assistant', content: null, tool_calls: response.toolCalls });
          messages.push({ role: 'tool', tool_call_id: call.id, name: toolName, content: JSON.stringify(toolResult) });
          
          response = await sendChatMessage(messages, systemPrompt, controller.signal);
        }
      }

      if (response.content) {
        const assistantMsg: ChatMessage = { id: generateId(), role: 'assistant', content: response.content, timestamp: new Date().toISOString() };
        addMessage(sessionId!, assistantMsg);
      }
    } catch (e: any) {
      if (e.name !== 'AbortError') {
        const errMsg: ChatMessage = { id: generateId(), role: 'assistant', content: 'Failed to get response. Check your connection.', timestamp: new Date().toISOString() };
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
                className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer transition-colors group ${
                  s.id === activeSessionId ? 'bg-accent/10 text-accent' : 'text-text-2 hover:bg-surface-2'
                }`}>
                <MessageSquare size={13} className="shrink-0" />
                <span className="text-xs font-medium truncate flex-1">{s.title}</span>
                <button onClick={(e) => { e.stopPropagation(); setSessionToDelete(s.id); }}
                  className="opacity-0 group-hover:opacity-100 text-danger/60 hover:text-danger p-0.5 transition-opacity" aria-label="Delete session">
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
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                    s.id === activeSessionId ? 'bg-accent/10 text-accent' : 'text-text-2 hover:bg-surface-3'
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
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-accent text-white rounded-br-md'
                    : 'bg-surface-2 border border-border text-text-1 rounded-bl-md'
                }`}>
                  {msg.role === 'assistant' ? (
                    <div className="selectable prose prose-sm prose-invert max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&_p]:my-1.5 [&_ul]:my-1 [&_ol]:my-1 [&_li]:my-0.5 [&_strong]:text-text-1 [&_code]:bg-surface-3 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-accent [&_code]:text-xs [&_table]:w-full [&_table]:my-2 [&_th]:border [&_th]:border-border [&_th]:bg-surface-3 [&_th]:px-2 [&_th]:py-1 [&_th]:text-left [&_td]:border [&_td]:border-border [&_td]:px-2 [&_td]:py-1">
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
                <img src={import.meta.env.BASE_URL + 'logo.png'} alt="Edith" className="w-7 h-7 rounded-full shrink-0 mt-1" />
                <div className="bg-surface-2 border border-border rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-3">
                  <Brain size={14} className="text-accent animate-pulse" />
                  <div className="text-xs font-semibold text-text-2 tracking-wide">E.D.I.T.H is thinking</div>
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

          {/* Input — auto-resizing textarea */}
          <div className="p-3 border-t border-border flex gap-2 shrink-0 items-end">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Ask Edith anything..."
              rows={1}
              className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-surface-2 text-sm text-text-1 placeholder:text-text-3 focus:outline-none focus:border-accent resize-none no-scrollbar"
              style={{ maxHeight: '120px' }}
            />
            <Button 
              onClick={() => loading ? handleCancel() : handleSend()} 
              disabled={(!loading && !input.trim())} 
              variant={loading ? 'danger' : 'primary'}
              className="px-4 shrink-0"
              aria-label={loading ? "Stop generation" : "Send message"}
            >
              {loading ? <Square size={16} fill="currentColor" /> : <Send size={16} />}
            </Button>
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
};
