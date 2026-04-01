import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { ShieldAlert, Lock, Unlock } from 'lucide-react';

interface EditorModeModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const EditorModeModal: React.FC<EditorModeModalProps> = ({ open, onClose, onConfirm }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleConfirm = () => {
    if (input.trim() === 'ENABLE IT') {
      setInput('');
      setError('');
      onConfirm();
      onClose();
    } else {
      setError('Type exactly "ENABLE IT" to proceed.');
    }
  };

  const handleClose = () => {
    setInput('');
    setError('');
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose} title="Enable Editor Mode" maxWidth="max-w-sm">
      <div className="p-5 space-y-4">
        {/* Warning icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-warning/10 border border-warning/20 flex items-center justify-center">
            <ShieldAlert size={32} className="text-warning" />
          </div>
        </div>

        {/* Warning message */}
        <div className="text-center space-y-2">
          <p className="text-sm font-semibold text-text-1">
            You're about to enable editing
          </p>
          <p className="text-xs text-text-2 leading-relaxed">
            Editor Mode allows changes to <span className="text-warning font-semibold">Syllabus, Planner, Schedule, 
            Exam Deadlines, Subject Workloads, Pacing,</span> and <span className="text-warning font-semibold">Edith AI Memory</span>.
            This safeguard prevents accidental edits to sensitive data.
          </p>
        </div>

        {/* Confirmation input */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-text-3 block">
            Type "ENABLE IT" to confirm
          </label>
          <input
            type="text"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(''); }}
            onKeyDown={(e) => e.key === 'Enter' && handleConfirm()}
            placeholder="ENABLE IT"
            className="w-full px-4 py-3 rounded-xl border border-border bg-surface-2 text-sm text-text-1 placeholder:text-text-3/40 focus:outline-none focus:border-warning font-mono text-center tracking-widest"
            autoFocus
            autoComplete="off"
            spellCheck={false}
          />
          {error && <p className="text-danger text-[11px] font-medium text-center">{error}</p>}
        </div>
      </div>

      <div className="p-4 border-t border-border flex justify-end gap-3">
        <Button variant="ghost" onClick={handleClose}>
          <Lock size={14} /> Keep Locked
        </Button>
        <Button
          className="bg-warning hover:bg-warning/80 text-black font-bold"
          onClick={handleConfirm}
        >
          <Unlock size={14} /> Enable
        </Button>
      </div>
    </Modal>
  );
};
