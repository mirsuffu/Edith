import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<string, string> = {
  primary: 'bg-accent text-white hover:brightness-110 shadow-lg',
  secondary: 'bg-surface-2 text-text-1 border border-border hover:bg-surface-3',
  ghost: 'bg-transparent text-text-2 hover:bg-surface-2 hover:text-text-1',
  danger: 'bg-danger/10 text-danger border border-danger/30 hover:bg-danger/20',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1.5 text-xs rounded-xl',
  md: 'px-5 py-2.5 text-sm rounded-xl',
  lg: 'px-8 py-3 text-sm rounded-xl',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <button
      className={`
        font-body font-semibold uppercase tracking-wide
        transition-all duration-150 active:scale-95
        focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none
        disabled:opacity-50 disabled:pointer-events-none
        inline-flex items-center justify-center gap-2
        ${variantClasses[variant]} ${sizeClasses[size]} ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spinner" />
      )}
      {children}
    </button>
  );
};
