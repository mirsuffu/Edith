import React, { memo } from 'react';
import { useAppStore } from '@/store/appStore';
import { SUBJECT_KEYS } from '@/constants';
import type { SubjectKey, SubjectConfig } from '@/types';
import { Minus, Plus } from 'lucide-react';
import { useCardPop } from '@/hooks/useSounds';

/** Compact subject progress card */
const SubjectCard = memo<{
  subjectKey: SubjectKey;
  subject: SubjectConfig;
  current: number;
  category: 'lectures' | 'revisions';
  index: number;
}>(({ subjectKey, subject, current, category, index }) => {
  useCardPop();
  const updateProgress = useAppStore((s) => s.updateProgress);
  const max = subject[category];
  const pct = max > 0 ? (current / max) * 100 : 0;

  return (
    <div
      className="stagger-card bg-surface border border-border rounded-xl p-3 card-shadow transition-all"
      style={{ '--index': index } as React.CSSProperties}
    >
      {/* Name + percentage */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold text-text-1">{subject.name}</h3>
        <span className="font-mono text-sm font-bold" style={{ color: subject.color }}>
          {Math.round(pct)}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 rounded-full overflow-hidden bg-surface-2 mb-3">
        <div
          className="h-full rounded-full progress-fill"
          style={{ width: `${pct}%`, backgroundColor: subject.color }}
        />
      </div>

      {/* ± Buttons */}
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-mono text-text-3 flex-1">
          {current}/{max}
        </span>
        <button
          onClick={() => updateProgress(category, subjectKey, current - 1)}
          disabled={current <= 0}
          className="w-8 h-8 rounded-lg border border-border bg-surface-2 text-text-2 hover:text-text-1 flex items-center justify-center transition-all active:scale-90 disabled:opacity-20 disabled:pointer-events-none"
          aria-label={`Decrease ${subject.name}`}
        >
          <Minus size={14} />
        </button>
        <button
          onClick={() => updateProgress(category, subjectKey, current + 1)}
          disabled={current >= max}
          className="w-8 h-8 rounded-lg border border-border bg-surface-2 text-text-2 hover:text-text-1 flex items-center justify-center transition-all active:scale-90 disabled:opacity-20 disabled:pointer-events-none"
          aria-label={`Increase ${subject.name}`}
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
});
SubjectCard.displayName = 'SubjectCard';

export const LecturesTab: React.FC = () => {
  const config = useAppStore((s) => s.data.config);
  const lectures = useAppStore((s) => s.data.progress.lectures);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-3">
      {SUBJECT_KEYS.map((key, i) => (
        <SubjectCard
          key={key}
          subjectKey={key}
          subject={config[key]}
          current={lectures[key]}
          category="lectures"
          index={i}
        />
      ))}
    </div>
  );
};
