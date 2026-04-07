import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  glowColor?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children, className = '', hoverable = false, glowColor, style, onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        bg-surface border border-border rounded-2xl card-shadow
        transition-all duration-200
        ${hoverable ? 'hover:card-shadow-hover hover:-translate-y-0.5 cursor-pointer' : ''}
        ${className}
      `}
      style={{
        ...style,
        ...(glowColor ? { borderColor: `${glowColor}40` } : {}),
      }}
    >
      {children}
    </div>
  );
};
