import type { AppData } from '@/types';

/**
 * Validates that imported JSON has the expected structure.
 * Does NOT validate every field — just the critical shape.
 */
export const validateImportStructure = (data: unknown): data is AppData => {
  if (!data || typeof data !== 'object') return false;

  const obj = data as Record<string, unknown>;

  // progress must exist and be an object
  if (!obj.progress || typeof obj.progress !== 'object') return false;

  const progress = obj.progress as Record<string, unknown>;

  // lectures and revisions must be objects
  if (!progress.lectures || typeof progress.lectures !== 'object') return false;
  if (!progress.revisions || typeof progress.revisions !== 'object') return false;

  // arrays must be arrays (allow missing — they'll default)
  if (progress.history && !Array.isArray(progress.history)) return false;
  if (progress.activityLogs && !Array.isArray(progress.activityLogs)) return false;
  if (progress.syllabus && !Array.isArray(progress.syllabus)) return false;
  if (progress.tests && !Array.isArray(progress.tests)) return false;

  return true;
};
