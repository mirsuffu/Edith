import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { useAppStore } from '@/store/appStore';
import { toLocalDateStr, formatFullDate } from '@/utils/dates';
import type { SubjectKey } from '@/types';
import { Check, Clock } from 'lucide-react';

export const TodayModal: React.FC = () => {
  const show = useAppStore((s) => s.showTodayModal);
  const setShow = useAppStore((s) => s.setShowTodayModal);
  const planner = useAppStore((s) => s.data.progress.planner);
  const schedule = useAppStore((s) => s.data.progress.schedule);
  const config = useAppStore((s) => s.data.config);
  const togglePlannerTick = useAppStore((s) => s.togglePlannerTick);
  const toggleScheduleComplete = useAppStore((s) => s.toggleScheduleComplete);

  const today = toLocalDateStr();

  const todayPlanner = planner.filter((p) => p.date === today);

  // Get schedule items: today-specific + fixed schedule items
  const todaySchedule = schedule
    .filter((s) => s.date === today || s.date === '__fixed__')
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  return (
    <Modal open={show} onClose={() => setShow(false)} title={`📅 Today — ${formatFullDate(today)}`} maxWidth="max-w-lg">
      <div className="p-5 overflow-y-auto no-scrollbar max-h-[60vh] space-y-6">

        {/* Schedule section */}
        {todaySchedule.length > 0 && (
          <div>
            <h3 className="text-[10px] uppercase font-bold tracking-widest text-text-3 mb-3">Schedule</h3>
            <div className="space-y-2">
              {todaySchedule.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-3 rounded-xl bg-surface-2 border border-border">
                  <span className="font-mono text-xs text-text-2 w-12 shrink-0">{item.startTime}</span>
                  <span className="flex-1 text-sm font-medium text-text-1 truncate">{item.customTitle}</span>
                  {item.durationMinutes > 0 && (
                    <span className="text-[10px] text-text-3 flex items-center gap-1">
                      <Clock size={10} />{item.durationMinutes}m
                    </span>
                  )}
                  <button
                    onClick={() => toggleScheduleComplete(item.id)}
                    className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-colors ${
                      item.completed
                        ? 'bg-success/20 border-success/30 text-success'
                        : 'border-border hover:border-accent'
                    }`}
                    aria-label={item.completed ? 'Mark incomplete' : 'Mark complete'}
                  >
                    {item.completed && <Check size={14} />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Planner section */}
        {todayPlanner.length > 0 && (
          <div>
            <h3 className="text-[10px] uppercase font-bold tracking-widest text-text-3 mb-3">Planner</h3>
            <div className="space-y-1.5">
              {todayPlanner.map((entry) => {
                const isOther = entry.subject === 'other';
                const name = isOther ? 'Other' : config[entry.subject as SubjectKey]?.name || 'Study';
                const color = isOther ? '#64748b' : config[entry.subject as SubjectKey]?.color || '#64748b';
                
                return (
                  <div key={entry.id} className="flex items-center gap-3 p-2.5 rounded-xl bg-surface-2 border border-border">
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color }} />
                    <span className="text-sm font-medium text-text-1 w-28 shrink-0">{name}</span>
                    <span className={`flex-1 text-xs truncate ${entry.note ? 'text-text-2' : 'text-text-3'}`}>
                      {entry.note || '—'}
                    </span>
                    <button
                      onClick={() => entry.note && togglePlannerTick(entry.id)}
                      disabled={!entry.note}
                      className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-colors ${
                        entry.ticked
                          ? 'bg-success/20 border-success/30 text-success'
                          : entry.note
                            ? 'border-border hover:border-accent cursor-pointer'
                            : 'border-border/50 opacity-30 cursor-not-allowed'
                      }`}
                      aria-label={entry.ticked ? 'Unmark' : 'Mark done'}
                    >
                      {entry.ticked && <Check size={14} />}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {todaySchedule.length === 0 && todayPlanner.length === 0 && (
          <div className="text-center py-8 text-text-3 text-sm">
            Nothing planned for today. Hit the Planner or Schedule tab to set things up.
          </div>
        )}
      </div>
    </Modal>
  );
};
