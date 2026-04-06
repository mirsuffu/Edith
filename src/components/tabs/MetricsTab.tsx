import React, { useState } from 'react';
import { useStats } from '@/hooks/useStats';
import { useAppStore } from '@/store/appStore';
import { SUBJECT_KEYS } from '@/constants';
import { formatDateDDMMYY, toLocalDateStr } from '@/utils/dates';
import { PieChart, TrendingUp, Flame, Calendar } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';

interface StatInfo {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

export const MetricsTab: React.FC = () => {
  const stats = useStats();
  const config = useAppStore((s) => s.data.config);
  const lectures = useAppStore((s) => s.data.progress.lectures);
  const revisions = useAppStore((s) => s.data.progress.revisions);
  const today = toLocalDateStr();
  const [infoCard, setInfoCard] = useState<StatInfo | null>(null);

  const statCards: StatInfo[] = [
    {
      label: 'Mastery',
      value: `${stats.overallProgress.toFixed(0)}%`,
      icon: <PieChart size={16} />,
      color: 'text-accent',
      description: 'Your overall mastery — the combined completion percentage across all subjects for both lectures and revisions. 100% means you\'ve covered everything.',
    },
    {
      label: 'Forecast',
      value: stats.projectedCompletion > 0 ? `${stats.projectedCompletion.toFixed(0)}%` : '—',
      icon: <TrendingUp size={16} />,
      color: stats.projectedCompletion > 0 ? (stats.isOnTrack ? 'text-success' : 'text-warning') : 'text-text-3',
      description: 'Projected completion by exam day based on your current daily study pace. Green means you\'re on track; yellow means you need to pick up the pace.',
    },
    {
      label: 'Streak',
      value: `${stats.streak}D`,
      icon: <Flame size={16} />,
      color: 'text-warning',
      description: 'Consecutive days you\'ve logged progress. Keep the streak alive — consistency beats intensity every time.',
    },
    {
      label: 'Pace',
      value: `${stats.requiredPerDay}`,
      icon: <Calendar size={16} />,
      color: 'text-text-1',
      description: 'The number of lectures you need to complete daily to finish all lectures before the Lectures Deadline. Calculated as: remaining lectures ÷ days to Lectures Deadline.',
    },
  ];

  return (
    <div className="h-full overflow-y-auto no-scrollbar pb-24 md:pb-4 tab-content-enter space-y-4">
      {/* Quick info */}
      <div className="flex items-center justify-between text-xs text-text-3 px-1">
        <span>{formatDateDDMMYY(today)}</span>
        <span className="font-mono">{stats.requiredPerDay} lectures/day required</span>
      </div>

      {/* Stat cards — 2x2 on mobile, 4 cols on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {statCards.map((s, i) => (
          <button
            key={i}
            onClick={() => setInfoCard(s)}
            className="bg-surface border border-border rounded-xl p-3 text-center card-shadow stagger-card hover:border-accent/30 transition-colors cursor-pointer"
            style={{ '--index': i } as React.CSSProperties}
          >
            <div className="flex items-center justify-center gap-1 text-text-3 mb-1.5">
              {s.icon}
            </div>
            <div className={`font-mono text-lg font-bold ${s.color}`}>{s.value}</div>
            <div className="text-[9px] font-semibold uppercase tracking-wider text-text-3 mt-0.5">{s.label}</div>
          </button>
        ))}
      </div>

      {/* Per-subject breakdown — two lines: lectures + revisions */}
      <div>
        <h3 className="text-[10px] uppercase font-bold tracking-wider text-text-3 mb-2 px-1">By Subject</h3>
        <div className="space-y-1.5">
          {SUBJECT_KEYS.map((key) => {
            const cfg = config[key];
            const lecPct = cfg.lectures > 0 ? (lectures[key] / cfg.lectures) * 100 : 0;
            const revPct = cfg.revisions > 0 ? (revisions[key] / cfg.revisions) * 100 : 0;
            const combined = (cfg.lectures + cfg.revisions) > 0
              ? ((lectures[key] + revisions[key]) / (cfg.lectures + cfg.revisions)) * 100
              : 0;

            return (
              <div key={key} className="p-2.5 bg-surface border border-border rounded-xl card-shadow">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: cfg.color }} />
                  <span className="text-xs font-semibold text-text-1 flex-1 truncate">{cfg.name}</span>
                  <span className="font-mono text-xs font-bold text-text-1">{combined.toFixed(0)}%</span>
                </div>
                {/* Lectures line */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[9px] text-text-3 w-12 shrink-0">Lec</span>
                  <div className="flex-1 bg-surface-2 rounded-full overflow-hidden h-1.5">
                    <div className="h-full rounded-full progress-fill" style={{ width: `${lecPct}%`, backgroundColor: cfg.color }} />
                  </div>
                  <span className="text-[9px] font-mono text-text-3 w-8 text-right">{lecPct.toFixed(0)}%</span>
                </div>
                {/* Revisions line */}
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-text-3 w-12 shrink-0">Rev</span>
                  <div className="flex-1 bg-surface-2 rounded-full overflow-hidden h-1.5">
                    <div className="h-full rounded-full progress-fill" style={{ width: `${revPct}%`, backgroundColor: cfg.color, opacity: 0.6 }} />
                  </div>
                  <span className="text-[9px] font-mono text-text-3 w-8 text-right">{revPct.toFixed(0)}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gradient divider */}
      <div className="gradient-divider" />

      {/* Warning */}
      {stats.warning && (
        <div className="text-[10px] text-warning font-semibold text-center py-2 px-3 bg-warning/8 border border-warning/15 rounded-xl">
          ⚠ {stats.warning}
        </div>
      )}

      {/* Stat info modal */}
      <Modal open={!!infoCard} onClose={() => setInfoCard(null)} title={infoCard?.label} maxWidth="max-w-sm">
        <div className="p-5 space-y-4">
          <div className="text-center">
            <div className={`font-mono text-3xl font-bold ${infoCard?.color || ''}`}>{infoCard?.value}</div>
          </div>
          <p className="text-sm text-text-2 leading-relaxed">{infoCard?.description}</p>
        </div>
      </Modal>
    </div>
  );
};
