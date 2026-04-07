import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({
  open, onClose, title, children, maxWidth = 'max-w-xl',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle Escape key
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  // Initial focus
  useEffect(() => {
    if (open) {
      // Focus trap: focus the modal on open, but only if focus isn't already inside the modal (e.g. via autoFocus)
      // Use requestAnimationFrame to let autoFocus elements grab focus first
      const frame = requestAnimationFrame(() => {
        if (modalRef.current && !modalRef.current.contains(document.activeElement)) {
          modalRef.current.focus();
        }
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="presentation"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal content */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={title || 'Dialog'}
        tabIndex={-1}
        className={`
          relative w-full ${maxWidth} bg-surface border border-border
          rounded-3xl modal-shadow overflow-hidden
          flex flex-col max-h-[90vh]
          animate-modal-open
          focus:outline-none
        `}
      >
        {title && (
          <div className="p-5 border-b border-border flex justify-between items-center shrink-0">
            <h2 className="font-display text-lg font-bold uppercase tracking-tight text-text-1">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-surface-2 rounded-xl transition-colors text-text-2 hover:text-text-1"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
