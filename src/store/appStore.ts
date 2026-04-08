import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { User as FirebaseUser } from 'firebase/auth';
import type {
  AppData, SubjectKey, TabName, GroupId, SyncStatus, ThemeMode,
  ToastItem, ProgressNumbers, SyllabusChapter, PlannerEntry,
  ScheduleItem, Reminder, ScheduledTest, LoggedTest,
  ChatSession, ChatMessage, ActivityLog, HistoryEntry,
  PendingToolCall,
} from '@/types';
import {
  DEFAULT_CONFIG, ZERO_PROGRESS, HISTORY_MAX_ENTRIES,
  ACTIVITY_LOG_MAX, DEFAULT_PACE_ALERT_THRESHOLD, MAX_TOASTS,
  TOAST_DURATION_MS, SUBJECT_KEYS,
} from '@/constants';
import { toLocalDateStr, generateId } from '@/utils/dates';
import { setToastListener } from '@/utils/toast';

/* ===== Default persisted data ===== */
const defaultAppData: AppData = {
  progress: {
    lectures: { ...ZERO_PROGRESS },
    revisions: { ...ZERO_PROGRESS },
    tests: [],
    scheduledTests: [],
    history: [],
    activityLogs: [],
    syllabus: [],
    planner: [],
    schedule: [],
    reminders: [],
  },
  config: { ...DEFAULT_CONFIG },
  deadlines: { lectures: '2026-04-15', exam: '2026-09-30' },
  studyStartDate: toLocalDateStr(),
  themeMode: 'system',
  lastExported: null,
  edithMemory: '',
  edithChatSessions: [],
  activeEdithSessionId: null,
  isThinkingEnabled: false,
  isWebSearchEnabled: false,
  notificationsEnabled: false,
  fullScreenEnabled: false,
  pacingAlertThreshold: DEFAULT_PACE_ALERT_THRESHOLD,
  lastWelcomeShownDate: null,
  updatedAt: '1970-01-01T00:00:00.000Z',
  githubToken: null,
};

/* ===== Store interface ===== */
interface AppStore {
  // Auth
  user: FirebaseUser | null;
  userProfile: { name: string; email: string } | null;
  syncStatus: SyncStatus;
  authLoading: boolean;
  authScreen: 'login' | 'register';

  // App Data (persisted)
  data: AppData;

  // UI State (not persisted)
  activeTab: TabName;
  activeGroup: GroupId;
  showWelcomeModal: boolean;
  showTodayModal: boolean;
  showMobileMore: boolean;
  toasts: ToastItem[];
  pendingToolCall: PendingToolCall | null;

  // Auth actions
  setUser: (user: FirebaseUser | null) => void;
  setUserProfile: (profile: { name: string; email: string } | null) => void;
  setSyncStatus: (status: SyncStatus) => void;
  setAuthLoading: (loading: boolean) => void;
  setAuthScreen: (screen: 'login' | 'register') => void;

  // Navigation
  setActiveTab: (tab: TabName) => void;
  setActiveGroup: (group: GroupId) => void;
  setShowWelcomeModal: (show: boolean) => void;
  setShowTodayModal: (show: boolean) => void;
  setShowMobileMore: (show: boolean) => void;
  setPendingToolCall: (call: PendingToolCall | null) => void;

  // Data mutations
  setData: (data: AppData) => void;
  updateProgress: (category: 'lectures' | 'revisions', subject: SubjectKey, value: number) => void;
  setDeadlines: (deadlines: { lectures: string; exam: string }) => void;
  setThemeMode: (mode: ThemeMode) => void;
  setLastExported: (date: string | null) => void;
  setPacingAlertThreshold: (val: number) => void;
  setNotificationsEnabled: (val: boolean) => void;
  setFullScreenEnabled: (val: boolean) => void;

  // Config
  updateSubjectConfig: (subject: SubjectKey, field: 'lectures' | 'revisions', value: number) => void;
  setUserName: (name: string) => void;

  // Syllabus
  addSyllabusChapter: (subject: SubjectKey, name: string) => void;
  updateSyllabusChapter: (id: string, updates: Partial<SyllabusChapter>) => void;
  deleteSyllabusChapter: (id: string) => void;
  moveSyllabusChapter: (id: string, direction: -1 | 1) => void;

  // Planner
  // Planner
  updatePlannerEntry: (entry: PlannerEntry) => void;
  togglePlannerTick: (id: string) => void;
  deletePlannerEntry: (id: string) => void;

