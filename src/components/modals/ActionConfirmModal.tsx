import React, { useEffect, useState, useRef } from 'react';
import { useAppStore } from '@/store/appStore';
import { Button } from '@/components/ui/Button';
import { executeToolCall, formatToolDescription } from '@/services/aiTools';
import { Brain, X, Check } from 'lucide-react';
import { toast } from '@/utils/toast';

const COUNTDOWN_SECONDS = 15;

export const ActionConfirmModal: React.FC = () => {
  const pendingCall = useAppStore((s) => s.pendingToolCall);
  const setPendingCall = useAppStore((s) => s.setPendingToolCall);

  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_SECONDS);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!pendingCall) {
      setTimeLeft(COUNTDOWN_SECONDS);
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    // Start countdown
    setTimeLeft(COUNTDOWN_SECONDS);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          handleConfirm();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [pendingCall]);

  const handleAbort = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (pendingCall) {
      pendingCall.resolve({ success: false, result: 'User aborted the action inside the UI modal.' });
      setPendingCall(null);
      toast.info('Action aborted. Edith will stand by.');
    }
  };

  const handleConfirm = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (pendingCall) {
      const { name, args, resolve } = pendingCall;
      const res = executeToolCall(name, args);
      resolve(res);
      setPendingCall(null);
    }
  };

  if (!pendingCall) return null;

  const desc = formatToolDescription(pendingCall.name, pendingCall.args);
  const progressPct = ((COUNTDOWN_SECONDS - timeLeft) / COUNTDOWN_SECONDS) * 100;

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleAbort} />
      
      <div className="relative w-full max-w-sm bg-surface border border-accent/40 rounded-3xl modal-shadow overflow-hidden animate-modal-open flex flex-col focus:outline-none">
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center gap-3 bg-accent/5">
          <Brain className="text-accent" size={20} />
          <h2 className="font-display text-base font-bold uppercase tracking-tight text-text-1">Edith Action</h2>
        </div>

        {/* Content */}
        <div className="p-6 text-center space-y-4">
          <p className="text-sm font-medium text-text-2">Edith wants to execute:</p>
          <div className="bg-surface-2 border border-border rounded-xl p-4 inline-block mx-auto">
            <code className="text-xs font-mono text-accent">{pendingCall.name}</code>
            <p className="text-[13px] font-bold text-text-1 mt-2">{desc}</p>
          </div>
          <p className="text-[10px] text-text-3 font-mono">Auto-confirming in {timeLeft}s...</p>
        </div>

        {/* Action Buttons & Progress */}
        <div className="p-4 border-t border-border flex items-center gap-3 bg-surface-1 relative">
          <div 
            className="absolute top-0 left-0 h-[2px] bg-accent transition-all duration-1000 ease-linear"
            style={{ width: `${progressPct}%` }}
          />
          <Button variant="ghost" className="flex-1" onClick={handleAbort} autoFocus>
            <X size={16} /> Abort
          </Button>
          <Button variant="primary" className="flex-1" onClick={handleConfirm}>
            <Check size={16} /> Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};
