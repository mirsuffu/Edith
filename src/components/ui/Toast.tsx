import React, { useEffect } from 'react';
import { X, Info, CheckCircle, AlertTriangle } from 'lucide-react';
import { useAppStore } from '@/store/appStore';
import { TOAST_DURATION_MS } from '@/constants';

const iconMap = {
  info: <Info size={16} />,
  success: <CheckCircle size={16} />,
  error: <AlertTriangle size={16} />,
};

const colorMap = {
  info: 'border-accent/40 bg-accent/10 text-accent',
  success: 'border-success/40 bg-success/10 text-success',
  error: 'border-danger/40 bg-danger/10 text-danger',
};

export const ToastContainer: React.FC = () => {
  const toasts = useAppStore((s) => s.toasts);
  const removeToast = useAppStore((s) => s.removeToast);

  return (
    <div className="fixed bottom-[5.5rem] md:bottom-6 right-4 z-[200] flex flex-col gap-2 pointer-events-none max-w-sm w-full" style={{ bottom: 'max(5.5rem, calc(5rem + env(safe-area-inset-bottom)))' }}>
      {toasts.map((t) => (
        <ToastItem key={t.id} id={t.id} message={t.message} type={t.type} createdAt={t.createdAt} onRemove={removeToast} />
      ))}
    </div>
  );
};

const ToastItem: React.FC<{
  id: string;
  message: string;
  type: 'info' | 'success' | 'error';
  createdAt: number;
  onRemove: (id: string) => void;
}> = ({ id, message, type, createdAt, onRemove }) => {
  useEffect(() => {
    const timer = setTimeout(() => onRemove(id), TOAST_DURATION_MS);
    return () => clearTimeout(timer);
  }, [id, onRemove]);

  return (
    <div
      className={`
        pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border
        font-body text-sm font-medium
        animate-toast-in card-shadow
        ${type === 'error' ? 'shake-error ' : ''}${colorMap[type]}
      `}
    >
      {iconMap[type]}
      <span className="flex-1 text-text-1">{message}</span>
      <button onClick={() => onRemove(id)} className="text-text-3 hover:text-text-1 transition-colors" aria-label="Dismiss">
        <X size={14} />
      </button>
    </div>
  );
};
