import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ label, children, className = '', ...props }) => (
  <div className="flex flex-col gap-1">
    {label && (
      <label className="text-[10px] uppercase font-semibold tracking-wider text-text-2 ml-1">{label}</label>
    )}
    <select
      className={`
        w-full px-4 py-2.5 rounded-xl border border-border bg-surface-2
        text-sm text-text-1 font-body cursor-pointer
        focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
        transition-colors
        ${className}
      `}
      {...props}
    >
      {children}
    </select>
  </div>
);
