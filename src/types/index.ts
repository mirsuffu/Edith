/* ===== Subject Keys ===== */
export type SubjectKey = 'accounts' | 'law' | 'taxation_it' | 'taxation_gst' | 'costing' | 'audit' | 'fm' | 'sm';

/* ===== Groups ===== */
export type GroupId = 'g1' | 'g2';

/* ===== Tabs ===== */
export type MasterTabName = 'tracker' | 'planner' | 'performance' | 'edith' | 'settings';
export type TabName =
  | 'lectures' | 'revisions' | 'planner' | 'syllabus' | 'tests'
  | 'metrics' | 'schedule' | 'reminders' | 'edith' | 'logs' | 'settings' | MasterTabName;

/* ===== Theme ===== */
export type ThemeMode = 'dark' | 'light' | 'system' | 'auto';

/* ===== Sync Status ===== */
export type SyncStatus = 'idle' | 'syncing' | 'error' | 'offline';

/* ===== Subject Config ===== */
export interface SubjectConfig {
  name: string;
  group: GroupId;
  lectures: number;
  revisions: number;
  color: string;
  parent?: string;
}

/* ===== Progress ===== */
export interface ProgressNumbers {
  accounts: number;
  law: number;
  taxation_it: number;
  taxation_gst: number;
  costing: number;
  audit: number;
  fm: number;
  sm: number;
}

export interface HistoryEntry {
  date: string;
  data: {
    lectures: ProgressNumbers;
    revisions: ProgressNumbers;
  };
}

export interface ActivityLog {
  id: string;
  action: string;
  timestamp: string;
}

/* ===== Syllabus ===== */
export interface SyllabusChapter {
  id: string;
  subject: SubjectKey;
  name: string;
  status: 'Not Started' | 'In-Progress' | 'Completed';
  priority: 'High' | 'Medium' | 'Low';
}

/* ===== Planner ===== */
export interface PlannerEntry {
  id: string;
  date: string;
  subject: SubjectKey;
  note: string;
  ticked: boolean;
  notifyEnabled: boolean;
  notifyTime?: string;
}

/* ===== Schedule ===== */
export interface ScheduleItem {
  id: string;
  date: string; // 'YYYY-MM-DD' or '__fixed__' for fixed schedule
  subject: SubjectKey | null;
  customTitle: string;
  startTime: string;
  durationMinutes: number;
  notifyEnabled: boolean;
  completed: boolean;
}

/* ===== Tests ===== */
export interface ScheduledTest {
  id: string;
  subject: SubjectKey;
  date: string;
  time: string;
  durationMinutes?: number;
  note?: string;
  notifyEnabled: boolean;
  completed: boolean;
  loggedTestId?: string;
}

export interface LoggedTest {
  id: string;
  subject: SubjectKey;
  topics: string;
  date: string;
  time: string;
  durationMinutes?: number;
  note?: string;
  marksObtained: number;
  maxMarks: number;
  scheduledTestId?: string;
}

/* ===== Reminders ===== */
export interface Reminder {
  id: string;
  title: string;
  body: string;
  scheduledAt: string;
  repeat: 'none' | 'daily' | 'weekly';
  notifyEnabled: boolean;
  fired: boolean;
  completed?: boolean;
}

/* ===== Edith AI Chat ===== */
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ChatSession {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  messages: ChatMessage[];
}

/* ===== Toast ===== */
export type ToastType = 'info' | 'success' | 'error';

export interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
  createdAt: number;
}

/* ===== Edith Agent Powers ===== */
export interface PendingToolCall {
  id: string;
  name: string;
  args: any;
  description: string;
  resolve: (value: any) => void;
  reject: (reason?: any) => void;
}



/* ===== Full App State (persisted) ===== */
export interface ProgressState {
  lectures: ProgressNumbers;
  revisions: ProgressNumbers;
  tests: LoggedTest[];
  scheduledTests: ScheduledTest[];
  history: HistoryEntry[];
  activityLogs: ActivityLog[];
  syllabus: SyllabusChapter[];
  planner: PlannerEntry[];
  schedule: ScheduleItem[];
  reminders: Reminder[];
}

export interface AppData {
  progress: ProgressState;
  config: Record<SubjectKey, SubjectConfig>;
  deadlines: { lectures: string; exam: string };
  studyStartDate: string;
  themeMode: ThemeMode;
  lastExported: string | null;
  edithMemory: string;
  edithChatSessions: ChatSession[];
  activeEdithSessionId: string | null;
  isThinkingEnabled: boolean;
  isWebSearchEnabled: boolean;
  notificationsEnabled: boolean;
  fullScreenEnabled?: boolean;
  pacingAlertThreshold: number;
  lastWelcomeShownDate: string | null;
  updatedAt: string;
  userName?: string | null;
  githubToken?: string | null;
}
