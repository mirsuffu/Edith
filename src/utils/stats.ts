import type { AppData, SubjectKey } from '@/types';
import { SUBJECT_KEYS, DEFAULT_PACE_ALERT_THRESHOLD } from '@/constants';
import { toLocalDateStr, daysBetween } from './dates';

export interface StatsResult {
  overallProgress: number;
  daysToLectures: number;
  daysToExam: number;
  requiredPerDay: string;
  projectedCompletion: number;
  isOnTrack: boolean;
  warning: string | null;
  streak: number;
  isBackupNeeded: boolean;
  totalTasks: number;
  completedTasks: number;
}

/**
 * Pure function — calculates all stats from app data.
 * No side effects, no hooks, easy to memoize.
 */
export const calculateStats = (
  data: AppData,
  activeTab: string,
  activeGroup: string
): StatsResult => {
  const isLectures = activeTab === 'lectures';
  const contextGroup = isLectures ? 'all' : activeGroup;

  const now = new Date();
  const todayStr = toLocalDateStr(now);

  // Deadline determination
  const lectureDeadline = data.deadlines.lectures;
  const examDeadline = data.deadlines.exam;
  const relevantDeadline = isLectures ? lectureDeadline : examDeadline;

  const daysToLectures = Math.max(0, daysBetween(todayStr, lectureDeadline));
  const daysToExam = Math.max(0, daysBetween(todayStr, examDeadline));
  const daysRemaining = isLectures ? daysToLectures : daysToExam;
  const isDeadlinePassed = daysBetween(todayStr, relevantDeadline) < 0;

  // Filter subjects by group
  const relevantSubjects = SUBJECT_KEYS.filter(
    (k) => contextGroup === 'all' || data.config[k].group === contextGroup
  );

  let totalTasks = 0;
  let completedTasks = 0;

  relevantSubjects.forEach((key) => {
    const sub = data.config[key];
    const doneLec = data.progress.lectures[key] || 0;
    const doneRev = data.progress.revisions[key] || 0;

    if (isLectures) {
      totalTasks += sub.lectures;
      completedTasks += doneLec;
    } else {
      totalTasks += sub.lectures + sub.revisions;
      completedTasks += doneLec + doneRev;
    }
  });

  const overallProgress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  const tasksLeft = totalTasks - completedTasks;
  const requiredPerDay = daysRemaining > 0 ? (tasksLeft / daysRemaining).toFixed(1) : '0';

  // Projected completion using actual daily pace
  const startDate = data.studyStartDate || '2025-11-01';
  const daysElapsed = Math.max(1, daysBetween(startDate, todayStr));
  const actualDailyPace = completedTasks / daysElapsed;
  const projectedCompletion = actualDailyPace > 0
    ? Math.min(100, ((completedTasks + actualDailyPace * daysRemaining) / totalTasks) * 100)
    : 0;

  // Warning logic
  const threshold = data.pacingAlertThreshold ?? DEFAULT_PACE_ALERT_THRESHOLD;
  let warning: string | null = null;

  if (isDeadlinePassed && completedTasks < totalTasks) {
    warning = isLectures
      ? 'CRITICAL: SYLLABUS DEADLINE EXCEEDED.'
      : `CRITICAL: EXAM DEADLINE EXCEEDED.`;
  } else if (parseFloat(requiredPerDay) > threshold && completedTasks < totalTasks) {
    warning = `PACE ALERT: ${requiredPerDay} UNITS/DAY REQUIRED`;
  }

  // Suppress warning if 100% done
  if (completedTasks >= totalTasks && totalTasks > 0) {
    warning = null;
  }

  // Streak — timezone-safe
  let streak = 0;
  if (data.progress.history && data.progress.history.length > 0) {
    const sortedHist = [...data.progress.history].sort(
      (a, b) => b.date.localeCompare(a.date)
    );

    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterdayStr = toLocalDateStr(yesterdayDate);

    if (sortedHist[0].date === todayStr || sortedHist[0].date === yesterdayStr) {
      streak = 1;
      for (let i = 0; i < sortedHist.length - 1; i++) {
        const gap = daysBetween(sortedHist[i + 1].date, sortedHist[i].date);
        if (gap === 1) streak++;
        else break;
      }
    }
  }

  // Backup needed check
  const isBackupNeeded = !data.lastExported ||
    (now.getTime() - new Date(data.lastExported).getTime() > 7 * 86400000);

  return {
    overallProgress,
    daysToLectures,
    daysToExam,
    requiredPerDay,
    projectedCompletion,
    isOnTrack: projectedCompletion >= 95,
    warning,
    streak,
    isBackupNeeded,
    totalTasks,
    completedTasks,
  };
};