  // Schedule
  addScheduleItem: (item: ScheduleItem) => void;
  updateScheduleItem: (id: string, updates: Partial<ScheduleItem>) => void;
  deleteScheduleItem: (id: string) => void;
  toggleScheduleComplete: (id: string) => void;

  // Tests
  addScheduledTest: (test: ScheduledTest) => void;
  updateScheduledTest: (id: string, updates: Partial<ScheduledTest>) => void;
  deleteScheduledTest: (id: string) => void;
  logTest: (test: LoggedTest) => void;

  // Reminders
  addReminder: (reminder: Reminder) => void;
  updateReminder: (id: string, updates: Partial<Reminder>) => void;
  deleteReminder: (id: string) => void;
  toggleReminderComplete: (id: string) => void;

  // Edith AI
  setEdithMemory: (mem: string) => void;
  addChatSession: (session: ChatSession) => void;
  addChatMessage: (sessionId: string, message: ChatMessage) => void;
  setActiveEdithSessionId: (id: string | null) => void;
  setThinkingEnabled: (enabled: boolean) => void;
  setWebSearchEnabled: (enabled: boolean) => void;
  deleteChatSession: (id: string) => void;

  // Toasts
  addToast: (toast: ToastItem) => void;
  removeToast: (id: string) => void;

  // Data management
  clearAllData: (deleteFromCloud?: boolean) => void;
  importData: (imported: AppData) => void;
  setLastWelcomeShownDate: (date: string) => void;
  setGithubToken: (token: string | null) => void;

  // Hydration
  hydrateFromStorage: () => void;
}

/* ===== localStorage helpers ===== */
const STORAGE_KEY = 'edith_state';

const saveToLocalStorage = (data: AppData) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage full or unavailable — fail silently
  }
};

const loadFromLocalStorage = (): AppData | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.progress) {
      return migrateData(parsed);
    }
    return null;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
};

/** Migrate old data shapes to current AppData format */
const migrateData = (raw: Record<string, unknown>): AppData => {
  const base = { ...defaultAppData };
  const r = raw as Record<string, any>;

  // Merge config preserving structure
  const mergedConfig = { ...DEFAULT_CONFIG };
  if (r.config) {
    for (const k of SUBJECT_KEYS) {
      if (r.config[k]) {
        const parentKey = DEFAULT_CONFIG[k as SubjectKey].parent;
        mergedConfig[k as SubjectKey] = {
          ...DEFAULT_CONFIG[k as SubjectKey],
          ...r.config[k],
          group: DEFAULT_CONFIG[k as SubjectKey].group,
        };

        // Ensure no explicit 'undefined' values are passed to Firestore
        if (parentKey) {
          mergedConfig[k as SubjectKey].parent = parentKey;
        } else {
          delete mergedConfig[k as SubjectKey].parent;
        }
      }
    }
  }

  // Migrate deadlines: old format had g1/g2, new has exam
  let deadlines = base.deadlines;
  if (r.deadlines) {
    deadlines = {
      lectures: r.deadlines.lectures || base.deadlines.lectures,
      exam: r.deadlines.exam || r.deadlines.g1 || base.deadlines.exam,
    };
  }

  // Theme migration: old had darkMode boolean, new has themeMode
  let themeMode: ThemeMode = 'system';
  if (r.themeMode) {
    themeMode = r.themeMode;
  } else if (typeof r.darkMode === 'boolean') {
    themeMode = r.darkMode ? 'dark' : 'light';
  }

  const progress = r.progress || {};

  return {
    ...base,
    progress: {
      lectures: { ...ZERO_PROGRESS, ...(progress.lectures || {}) },
      revisions: { ...ZERO_PROGRESS, ...(progress.revisions || {}) },
      tests: Array.isArray(progress.tests) ? progress.tests : [],
      scheduledTests: Array.isArray(progress.scheduledTests) ? progress.scheduledTests : [],
      history: Array.isArray(progress.history) ? progress.history.slice(-HISTORY_MAX_ENTRIES) : [],
      activityLogs: Array.isArray(progress.activityLogs) ? progress.activityLogs.slice(0, ACTIVITY_LOG_MAX) : [],
      syllabus: Array.isArray(progress.syllabus) ? progress.syllabus : [],
      planner: Array.isArray(progress.planner) ? progress.planner.map((p: any) => ({ ...p, id: p.id || generateId() })) : [],
      schedule: Array.isArray(progress.schedule) ? progress.schedule : [],
      reminders: Array.isArray(progress.reminders) ? progress.reminders : [],
    },
    config: mergedConfig,
    deadlines,
    studyStartDate: r.studyStartDate || base.studyStartDate,
    themeMode,
    lastExported: r.lastExported || null,
    edithMemory: r.edithMemory || '',
    edithChatSessions: Array.isArray(r.edithChatSessions) ? r.edithChatSessions : [],
    activeEdithSessionId: r.activeEdithSessionId || null,
    notificationsEnabled: r.notificationsEnabled ?? false,
    fullScreenEnabled: r.fullScreenEnabled ?? false,
    pacingAlertThreshold: r.pacingAlertThreshold ?? DEFAULT_PACE_ALERT_THRESHOLD,
    lastWelcomeShownDate: r.lastWelcomeShownDate || null,
    updatedAt: r.updatedAt || '1970-01-01T00:00:00.000Z',
    userName: r.userName || null,
    githubToken: r.githubToken || null,
  };
};

