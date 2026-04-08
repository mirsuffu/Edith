import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { useAppStore } from '@/store/appStore';
import { toLocalDateStr, formatFullDate } from '@/utils/dates';
import type { SubjectKey } from '@/types';
import { Check, Clock } from 'lucide-react';

export const TodayModal: React.FC = () => {
  const show = useAppStore((s) => s.showTodayModal);
  const setShow = useAppStore((s) => s.setShowTodayModal);
  const schedule = useAppStore((s) => s.data.progress.schedule);
  const config = useAppStore((s) => s.data.config);
  const toggleScheduleComplete = useAppStore((s) => s.toggleScheduleComplete);

  const today = toLocalDateStr();
  const viewDayIndex = new Date(today + 'T12:00:00').getDay();

  const oneDayItems = schedule
    .filter((s) => s.date === today)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  const fixedItems = schedule
    .filter((s) => s.date === '__fixed__' && (!s.daysOfWeek || s.daysOfWeek.includes(viewDayIndex)))
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  const hasAnything = oneDayItems.length > 0 || fixedItems.length > 0;

  const ItemRow = ({ item, isOneDay }: { item: any, isOneDay: boolean }) => {
    const isDone = isOneDay ? item.completed : item.completedDates?.includes(today);
    return (
      <div className={`flex items-center gap-3 p-3 rounded-xl bg-surface-2 border transition-all ${
        isOneDay ? 'border-danger/20 bg-danger/5' : 'border-border'
      } ${isDone ? 'opacity-60' : ''}`}>
        <span className="font-mono text-xs text-text-2 w-12 shrink-0">{item.startTime}</span>
        <div className="flex-1 min-w-0">
           <div className="text-sm font-medium text-text-1 truncate">{item.customTitle}</div>
           {item.durationMinutes > 0 && (
             <span className="text-[10px] text-text-3 flex items-center gap-1">
               <Clock size={10} />{item.durationMinutes}m
             </span>
           )}
        </div>
        <button
          onClick={() => toggleScheduleComplete(item.id)}
          className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-colors ${
            isDone
              ? 'bg-success/20 border-success/30 text-success'
              : 'border-border hover:border-accent bg-surface'
          }`}
          aria-label={isDone ? 'Mark incomplete' : 'Mark complete'}
        >
          {isDone && <Check size={14} />}
        </button>
      </div>
    );
  };

  return (
    <Modal open={show} onClose={() => setShow(false)} title={`📅 Today — ${formatFullDate(today)}`} maxWidth="max-w-lg">
      <div className="p-5 overflow-y-auto no-scrollbar max-h-[70vh] space-y-6">

        {oneDayItems.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-[10px] uppercase font-bold tracking-widest text-danger/70 pl-1">One-Day Schedule</h3>
            <div className="space-y-2">
              {oneDayItems.map(item => <ItemRow key={item.id} item={item} isOneDay={true} />)}
            </div>
          </div>
        )}

        {fixedItems.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-[10px] uppercase font-bold tracking-widest text-text-3 pl-1">Fixed Schedules</h3>
            <div className="space-y-2">
              {fixedItems.map(item => <ItemRow key={item.id} item={item} isOneDay={false} />)}
            </div>
          </div>
        )}

        {!hasAnything && (
          <div className="text-center py-12 text-text-3 text-sm flex flex-col items-center gap-3">
             <div className="w-12 h-12 rounded-full bg-surface-2 flex items-center justify-center opacity-40">
               <Clock size={24} />
             </div>
             Nothing scheduled for today.
          </div>
        )}
      </div>
    </Modal>
  );
};
