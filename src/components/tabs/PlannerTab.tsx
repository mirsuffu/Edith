import React, { useState, useEffect, useMemo, memo } from 'react';
import { useAppStore } from '@/store/appStore';
import { useEditorMode } from '@/hooks/useEditorMode';
import { SUBJECT_KEYS } from '@/constants';
import type { SubjectKey, PlannerEntry } from '@/types';
import { toLocalDateStr, getWeekDates, formatDisplayDate, isToday, isPast, addDays, getDayName } from '@/utils/dates';
import { Check, Bell, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from '@/utils/toast';
import { useCardPop } from '@/hooks/useSounds';

const DayCard = memo<{
  date: string;
  today: boolean;
  past: boolean;
}>(({ date, today, past }) => {
  const config = useAppStore((s) => s.data.config);
  const planner = useAppStore((s) => s.data.progress.planner);
  const updatePlannerEntry = useAppStore((s) => s.updatePlannerEntry);
  const togglePlannerTick = useAppStore((s) => s.togglePlannerTick);
  const { isEditorMode } = useEditorMode();

  const getEntry = (date: string, subject: SubjectKey): PlannerEntry | undefined =>
    planner.find((p) => p.date === date && p.subject === subject);

  // Local state to prevent focus loss during typing
  const [localNotes, setLocalNotes] = useState<Record<string, string>>({});

  useEffect(() => {
    const next: Record<string, string> = {};
    SUBJECT_KEYS.forEach(k => {
      next[k] = getEntry(date, k)?.note || '';
    });
    setLocalNotes(next);
  }, [date, planner]);

  const handleNoteChange = (subject: SubjectKey, note: string) => {
    setLocalNotes(p => ({ ...p, [subject]: note }));
  };

  const handleBlur = (subject: SubjectKey) => {
    if (!isEditorMode) return;
    const existing = getEntry(date, subject);
    const note = localNotes[subject];
    if (note === (existing?.note || '')) return;

    updatePlannerEntry({
      date, subject, note,
      ticked: existing?.ticked || false,
      notifyEnabled: existing?.notifyEnabled || false,
      notifyTime: existing?.notifyTime,
    });
  };

  const handleToggleTick = (date: string, subject: SubjectKey) => {
    if (!isEditorMode) { toast.error('Enable Editor Mode first.'); return; }
    togglePlannerTick(date, subject);
  };

  const toggleNotify = (date: string, subject: SubjectKey) => {
    const existing = getEntry(date, subject);
    if (!existing?.note) return;
    updatePlannerEntry({ ...existing, notifyEnabled: !existing.notifyEnabled });
  };

  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        today 
          ? 'border-success/40 bg-success/10 card-shadow-success shadow-[0_0_15px_rgba(34,197,94,0.1)]' 
          : past 
            ? 'border-danger/30 bg-danger/[0.05] opacity-90' 
            : 'bg-surface border-border'
      }`}
    >
      {/* Day header */}
      <div className={`px-3 py-1.5 flex items-center gap-2 text-xs font-semibold ${
        today ? 'text-success bg-success/10' : past ? 'text-danger bg-danger/5' : 'text-text-2 bg-surface-2/20'
      }`}>
        <span className="font-bold">{getDayName(date).slice(0, 3)}</span>
        <span className="font-mono text-[10px] opacity-60">{formatDisplayDate(date)}</span>
        {today && <span className="text-[9px] bg-success/20 text-success px-1.5 py-0.5 rounded-full ml-auto">Today</span>}
        {!today && past && <span className="text-[9px] bg-danger/10 text-danger px-1.5 py-0.5 rounded-full ml-auto">Past</span>}
      </div>

      {/* Subjects */}
      <div className="p-2 space-y-1">
        {SUBJECT_KEYS.map((subj) => {
          const entry = getEntry(date, subj);
          return (
            <div key={subj} className="flex items-center gap-1.5">
              {/* Subject dot */}
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: config[subj].color }} />

              {/* Subject name */}
              <span className="text-[10px] font-semibold w-16 shrink-0 truncate text-text-2">
                {config[subj].name}
              </span>

              {/* Note input */}
              <input
                type="text"
                value={localNotes[subj] || ''}
                onChange={(e) => handleNoteChange(subj, e.target.value)}
                onBlur={() => handleBlur(subj)}
                placeholder="—"
                maxLength={50}
                disabled={!isEditorMode && !entry?.note}
                className="flex-1 text-[11px] bg-transparent border-none text-text-1 placeholder:text-text-3/30 focus:outline-none min-w-0 py-0.5"
              />

              <button
                onClick={() => handleToggleTick(date, subj)}
                disabled={!entry?.note}
                className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-colors ${
                  entry?.ticked 
                    ? 'bg-success text-white border-success' 
                    : entry?.note 
                      ? 'border-border hover:border-accent bg-surface-3/50' 
                      : 'border-border/30 opacity-10'
                }`}
                aria-label="Toggle done"
              >
                {entry?.ticked && <Check size={10} strokeWidth={4} />}
              </button>

              {/* Notify */}
              <button
                onClick={() => toggleNotify(date, subj)}
                disabled={!entry?.note}
                className={`w-5 h-5 flex items-center justify-center shrink-0 transition-colors ${
                  entry?.notifyEnabled ? 'text-warning' : 'text-text-3/20'
                } ${!entry?.note ? 'opacity-0' : ''}`}
                aria-label="Toggle notification"
              >
                <Bell size={10} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
});
DayCard.displayName = 'DayCard';

export const PlannerTab: React.FC = () => {
  const [centerDate, setCenterDate] = useState(toLocalDateStr());
  const dates = useMemo(() => getWeekDates(centerDate), [centerDate]);

  return (
    <div className="h-full overflow-y-auto no-scrollbar pb-24 md:pb-4 tab-content-enter">
      {/* Week navigation */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => setCenterDate(addDays(centerDate, -7))}
          className="p-2 rounded-lg border border-border hover:bg-surface-2 text-text-3 transition-colors"
          aria-label="Previous week"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => setCenterDate(toLocalDateStr())}
          className="px-3 py-1 rounded-lg text-xs font-semibold text-text-2 hover:bg-surface-2 transition-colors"
        >
          {`${formatDisplayDate(dates[0]).replace(/^[a-zA-Z]+,\s*/, '')} — ${formatDisplayDate(dates[dates.length - 1]).replace(/^[a-zA-Z]+,\s*/, '')}`}
        </button>
        <button
          onClick={() => setCenterDate(addDays(centerDate, 7))}
          className="p-2 rounded-lg border border-border hover:bg-surface-2 text-text-3 transition-colors"
          aria-label="Next week"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Day cards — mobile-friendly vertical stack */}
      <div className="space-y-2">
        {dates.map((date) => {
          const today = isToday(date);
          const past = isPast(date) && !today;
          return <DayCard key={date} date={date} today={today} past={past} />;
        })}
      </div>
    </div>
  );
};
