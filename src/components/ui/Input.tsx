import React, { useEffect, useRef, useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const [shaking, setShaking] = useState(false);

  // Trigger shake on error change
  useEffect(() => {
    if (error) {
      setShaking(true);
      const timer = setTimeout(() => setShaking(false), 420);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className={`flex flex-col gap-1 ${shaking ? 'shake-error' : ''}`} ref={inputRef}>
      {label && (
        <label className="text-[10px] uppercase font-semibold tracking-wider text-text-2 ml-1">{label}</label>
      )}
      <input
        className={`
          w-full px-4 py-2.5 rounded-xl border border-border bg-surface-2
          text-sm text-text-1 font-body
          placeholder:text-text-3
          focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
          transition-colors
          ${error ? 'border-danger' : ''}
          ${className}
        `}
        {...props}
      />
      {error && <span className="text-[11px] text-danger ml-1">{error}</span>}
    </div>
  );
};
