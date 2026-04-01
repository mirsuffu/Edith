import React, { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { Activity, BookOpen, ClipboardList, Calendar, Bell, Settings, ChevronDown } from 'lucide-react';

const INITIAL_COUNT = 20;
const LOAD_MORE_COUNT = 20;

/** Parse action string to get a category icon */
const getLogIcon = (action: string) => {
  const a = action.toLowerCase();
  if (a.includes('lecture') || a.includes('revision')) return <BookOpen size={12} className="text-accent shrink-0" />;
  if (a.includes('test') || a.includes('score')) return <ClipboardList size={12} className="text-warning shrink-0" />;
  if (a.includes('schedule') || a.includes('planner') || a.includes('chapter')) return <Calendar size={12} className="text-success shrink-0" />;
  if (a.includes('reminder')) return <Bell size={12} className="text-warning shrink-0" />;
  if (a.includes('config') || a.includes('memory') || a.includes('theme')) return <Settings size={12} className="text-text-3 shrink-0" />;
  return <Activity size={12} className="text-text-3 shrink-0" />;
};

/** Group logs by relative date */
const getDateLabel = (timestamp: string): string => {
  const logDate = new Date(timestamp);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (logDate.toDateString() === today.toDateString()) return 'Today';
  if (logDate.toDateString() === yesterday.toDateString()) return 'Yesterday';
  return logDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
};

export const LogsTab: React.FC = () => {
  const logs = useAppStore((s) => s.data.progress.activityLogs);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleLogs = logs.slice(0, visibleCount);
  const hasMore = visibleCount < logs.length;

  // Group by date label
  let lastLabel = '';

  return (
    <div className="h-full overflow-y-auto no-scrollbar pb-24 md:pb-4 tab-content-enter">
      <h2 className="font-display text-lg font-bold text-text-1 mb-4">Activity Logs</h2>

      {logs.length === 0 && (
        <div className="h-64 flex flex-col items-center justify-center text-text-3">
          <Activity size={32} className="mb-2 opacity-40" />
          <span className="text-xs uppercase font-bold tracking-widest">No Activity Logged</span>
          <span className="text-[10px] mt-1 text-text-3">Start tracking to see your hustle here 💪</span>
        </div>
      )}

      <div className="space-y-1.5">
        {visibleLogs.map((log) => {
          const label = getDateLabel(log.timestamp);
          const showLabel = label !== lastLabel;
          lastLabel = label;
          return (
            <React.Fragment key={log.id}>
              {showLabel && (
                <div className="text-[9px] font-bold uppercase tracking-widest text-text-3 pt-3 pb-1 border-b border-border/50 mb-1">
                  {label}
                </div>
              )}
              <div className="flex items-center gap-2.5 p-3 bg-surface border border-border rounded-xl card-shadow">
                {getLogIcon(log.action)}
                <span className="text-xs font-medium text-text-1 flex-1 selectable">{log.action}</span>
                <span className="text-[9px] font-mono text-text-3 shrink-0">
                  {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {hasMore && (
        <button
          onClick={() => setVisibleCount((c) => c + LOAD_MORE_COUNT)}
          className="w-full mt-4 py-2.5 rounded-xl border border-border bg-surface-2 text-xs font-semibold text-text-2 hover:bg-surface-3 hover:text-text-1 transition-colors flex items-center justify-center gap-2"
        >
          <ChevronDown size={14} />
          Show more ({logs.length - visibleCount} remaining)
        </button>
      )}
    </div>
  );
};
