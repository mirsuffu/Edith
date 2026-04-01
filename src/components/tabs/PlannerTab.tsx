import React, { useState, useMemo } from 'react';
import { useAppStore } from '@/store/appStore';
import { useEditorMode } from '@/hooks/useEditorMode';
import { SUBJECT_KEYS } from '@/constants';
import type { SubjectKey, PlannerEntry } from '@/types';
import { toLocalDateStr, getWeekDates, formatDisplayDate, isToday, isPast, addDays, getDayName } from '@/utils/dates';
import { Check, Bell, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from '@/utils/toast';

export const PlannerTab: React.FC = () => {
  const config = useAppStore((s) => s.data.config);
  const planner = useAppStore((s) => s.data.progress.planner);
  const updatePlannerEntry = useAppStore((s) => s.updatePlannerEntry);
  const togglePlannerTick = useAppStore((s) => s.togglePlannerTick);
  const { isEditorMode } = useEditorMode();

  const [centerDate, setCenterDate] = useState(toLocalDateStr());
  const dates = useMemo(() => getWeekDates(centerDate), [centerDate]);

  const getEntry = (date: string, subject: SubjectKey): PlannerEntry | undefined =>
    planner.find((p) => p.date === date && p.subject === subject);

  const handleNoteChange = (date: string, subject: SubjectKey, note: string) => {
    if (!isEditorMode) { toast.error('Enable Editor Mode first.'); return; }
    const existing = getEntry(date, subject);
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
          This Week
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

          return (
            <div
              key={date}
              className={`bg-surface border rounded-xl overflow-hidden transition-colors ${
                today ? 'border-accent/30' : past ? 'border-border opacity-70' : 'border-border'
              }`}
            >
              {/* Day header */}
              <div className={`px-3 py-1.5 flex items-center gap-2 text-xs font-semibold ${
                today ? 'text-accent bg-accent/5' : past ? 'text-text-3 bg-surface-2/30' : 'text-text-2 bg-surface-2/20'
              }`}>
                <span className="font-bold">{getDayName(date).slice(0, 3)}</span>
                <span className="font-mono text-[10px] text-text-3">{date.slice(5)}</span>
                {today && <span className="text-[9px] bg-accent/12 text-accent px-1.5 py-0.5 rounded-full ml-auto">Today</span>}
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
                        value={entry?.note || ''}
                        onChange={(e) => handleNoteChange(date, subj, e.target.value)}
                        placeholder="—"
                        maxLength={50}
                        className="flex-1 text-[11px] bg-transparent border-none text-text-1 placeholder:text-text-3/30 focus:outline-none min-w-0 py-0.5"
                      />

                      {/* Tick */}
                      <button
                        onClick={() => handleToggleTick(date, subj)}
                        disabled={!entry?.note}
                        className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-colors ${
                          entry?.ticked ? 'bg-success/20 border-success/30 text-success' : entry?.note ? 'border-border hover:border-accent' : 'border-border/30 opacity-20'
                        }`}
                        aria-label="Toggle done"
                      >
                        {entry?.ticked && <Check size={10} />}
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
        })}
      </div>
    </div>
  );
};
