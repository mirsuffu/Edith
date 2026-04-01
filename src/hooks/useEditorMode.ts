import { useState, useCallback, useEffect } from 'react';

const EDITOR_MODE_KEY = 'edith_editor_mode';

const loadEditorMode = (): boolean => {
  try {
    return localStorage.getItem(EDITOR_MODE_KEY) === 'true';
  } catch {
    return false;
  }
};

const saveEditorMode = (val: boolean) => {
  try {
    localStorage.setItem(EDITOR_MODE_KEY, String(val));
  } catch {
    // fail silently
  }
};

/**
 * Editor Mode safeguard hook.
 * When disabled, editing of sensitive areas (Syllabus, Planner, Fixed Schedule,
 * Exam Deadlines, Subject Workloads, Pacing, Edith AI Memory) is blocked.
 * 
 * Persisted to localStorage only (not synced — local safety measure).
 */
export const useEditorMode = () => {
  const [isEditorMode, setIsEditorMode] = useState(loadEditorMode);

  const enableEditorMode = useCallback(() => {
    setIsEditorMode(true);
    saveEditorMode(true);
  }, []);

  const disableEditorMode = useCallback(() => {
    setIsEditorMode(false);
    saveEditorMode(false);
  }, []);

  return { isEditorMode, enableEditorMode, disableEditorMode };
};

/**
 * Standalone read-only check — for components that just need to know
 * if editor mode is on without the full hook overhead.
 */
export const isEditorModeEnabled = (): boolean => loadEditorMode();
