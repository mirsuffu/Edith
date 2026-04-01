import React from 'react';
import { useAppStore } from '@/store/appStore';
import { useStats } from '@/hooks/useStats';
import { Sparkles, Loader, WifiOff, AlertTriangle, RefreshCw } from 'lucide-react';
import { debouncedFirestoreSync } from '@/services/firestoreService';
import { toast } from '@/utils/toast';

/**
 * Minimal universal top bar — always visible on all screens.
 * Shows: days remaining (left) + student name (center) + Today FAB (right)
 */
export const TopBar: React.FC = () => {
  const syncStatus = useAppStore((s) => s.syncStatus);
  const setShowTodayModal = useAppStore((s) => s.setShowTodayModal);
  const userName = useAppStore((s) => s.userProfile?.name);
  const stats = useStats();

  const showName = userName && userName !== 'Student' && userName.trim() !== '';

  const syncIcon = {
    idle: null,
    syncing: <Loader size={12} className="animate-spinner text-accent" />,
    error: <AlertTriangle size={12} className="text-danger" />,
    offline: <WifiOff size={12} className="text-warning" />,
  }[syncStatus];

  const handleManualSync = () => {
    if (syncStatus === 'syncing') return;
    debouncedFirestoreSync(0);
    toast.info('Manual sync triggered...');
  };

  return (
    <div
      className="flex items-center justify-between px-4 py-2.5 shrink-0 relative"
      style={{ zIndex: 10 }}
    >
      {/* Left: Days remaining */}
      <div className="flex items-center gap-2 min-w-0">
        <span className="font-mono text-lg font-bold text-text-1">{stats.daysToExam}</span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-text-3">
          days left
        </span>
        <div className="flex items-center gap-1 ml-1">
          {syncIcon && <span>{syncIcon}</span>}
          <button
            onClick={handleManualSync}
            className="p-1 rounded-md hover:bg-surface-2 text-text-3 hover:text-accent transition-colors"
            title="Sync manual data"
          >
            <RefreshCw size={10} className={syncStatus === 'syncing' ? 'animate-spin' : ''} />
          </button>
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
