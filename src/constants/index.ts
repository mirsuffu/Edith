import type { SubjectConfig, SubjectKey, ProgressNumbers, AppData } from '@/types';

export const SUBJECT_KEYS: SubjectKey[] = [
  'accounts', 'law', 'taxation_it', 'taxation_gst',
  'costing', 'audit', 'fm', 'sm',
];

export const DEFAULT_CONFIG: Record<SubjectKey, SubjectConfig> = {
  accounts:     { name: 'Adv. Accounts',   group: 'g1', lectures: 69, revisions: 12, color: '#6366f1' },
  law:          { name: 'Corp Law',         group: 'g1', lectures: 60, revisions: 14, color: '#a855f7' },
  taxation_it:  { name: 'Income Tax',       group: 'g1', lectures: 63, revisions: 15, color: '#10b981', parent: 'Taxation' },
  taxation_gst: { name: 'GST',             group: 'g1', lectures: 20, revisions: 6,  color: '#f59e0b', parent: 'Taxation' },
  costing:      { name: 'Costing',          group: 'g2', lectures: 70, revisions: 15, color: '#ec4899' },
  audit:        { name: 'Audit & Ethics',   group: 'g2', lectures: 50, revisions: 10, color: '#eab308' },
  fm:           { name: 'Financial Mgmt',   group: 'g2', lectures: 55, revisions: 12, color: '#0ea5e9', parent: 'FM-SM' },
  sm:           { name: 'Strategic Mgmt',   group: 'g2', lectures: 40, revisions: 10, color: '#f43f5e', parent: 'FM-SM' },
};

export const GROUP_1_SUBJECTS: SubjectKey[] = ['accounts', 'law', 'taxation_it', 'taxation_gst'];
export const GROUP_2_SUBJECTS: SubjectKey[] = ['costing', 'audit', 'fm', 'sm'];

export const ZERO_PROGRESS: ProgressNumbers = {
  accounts: 0, law: 0, taxation_it: 0, taxation_gst: 0,
  costing: 0, audit: 0, fm: 0, sm: 0,
};

export const HISTORY_MAX_ENTRIES = 730;
export const ACTIVITY_LOG_MAX = 100;
export const FIRESTORE_DEBOUNCE_MS = 1500;
export const AI_MAX_RETRIES = 2;
export const AI_RETRY_DELAY_MS = 1000;
export const DEFAULT_PACE_ALERT_THRESHOLD = 4;
export const MAX_TOASTS = 3;
export const TOAST_DURATION_MS = 4000;

export const PRIORITY_MAP: Record<string, number> = { High: 3, Medium: 2, Low: 1 };
export const STATUS_MAP: Record<string, number> = { Completed: 3, 'In-Progress': 2, 'Not Started': 1 };

export const WHATSAPP_CONTACT_URL = 'https://wa.me/919422872892?text=Hey%20Suffu%2C%20reaching%20out%20regarding%20E.D.I.T.H%20%28CA%20Intermediate%20Tracker%29.%20Need%20some%20help...';
