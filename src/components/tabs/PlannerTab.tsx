import React, { useState, useMemo, memo, useCallback, useRef, useEffect } from 'react';
import { useAppStore } from '@/store/appStore';
import { useEditorMode } from '@/hooks/useEditorMode';
import { SUBJECT_KEYS } from '@/constants';
import type { SubjectKey, PlannerEntry, PlannerSubject } from '@/types';
import { toLocalDateStr, getWeekDates, formatDateDDMMYY, isToday, isPast, addDays, getDayName, generateId } from '@/utils/dates';
import { Check, Bell, ChevronLeft, ChevronRight, Plus, Trash2 } from 'lucide-react';
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
  const deletePlannerEntry = useAppStore((s) => s.deletePlannerEntry);
  const { isEditorMode } = useEditorMode();

  const entries = useMemo(() => planner.filter((p) => p.date === date), [planner, date]);

  const handleNoteChange = useCallback((id: string, subject: PlannerSubject, note: string) => {
    if (!isEditorMode) { toast.error('Enable Editor Mode first.'); return; }
    const existing = planner.find((p) => p.id === id);
    if (existing) {
      updatePlannerEntry({ ...existing, subject, note });
    }
  }, [isEditorMode, planner, updatePlannerEntry]);
  
  const handleSubjectChange = useCallback((id: string, subject: PlannerSubject) => {
    if (!isEditorMode) { toast.error('Enable Editor Mode first.'); return; }
    const existing = planner.find((p) => p.id === id);
    if (existing) {
      updatePlannerEntry({ ...existing, subject });
    }
  }, [isEditorMode, planner, updatePlannerEntry]);

  const addPlan = useCallback(() => {
    if (!isEditorMode) { toast.error('Enable Editor Mode first.'); return; }
    if (past) { toast.error('Cannot add plans to past dates.'); return; }
    updatePlannerEntry({
      id: generateId(),
      date,
      subject: SUBJECT_KEYS[0],
      note: '',
      ticked: false,
      notifyEnabled: true,
    });
  }, [date, isEditorMode, past, updatePlannerEntry]);

  const handleDelete = useCallback((id: string) => {
    if (!isEditorMode) return;
    if (window.confirm('Are you sure you want to delete this plan?')) {
      deletePlannerEntry(id);
    }
  }, [isEditorMode, deletePlannerEntry]);

  // Tick is unlocked
  const handleToggleTick = useCallback((id: string) => {
    togglePlannerTick(id);
  }, [togglePlannerTick]);

  // Notify is unlocked
  const toggleNotify = useCallback((id: string) => {
    const existing = planner.find((p) => p.id === id);
    if (!existing?.note) return;
    const newNotify = !existing.notifyEnabled;
    updatePlannerEntry({ ...existing, notifyEnabled: newNotify });

    if (newNotify) {
      const subjName = existing.subject === 'other' ? 'Other' : config[existing.subject as SubjectKey]?.name || 'Study';
      schedulePersistentNotification(
        existing.id,
        `Study: ${subjName}`,
        existing.note,
        `${date}T08:00:00`
      );
    } else {
      cancelNotification(existing.id);
    }
  }, [date, planner, config, updatePlannerEntry]);

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
        {entries.length === 0 && !isEditorMode && (
          <div className="text-center py-3 text-[11px] text-text-3 font-medium">
            No plans for this day.
          </div>
        )}
        {entries.length === 0 && isEditorMode && !past && (
          <button
            onClick={addPlan}
            className="w-full py-2 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-text-3 hover:text-accent border border-dashed border-border hover:border-accent/30 rounded-lg transition-colors"
          >
            <Plus size={12} /> Add your first plan
          </button>
        )}
        
        {entries.map((entry) => {
          const isOther = entry.subject === 'other';
          const subjColor = isOther ? '#64748b' : config[entry.subject as SubjectKey]?.color || '#64748b';
          
          return (
            <div key={entry.id} className="flex items-center gap-1.5 py-1">
              {/* Delete button (Editor Mode) */}
              {isEditorMode && (
                <button
                  onClick={() => handleDelete(entry.id)}
                  className="w-6 h-6 flex items-center justify-center text-danger/60 hover:text-danger hover:bg-danger/10 rounded transition-colors shrink-0"
                  aria-label="Delete plan"
                  title="Delete plan"
                >
                  <Trash2 size={12} />
                </button>
              )}
              
              {/* Subject Dropdown */}
              <div className="relative shrink-0 flex items-center">
                <select
                  value={entry.subject}
                  onChange={(e) => handleSubjectChange(entry.id, e.target.value as PlannerSubject)}
                  disabled={!isEditorMode || past}
                  className="appearance-none bg-transparent text-[10px] font-bold focus:outline-none focus:ring-0 pl-1 pr-3.5 py-1 cursor-pointer text-left w-[85px] truncate uppercase tracking-wide"
                  style={{ color: subjColor }}
                  aria-label="Select subject"
                >
                  {SUBJECT_KEYS.map(k => (
                    <option key={k} value={k} className="text-text-1 bg-surface normal-case">{config[k]?.name}</option>
                  ))}
                  <option value="other" className="text-text-1 bg-surface normal-case">Other</option>
                </select>
                {/* Custom dropdown arrow */}
                {!past && isEditorMode && (
                  <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2" style={{ color: subjColor, opacity: 0.7 }}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                )}
              </div>

              {/* Plan Input */}
              <div className="flex-1 min-w-0 flex items-center bg-surface-2/30 rounded pl-1.5 pr-1">
                <DebouncedInput
                  value={entry.note}
                  onChange={(val) => handleNoteChange(entry.id, entry.subject, val)}
                  disabled={!isEditorMode || past}
                  placeholder="What's the plan?"
                  maxLength={50}
                />
              </div>

              {/* Notify toggle */}
              <button
                onClick={() => toggleNotify(entry.id)}
                className={`w-6 h-6 flex items-center justify-center shrink-0 rounded transition-colors ${
                  entry.notifyEnabled ? 'text-warning bg-warning/10 hover:bg-warning/20' : 'text-text-3/40 hover:text-text-3/80 hover:bg-surface-2'
                }`}
                aria-label="Toggle notification"
                title="Toggle reminder"
              >
                <Bell size={12} />
              </button>

              {/* Tick button */}
              <button
                onClick={() => handleToggleTick(entry.id)}
                disabled={!entry.note}
                className={`w-6 h-6 rounded flex items-center justify-center shrink-0 transition-colors ${
                  entry.ticked
                    ? 'bg-success/20 border border-success/30 text-success'
                    : entry.note
                      ? 'border border-border/60 hover:border-success text-text-3 cursor-pointer hover:bg-surface-2'
                      : 'border border-border/20 opacity-30 cursor-not-allowed'
                  }`}
                aria-label={entry.ticked ? 'Mark undone' : 'Mark done'}
              >
                {entry.ticked && <Check size={12} />}
              </button>
            </div>
          );
        })}
        {entries.length > 0 && isEditorMode && !past && (
          <button
            onClick={addPlan}
            className="w-full mt-1.5 py-1.5 flex items-center justify-center gap-1.5 text-[10px] font-semibold text-text-3 hover:text-accent hover:bg-surface-2 rounded transition-colors"
          >
            <Plus size={10} /> Add Plan
          </button>
        )}
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
