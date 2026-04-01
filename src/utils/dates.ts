/**
 * Timezone-safe date utilities.
 * Every function uses local timezone — never UTC-based string splitting.
 */

/** Returns 'YYYY-MM-DD' in local timezone */
export const toLocalDateStr = (date: Date = new Date()): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

/** Returns 'HH:MM' in local timezone */
export const toLocalTimeStr = (date: Date = new Date()): string => {
  const h = String(date.getHours()).padStart(2, '0');
  const m = String(date.getMinutes()).padStart(2, '0');
  return `${h}:${m}`;
};

/** Day name from a date string: "Monday", "Tuesday", etc. */
export const getDayName = (dateStr: string): string => {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'long' });
};

/** e.g. "Mon, 30-03-26" */
export const formatDisplayDate = (dateStr: string): string => {
  const d = new Date(dateStr + 'T12:00:00');
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = String(d.getFullYear()).slice(2);
  const weekday = d.toLocaleDateString('en-US', { weekday: 'short' });
  return `${weekday}, ${day}-${month}-${year}`;
};

/** Full display: "Monday, 30-03-26" */
export const formatFullDate = (dateStr: string): string => {
  const d = new Date(dateStr + 'T12:00:00');
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = String(d.getFullYear()).slice(2);
  const weekday = d.toLocaleDateString('en-US', { weekday: 'long' });
  return `${weekday}, ${day}-${month}-${year}`;
};

/** Just DD-MM-YY (no weekday) */
export const formatDateDDMMYY = (dateStr: string): string => {
  const d = new Date(dateStr + 'T12:00:00');
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = String(d.getFullYear()).slice(2);
  return `${day}-${month}-${year}`;
};

/**
 * DST-safe day difference. Normalizes both dates to noon before subtraction.
 */
export const daysBetween = (dateStr1: string, dateStr2: string): number => {
  const d1 = new Date(dateStr1 + 'T12:00:00');
  const d2 = new Date(dateStr2 + 'T12:00:00');
  return Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
};

export const isToday = (dateStr: string): boolean => dateStr === toLocalDateStr();

export const isTomorrow = (dateStr: string): boolean => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return dateStr === toLocalDateStr(tomorrow);
};

export const isPast = (dateStr: string): boolean => dateStr < toLocalDateStr();

/** Add N days to a date string, returns new 'YYYY-MM-DD' */
export const addDays = (dateStr: string, n: number): string => {
  const d = new Date(dateStr + 'T12:00:00');
  d.setDate(d.getDate() + n);
  return toLocalDateStr(d);
};

/** Returns array of date strings from (center - before) to (center + after) */
export const getDateRange = (centerDate: string, before: number, after: number): string[] => {
  const result: string[] = [];
  for (let i = -before; i <= after; i++) {
    result.push(addDays(centerDate, i));
  }
  return result;
};

/** Returns array of Monday–Sunday date strings for the week containing the given date */
export const getWeekDates = (dateStr: string): string[] => {
  const d = new Date(dateStr + 'T12:00:00');
  const dayOfWeek = d.getDay(); // 0=Sun, 1=Mon, ...
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = addDays(dateStr, mondayOffset);
  const result: string[] = [];
  for (let i = 0; i < 7; i++) {
    result.push(addDays(monday, i));
  }
  return result;
};

/** Generate a unique ID with timestamp + random suffix */
export const generateId = (): string =>
  `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
