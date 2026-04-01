import { useMemo } from 'react';
import { useAppStore } from '@/store/appStore';
import { calculateStats } from '@/utils/stats';

/**
 * Memoized stats hook — recalculates only when relevant primitives change.
 */
export const useStats = () => {
  const data = useAppStore((s) => s.data);
  const activeTab = useAppStore((s) => s.activeTab);
  const activeGroup = useAppStore((s) => s.activeGroup);

  return useMemo(
    () => calculateStats(data, activeTab, activeGroup),
    [
      data.progress.lectures,
      data.progress.revisions,
      data.config,
      data.deadlines,
      data.studyStartDate,
      data.pacingAlertThreshold,
      data.progress.history,
      data.lastExported,
      activeTab,
      activeGroup,
    ]
  );
};
