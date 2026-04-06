import React, { useState, useEffect } from 'react';
import { useAppStore } from '@/store/appStore';
import { useStats } from '@/hooks/useStats';
import { Sparkles, Loader, WifiOff, AlertTriangle, RefreshCcw } from 'lucide-react';
import { debouncedFirestoreSync } from '@/services/firestoreService';
import { isFirebaseConfigured } from '@/config/firebase';
import { toast } from '@/utils/toast';

/**
 * Minimal universal top bar — always visible on all screens.
 * Shows: days remaining (alternating Lectures/Exam deadline) + student name (center) + Today FAB (right)
 */
export const TopBar: React.FC = () => {
  const syncStatus = useAppStore((s) => s.syncStatus);
  const setShowTodayModal = useAppStore((s) => s.setShowTodayModal);
  const userName = useAppStore((s) => s.userProfile?.name);
  const user = useAppStore((s) => s.user);
  const stats = useStats();

  // Alternating countdown: 0 = lectures deadline, 1 = exam deadline
  const [showExam, setShowExam] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowExam((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const showName = userName && userName !== 'Student' && userName.trim() !== '';

  const handleManualSync = () => {
    if (!isFirebaseConfigured || !user) {
      toast.info('Sync unavailable — not logged in.');
      return;
    }
    toast.info('Syncing...');
    debouncedFirestoreSync(500);
  };

  const syncIcon = {
    idle: null,
    syncing: <Loader size={12} className="animate-spinner text-accent" />,
    error: <AlertTriangle size={12} className="text-danger" />,
    offline: <WifiOff size={12} className="text-warning" />,
  }[syncStatus];

  const daysValue = showExam ? stats.daysToExam : stats.daysToLectures;
  const deadlineLabel = showExam ? 'Exam Deadline' : 'Lectures Deadline';

  return (
    <div
      className="flex items-center justify-between px-4 py-2.5 shrink-0 relative"
      style={{ zIndex: 10 }}
    >
      {/* Left: Days remaining — alternating between lectures and exam deadline */}
      <div className="flex items-center gap-2 min-w-0">
        <div className="flex flex-col items-start" style={{ minWidth: 60 }}>
          <div className="flex items-center gap-1.5 transition-all duration-300">
            <span className="font-mono text-lg font-bold text-text-1" key={showExam ? 'exam' : 'lec'}>
              {daysValue}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-text-3">
              days left
            </span>
          </div>
          <span className="text-[8px] font-medium text-text-3/70 uppercase tracking-wider leading-none mt-0.5 transition-all duration-300">
            {deadlineLabel}
          </span>
        </div>
        {/* Sync status icon + manual sync button */}
        <div className="flex items-center gap-1 ml-1">
          {syncIcon && <span>{syncIcon}</span>}
          {isFirebaseConfigured && (
            <button
              onClick={handleManualSync}
              className="p-1 rounded-md hover:bg-surface-2 text-text-3 hover:text-accent transition-colors active:scale-90"
              aria-label="Manual sync"
              title="Sync now"
            >
              <RefreshCcw size={11} />
            </button>
          )}
        </div>
      </div>

      {/* Center: Student name (if set) */}
      {showName && (
        <span className="absolute left-1/2 -translate-x-1/2 text-xs font-semibold text-text-2 truncate max-w-[140px] pointer-events-none">
          {userName}
        </span>
      )}

      {/* Right: Today button */}
      <button
        onClick={() => setShowTodayModal(true)}
        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold hover:bg-accent/15 transition-colors active:scale-95"
        aria-label="Open today's overview"
      >
        <Sparkles size={14} />
        Today
      </button>
    </div>
  );
};
