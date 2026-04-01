import React, { useEffect, useRef } from 'react';
import { playPop } from '@/hooks/useSounds';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  glowColor?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

let cardMountCounter = 0;

export const Card: React.FC<CardProps> = ({
  children, className = '', hoverable = false, glowColor, style, onClick,
}) => {
  const hasPopped = useRef(false);

  useEffect(() => {
    if (hasPopped.current) return;
    hasPopped.current = true;
    // Stagger pop sounds so rapid card renders don't all fire at once
    const idx = cardMountCounter++;
    const delay = Math.min(idx * 60, 400);
    const t = setTimeout(() => playPop(), delay);
    return () => clearTimeout(t);
  }, []);

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
