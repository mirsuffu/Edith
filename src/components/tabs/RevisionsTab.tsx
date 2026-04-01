import React, { memo } from 'react';
import { useAppStore } from '@/store/appStore';
import { SUBJECT_KEYS } from '@/constants';
import type { SubjectKey, SubjectConfig } from '@/types';
import { Minus, Plus } from 'lucide-react';

const RevisionCard = memo<{
  subjectKey: SubjectKey; subject: SubjectConfig; current: number; index: number;
}>(({ subjectKey, subject, current, index }) => {
  const updateProgress = useAppStore((s) => s.updateProgress);
  const max = subject.revisions;
  const pct = max > 0 ? (current / max) * 100 : 0;

  return (
    <div
      className="stagger-card bg-surface border border-border rounded-xl p-3 card-shadow transition-all"
      style={{ '--index': index } as React.CSSProperties}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold text-text-1">{subject.name}</h3>
        <span className="font-mono text-sm font-bold" style={{ color: subject.color }}>
          {Math.round(pct)}%
        </span>
      </div>

      <div className="w-full h-1.5 rounded-full overflow-hidden bg-surface-2 mb-3">
        <div className="h-full rounded-full progress-fill" style={{ width: `${pct}%`, backgroundColor: subject.color }} />
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[10px] font-mono text-text-3 flex-1">{current}/{max}</span>
        <button onClick={() => updateProgress('revisions', subjectKey, current - 1)} disabled={current <= 0}
          className="w-8 h-8 rounded-lg border border-border bg-surface-2 text-text-2 hover:text-text-1 flex items-center justify-center transition-all active:scale-90 disabled:opacity-20"
          aria-label={`Decrease ${subject.name}`}><Minus size={14} /></button>
        <button onClick={() => updateProgress('revisions', subjectKey, current + 1)} disabled={current >= max}
          className="w-8 h-8 rounded-lg border border-border bg-surface-2 text-text-2 hover:text-text-1 flex items-center justify-center transition-all active:scale-90 disabled:opacity-20"
          aria-label={`Increase ${subject.name}`}><Plus size={14} /></button>
      </div>
    </div>
  );
});
RevisionCard.displayName = 'RevisionCard';

export const RevisionsTab: React.FC = () => {
  const config = useAppStore((s) => s.data.config);
  const revisions = useAppStore((s) => s.data.progress.revisions);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-3">
      {SUBJECT_KEYS.map((key, i) => (
        <RevisionCard key={key} subjectKey={key} subject={config[key]} current={revisions[key]} index={i} />
      ))}
    </div>
  );
};
