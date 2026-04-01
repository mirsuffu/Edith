import React, { useMemo } from 'react';

/** Generate deterministic-random particles for the background */
const generateParticles = (count: number) => {
  const particles = [];
  for (let i = 0; i < count; i++) {
    const size = 2 + (i * 7 + 3) % 5; // 2-6px
    const left = ((i * 31 + 17) % 100); // 0-99%
    const duration = 10 + (i * 13 + 5) % 14; // 10-23s
    const delay = (i * 3 + 1) % 15; // 0-14s
    const drift = -30 + ((i * 19 + 7) % 60); // -30 to 30px
    const opacity = 0.2 + ((i * 11 + 3) % 40) / 100; // 0.20-0.59
    particles.push({ size, left, duration, delay, drift, opacity, id: i });
  }
  return particles;
};

export const FloatingParticles: React.FC = () => {
  const particles = useMemo(() => generateParticles(38), []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            bottom: `-${p.size + 10}px`,
            background: `radial-gradient(circle, var(--accent) 0%, transparent 70%)`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--particle-drift': `${p.drift}px`,
            '--particle-opacity': p.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};
