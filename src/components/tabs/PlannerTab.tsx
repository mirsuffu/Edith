import React, { useState, useMemo, memo, useCallback, useRef, useEffect } from 'react';
import { useAppStore } from '@/store/appStore';
import { useEditorMode } from '@/hooks/useEditorMode';
import { SUBJECT_KEYS } from '@/constants';
import type { SubjectKey, PlannerEntry } from '@/types';
import { toLocalDateStr, getWeekDates, formatDateDDMMYY, isToday, isPast, addDays, getDayName, generateId } from '@/utils/dates';
import { Check, Bell, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from '@/utils/toast';
import { schedulePersistentNotification, cancelNotification } from '@/services/notificationService';

/** Local-state input that only commits on blur/Enter — prevents defocus on every keystroke */
const DebouncedInput = memo<{
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
  placeholder?: string;
  maxLength?: number;
}>(({ value, onChange, disabled, placeholder, maxLength }) => {
  const [local, setLocal] = useState(value);
  const ref = useRef<HTMLInputElement>(null);

  // Sync local when external value changes (e.g. from AI tool)
  useEffect(() => { setLocal(value); }, [value]);

  const commit = useCallback(() => {
    if (local !== value) onChange(local);
  }, [local, value, onChange]);

  return (
    <input
      ref={ref}
      type="text"
      value={local}
      onChange={(e) => setLocal(e.target.value)}
      onBlur={commit}
      onKeyDown={(e) => { if (e.key === 'Enter') { commit(); ref.current?.blur(); } }}
      disabled={disabled}
      placeholder={placeholder}
      maxLength={maxLength}
      className="flex-1 text-[11px] bg-transparent border-none text-text-1 placeholder:text-text-3/30 focus:outline-none min-w-0 py-0.5"
    />
  );
});
DebouncedInput.displayName = 'DebouncedInput';

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

  const handleNoteChange = useCallback((subject: SubjectKey, note: string) => {
    if (!isEditorMode) { toast.error('Enable Editor Mode first.'); return; }
    const existing = getEntry(date, subject);
    updatePlannerEntry({
      id: existing?.id || generateId(),
      date, subject, note,
      ticked: existing?.ticked || false,
      notifyEnabled: existing?.notifyEnabled || false,
      notifyTime: existing?.notifyTime,
    });
  }, [date, isEditorMode, planner]);

  // Tick is unlocked (no Editor Mode needed)
  const handleToggleTick = useCallback((subject: SubjectKey) => {
    togglePlannerTick(date, subject);
  }, [date]);

  // Notify is unlocked (no Editor Mode needed)
  const toggleNotify = useCallback((subject: SubjectKey) => {
    const existing = getEntry(date, subject);
    if (!existing?.note) return;
    const newNotify = !existing.notifyEnabled;
    updatePlannerEntry({ ...existing, notifyEnabled: newNotify });

    if (newNotify) {
      // Schedule for 8:00 AM on that day
      schedulePersistentNotification(
        existing.id || generateId(),
        `Study: ${config[subject].name}`,
        existing.note,
        `${date}T08:00:00`
      );
    } else {
      cancelNotification(existing.id);
    }
  }, [date, planner]);

  const dateType = today ? 'today' : past ? 'past' : 'future';

  return (
    <div
      data-date-type={dateType}
      className="bg-surface border border-border rounded-xl overflow-hidden transition-colors"
    >
      {/* Day header */}
      <div className={`px-3 py-1.5 flex items-center gap-2 text-xs font-semibold ${today ? 'text-success bg-success/8' : past ? 'text-text-3 bg-surface-2/30' : 'text-text-2 bg-surface-2/20'
        }`}>
        <span className="font-bold">{getDayName(date).slice(0, 3)}</span>
        <span className="font-mono text-[10px] text-text-3">{formatDateDDMMYY(date)}</span>
        {today && <span className="text-[9px] bg-success/15 text-success px-1.5 py-0.5 rounded-full ml-auto font-bold">Today</span>}
      </div>

      {/* Subjects */}
      <div className="p-2 space-y-1">
        {SUBJECT_KEYS.map((subj) => {
          const entry = getEntry(date, subj);
          return (
            <div key={subj} className="flex items-center gap-1.5">
              {/* Subject dot */}
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: config[subj].color }} />
              
              <div className="flex-1 min-w-0">
                <DebouncedInput
                  value={entry?.note || ''}
                  onChange={(val) => handleNoteChange(subj, val)}
                  disabled={!isEditorMode}
                  placeholder={config[subj].name}
                  maxLength={50}
                />
              </div>

              {/* Tick button */}
              <button
                onClick={() => handleToggleTick(subj)}
                disabled={!entry?.note}
                className={`w-5 h-5 rounded flex items-center justify-center shrink-0 transition-colors ${entry?.ticked
                    ? 'bg-success text-white'
                    : entry?.note
                      ? 'border border-border/60 hover:border-success text-text-3'
                      : 'border border-border/20 opacity-30 cursor-not-allowed'
                  }`}
                aria-label={entry?.ticked ? 'Mark undone' : 'Mark done'}
              >
                {entry?.ticked && <Check size={10} />}
              </button>

              {/* Notify toggle */}
              <button
                onClick={() => toggleNotify(subj)}
                className={`w-5 h-5 flex items-center justify-center shrink-0 transition-colors ${entry?.notifyEnabled ? 'text-warning' : 'text-text-3/20'
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
  // Capture "today" once at mount using local timezone
  const todayStrAtMount = useMemo(() => toLocalDateStr(), []);
  
  const [centerDate, setCenterDate] = useState(todayStrAtMount);
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
          onClick={() => setCenterDate(todayStrAtMount)}
          className="px-3 py-1 rounded-lg text-xs font-semibold text-text-2 hover:bg-surface-2 transition-colors"
        >
          {`${formatDateDDMMYY(dates[0])} — ${formatDateDDMMYY(dates[dates.length - 1])}`}
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
          const today = date === todayStrAtMount;
          const past = date < todayStrAtMount;
          return <DayCard key={date} date={date} today={today} past={past} />;
        })}
      </div>
    </div>
  );
};
