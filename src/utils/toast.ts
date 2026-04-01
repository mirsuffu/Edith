import type { ToastItem, ToastType } from '@/types';
import { generateId } from './dates';

export const TOAST_MESSAGES = {
  progressSaved: "Noted. That lecture won't study itself 📚",
  importSuccess: "Data imported like a boss. Suffu approves ✅",
  importFail: "That file is more broken than my sleep schedule. Try again 💀",
  clearConfirm: "Slate wiped. Fresh start energy — don't waste it 🧹",
  testLogged: "Score recorded. No lies, no coping, just numbers 📊",
  chapterAdded: "Chapter added. Another one to conquer 💪",
  chapterDeleted: "Chapter gone. Hope you knew what you were doing 🫡",
  syncError: "Cloud's on a break. Saved locally, don't panic 🌧️",
  passwordReset: "Reset email sent. Check inbox, not Instagram 📬",
  signOut: "Signed out. Take a break, but not too long 🫠",
  reminderSet: "Reminder locked. No more 'I forgot' excuses 🔔",
  testScheduled: "Test scheduled. Your future self is already nervous 😬",
  memoryUpdated: "Memory saved. Edith remembers everything now 🧠",
  backupNeeded: "Been a while since your last backup. Export before karma hits 💾",
  onlineRestored: "Back online. Syncing your grind to the cloud ☁️",
  scheduleAdded: "Schedule item added. Tomorrow's looking productive 📋",
  plannerUpdated: "Planner updated. Discipline is the real syllabus 🗓️",
  loginSuccess: "Welcome back, soldier. The grind awaits 🔥",
  registerSuccess: "Account created. The Suffu era begins now 🚀",
  validationError: "Fix the red bits first. Suffu can wait ✋",
  emptyScore: "Score can't be blank. Put a number, even if it hurts 🔢",
  aiNotConfigured: "AI isn't set up yet. Check Settings → AI config 🤖",
  chatDeleted: "Chat wiped. Those messages are in a better place now 🪦",
  scheduledTestDeleted: "Test removed from the calendar. One less thing to stress about 📅",
  scheduleItemDeleted: "Schedule item gone. Your timeline approves 🕐",
  reminderDeleted: "Reminder deleted. Out of sight, out of mind 👻",
} as const;

/**
 * Toast event system — components subscribe, this pushes new toasts.
 * Uses a simple callback pattern (the Zustand store will hold the toast array).
 */
type ToastListener = (toast: ToastItem) => void;
let listener: ToastListener | null = null;

export const setToastListener = (fn: ToastListener) => {
  listener = fn;
};

const pushToast = (message: string, type: ToastType) => {
  const item: ToastItem = {
    id: generateId(),
    message,
    type,
    createdAt: Date.now(),
  };
  listener?.(item);
};

export const toast = {
  info: (msg: string) => pushToast(msg, 'info'),
  success: (msg: string) => pushToast(msg, 'success'),
  error: (msg: string) => pushToast(msg, 'error'),
};