/* ===== Helper to add activity log ===== */
const addLog = (data: AppData, action: string): void => {
  const log: ActivityLog = { id: generateId(), action, timestamp: new Date().toISOString() };
  data.progress.activityLogs = [log, ...data.progress.activityLogs].slice(0, ACTIVITY_LOG_MAX);
  data.updatedAt = new Date().toISOString();
};

/* ===== Create the store ===== */
export const useAppStore = create<AppStore>()(
  immer((set, get) => {
    // Load initial data from localStorage
    const stored = loadFromLocalStorage();

    return {
      // Auth
      user: null,
      userProfile: null,
      syncStatus: 'idle' as SyncStatus,
      authLoading: true,
      authScreen: 'login' as const,

      // App data
      data: stored || { ...defaultAppData },

      // UI
      activeTab: 'planner' as TabName,
      activeGroup: 'g1' as GroupId,
      showWelcomeModal: false,
      showTodayModal: false,
      showMobileMore: false,
      toasts: [],
      pendingToolCall: null,

      // === Auth actions ===
      setUser: (user) => set((s) => { s.user = user; }),
      setUserProfile: (profile) => set((s) => { s.userProfile = profile; }),
      setSyncStatus: (status) => set((s) => { s.syncStatus = status; }),
      setAuthLoading: (loading) => set((s) => { s.authLoading = loading; }),
      setAuthScreen: (screen) => set((s) => { s.authScreen = screen; }),

      // === Navigation ===
      setActiveTab: (tab) => set((s) => { s.activeTab = tab; s.showMobileMore = false; }),
      setActiveGroup: (group) => set((s) => { s.activeGroup = group; }),
      setShowWelcomeModal: (show) => set((s) => { s.showWelcomeModal = show; }),
      setShowTodayModal: (show) => set((s) => { s.showTodayModal = show; }),
      setShowMobileMore: (show) => set((s) => { s.showMobileMore = show; }),
      setPendingToolCall: (call) => set((s) => { s.pendingToolCall = call; }),

      // === Data mutations ===
      setData: (data) => set((s) => {
        s.data = data;
        saveToLocalStorage(data);
      }),

      updateProgress: (category, subject, value) => set((s) => {
        const max = s.data.config[subject]?.[category] || 0;
        const clamped = Math.max(0, Math.min(max, value));
        s.data.progress[category][subject] = clamped;

        // Update history
        const today = toLocalDateStr();
        const snap = { lectures: { ...s.data.progress.lectures }, revisions: { ...s.data.progress.revisions } };
        const idx = s.data.progress.history.findIndex((h) => h.date === today);
        if (idx >= 0) {
          s.data.progress.history[idx] = { date: today, data: snap };
        } else {
          s.data.progress.history.push({ date: today, data: snap });
        }
        s.data.progress.history = s.data.progress.history.slice(-HISTORY_MAX_ENTRIES);

        addLog(s.data, `Updated ${category} for ${s.data.config[subject]?.name} to ${clamped}`);
        saveToLocalStorage(s.data);
      }),

      setDeadlines: (deadlines) => set((s) => {
        s.data.deadlines = deadlines;
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      setThemeMode: (mode) => set((s) => {
        s.data.themeMode = mode;
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      setLastExported: (date) => set((s) => {
        s.data.lastExported = date;
        saveToLocalStorage(s.data);
      }),

      setPacingAlertThreshold: (val) => set((s) => {
        s.data.pacingAlertThreshold = val;
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      setNotificationsEnabled: (val) => set((s) => {
        s.data.notificationsEnabled = val;
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      setFullScreenEnabled: (val) => set((s) => {
        s.data.fullScreenEnabled = val;
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      // === Config ===
      updateSubjectConfig: (subject, field, value) => set((s) => {
        s.data.config[subject][field] = value;
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      setUserName: (name) => set((s) => {
        if (s.userProfile) s.userProfile.name = name;
        s.data.userName = name;
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      // === Syllabus ===
      addSyllabusChapter: (subject, name) => set((s) => {
        const chapter: SyllabusChapter = {
          id: generateId(), subject, name,
          status: 'Not Started', priority: 'Medium',
        };
        s.data.progress.syllabus.push(chapter);
        addLog(s.data, `Added Chapter: ${name} (${s.data.config[subject]?.name})`);
        saveToLocalStorage(s.data);
      }),

      updateSyllabusChapter: (id, updates) => set((s) => {
        const ch = s.data.progress.syllabus.find((c) => c.id === id);
        if (ch) Object.assign(ch, updates);
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      deleteSyllabusChapter: (id) => set((s) => {
        s.data.progress.syllabus = s.data.progress.syllabus.filter((c) => c.id !== id);
        addLog(s.data, 'Deleted a Chapter from Syllabus');
        saveToLocalStorage(s.data);
      }),

      moveSyllabusChapter: (id, direction) => set((s) => {
        const arr = s.data.progress.syllabus;
        const idx = arr.findIndex((c) => c.id === id);
        if (idx === -1) return;
        const chapter = arr[idx];
        let swapIdx = -1;
        if (direction === -1) {
          for (let i = idx - 1; i >= 0; i--) {
            if (arr[i].subject === chapter.subject) { swapIdx = i; break; }
          }
        } else {
          for (let i = idx + 1; i < arr.length; i++) {
            if (arr[i].subject === chapter.subject) { swapIdx = i; break; }
          }
        }
        if (swapIdx !== -1) {
          [arr[idx], arr[swapIdx]] = [arr[swapIdx], arr[idx]];
        }
        saveToLocalStorage(s.data);
      }),

      // === Planner ===
      updatePlannerEntry: (entry) => set((s) => {
        const idx = s.data.progress.planner.findIndex((p) => p.id === entry.id);
        if (idx >= 0) {
          s.data.progress.planner[idx] = { ...entry };
        } else {
          s.data.progress.planner.push({ ...entry, id: entry.id || generateId() });
        }
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      togglePlannerTick: (id) => set((s) => {
        const entry = s.data.progress.planner.find((p) => p.id === id);
        if (entry) {
          entry.ticked = !entry.ticked;
          s.data.updatedAt = new Date().toISOString();
          saveToLocalStorage(s.data);
        }
      }),

      deletePlannerEntry: (id) => set((s) => {
        s.data.progress.planner = s.data.progress.planner.filter((p) => p.id !== id);
        addLog(s.data, 'Deleted a planner entry');
        saveToLocalStorage(s.data);
      }),

      // === Schedule ===
      addScheduleItem: (item) => set((s) => {
        s.data.progress.schedule.push(item);
        addLog(s.data, `Added schedule: ${item.customTitle}`);
        saveToLocalStorage(s.data);
      }),

      updateScheduleItem: (id, updates) => set((s) => {
        const item = s.data.progress.schedule.find((i) => i.id === id);
        if (item) Object.assign(item, updates);
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      deleteScheduleItem: (id) => set((s) => {
        s.data.progress.schedule = s.data.progress.schedule.filter((i) => i.id !== id);
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      toggleScheduleComplete: (id) => set((s) => {
        const item = s.data.progress.schedule.find((i) => i.id === id);
        if (item) {
          if (item.date === '__fixed__') {
            const today = toLocalDateStr();
            if (!item.completedDates) item.completedDates = [];
            const idx = item.completedDates.indexOf(today);
            if (idx >= 0) {
              item.completedDates.splice(idx, 1);
            } else {
              item.completedDates.push(today);
            }
          } else {
            item.completed = !item.completed;
          }
        }
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      // === Tests ===
      addScheduledTest: (test) => set((s) => {
        s.data.progress.scheduledTests.push(test);
        addLog(s.data, `Scheduled test: ${s.data.config[test.subject]?.name}`);
        saveToLocalStorage(s.data);
      }),

      updateScheduledTest: (id, updates) => set((s) => {
        const t = s.data.progress.scheduledTests.find((t) => t.id === id);
        if (t) Object.assign(t, updates);
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      deleteScheduledTest: (id) => set((s) => {
        s.data.progress.scheduledTests = s.data.progress.scheduledTests.filter((t) => t.id !== id);
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      logTest: (test) => set((s) => {
        s.data.progress.tests.unshift(test);
        addLog(s.data, `Logged test: ${s.data.config[test.subject]?.name} (${test.marksObtained}/${test.maxMarks})`);
        saveToLocalStorage(s.data);
      }),

      // === Reminders ===
      addReminder: (reminder) => set((s) => {
        s.data.progress.reminders.push(reminder);
        addLog(s.data, `Added reminder: ${reminder.title}`);
        saveToLocalStorage(s.data);
      }),

      updateReminder: (id, updates) => set((s) => {
        const r = s.data.progress.reminders.find((r) => r.id === id);
        if (r) Object.assign(r, updates);
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      deleteReminder: (id) => set((s) => {
        s.data.progress.reminders = s.data.progress.reminders.filter((r) => r.id !== id);
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      toggleReminderComplete: (id) => set((s) => {
        const r = s.data.progress.reminders.find((r) => r.id === id);
        if (r) r.completed = !r.completed;
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      // === Edith AI ===
      setEdithMemory: (mem) => set((s) => {
        s.data.edithMemory = mem;
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      addChatSession: (session) => set((s) => {
        s.data.edithChatSessions.unshift(session);
        s.data.activeEdithSessionId = session.id;
        saveToLocalStorage(s.data);
      }),

      addChatMessage: (sessionId, message) => set((s) => {
        const session = s.data.edithChatSessions.find((cs) => cs.id === sessionId);
        if (session) {
          session.messages.push(message);
          session.updatedAt = new Date().toISOString();
          if (session.messages.length === 1 && message.role === 'user') {
            session.title = message.content.slice(0, 40);
          }
        }
        saveToLocalStorage(s.data);
      }),

      setActiveEdithSessionId: (id) => set((s) => {
        s.data.activeEdithSessionId = id;
      }),

      setThinkingEnabled: (enabled) => set((s) => {
        s.data.isThinkingEnabled = enabled;
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      setWebSearchEnabled: (enabled) => set((s) => {
        s.data.isWebSearchEnabled = enabled;
        s.data.updatedAt = new Date().toISOString();
        saveToLocalStorage(s.data);
      }),

      deleteChatSession: (id) => set((s) => {
        s.data.edithChatSessions = s.data.edithChatSessions.filter((cs) => cs.id !== id);
        if (s.data.activeEdithSessionId === id) {
          s.data.activeEdithSessionId = s.data.edithChatSessions[0]?.id || null;
        }
        saveToLocalStorage(s.data);
      }),

      // === Toasts ===
      addToast: (t) => set((s) => {
        s.toasts = [...s.toasts, t].slice(-MAX_TOASTS);
      }),
      removeToast: (id) => set((s) => {
        s.toasts = s.toasts.filter((t) => t.id !== id);
      }),

      // === Data management ===
      clearAllData: (deleteFromCloud = false) => set((s) => {
        s.data = {
          ...defaultAppData,
          deadlines: s.data.deadlines,
          themeMode: s.data.themeMode,
          lastExported: null,
          studyStartDate: toLocalDateStr(),
          // If NOT deleting from cloud, keep epoch timestamp so cloud data won't be overwritten
          updatedAt: deleteFromCloud ? new Date().toISOString() : '1970-01-01T00:00:00.000Z',
        };
        saveToLocalStorage(s.data);
      }),

      importData: (imported) => set((s) => {
        const migrated = migrateData(imported as unknown as Record<string, unknown>);
        migrated.updatedAt = new Date().toISOString(); 
        s.data = migrated;
        saveToLocalStorage(s.data);
      }),

      setLastWelcomeShownDate: (date) => set((s) => {
        s.data.lastWelcomeShownDate = date;
        saveToLocalStorage(s.data);
      }),

      setGithubToken: (token) => set((s) => {
        s.data.githubToken = token;
        saveToLocalStorage(s.data);
      }),

      // === Hydration ===
      hydrateFromStorage: () => {
        const stored = loadFromLocalStorage();
        if (stored) {
          set((s) => { s.data = stored; });
        }
      },
    };
  })
);

// Wire up toast listener
setToastListener((t) => useAppStore.getState().addToast(t));
