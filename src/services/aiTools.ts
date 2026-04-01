import { useAppStore } from '@/store/appStore';
import { generateId, toLocalDateStr, toLocalTimeStr, addDays } from '@/utils/dates';
import type { SubjectKey, Reminder, ScheduleItem, PlannerEntry, ScheduledTest } from '@/types';

// ============================================================================
// TOOL JSON SCHEMAS (OpenAI format)
// ============================================================================

export const AI_TOOLS = [
  {
    type: "function",
    function: {
      name: "update_progress",
      description: "Increment or decrement the number of lectures or revisions completed for a specific subject.",
      parameters: {
        type: "object",
        properties: {
          subject: { type: "string", description: "The subject key (e.g., 'accounts', 'law', 'taxation_it', 'taxation_gst', 'costing', 'audit', 'fm', 'sm')" },
          category: { type: "string", enum: ["lectures", "revisions"] },
          operation: { type: "string", enum: ["add", "subtract", "set"], description: "Whether to add to, subtract from, or strictly set the current count." },
          amount: { type: "number", description: "The number of units to add/subtract/set." },
        },
        required: ["subject", "category", "operation", "amount"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "add_reminder",
      description: "Set a push notification / reminder for a specific date and time.",
      parameters: {
        type: "object",
        properties: {
          title: { type: "string", description: "Short, punchy title for the reminder." },
          body: { type: "string", description: "Details of what needs to be done." },
          date: { type: "string", description: "Date in 'YYYY-MM-DD' format. Use 'today' or 'tomorrow' if unsure of exact date." },
          time: { type: "string", description: "Time in 'HH:MM' (24-hour) format." },
        },
        required: ["title", "body", "date", "time"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "add_schedule_item",
      description: "Block out specific time in the daily schedule for a study session.",
      parameters: {
        type: "object",
        properties: {
          title: { type: "string", description: "What will the student study? (e.g., 'Audit Chapter 3', 'Tax Revisions')" },
          subject: { type: "string", description: "The subject key, if applicable. Can be null or omitted." },
          date: { type: "string", description: "Date in 'YYYY-MM-DD' format. Use 'today' or 'tomorrow' if unsure." },
          startTime: { type: "string", description: "Start time in 'HH:MM' (24-hour) format." },
          durationMinutes: { type: "number", description: "Duration of the study block in minutes." },
        },
        required: ["title", "date", "startTime", "durationMinutes"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "add_planner_entry",
      description: "Add a high-level task/note to a specific day in the planner.",
      parameters: {
        type: "object",
        properties: {
          subject: { type: "string", description: "The subject key." },
          date: { type: "string", description: "Date in 'YYYY-MM-DD' format." },
          note: { type: "string", description: "Short note up to 50 characters." },
        },
        required: ["subject", "date", "note"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "schedule_test",
      description: "Add a pending test (mock test, full test) to the Performance tab.",
      parameters: {
        type: "object",
        properties: {
          subject: { type: "string" },
          date: { type: "string", description: "'YYYY-MM-DD'" },
          time: { type: "string", description: "'HH:MM'" },
          note: { type: "string", description: "E.g., 'Full mock 1', 'Chapter 5-7 test'" },
        },
        required: ["subject", "date", "time", "note"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "add_syllabus_chapter",
      description: "Add a new chapter to the syllabus tracking for a subject.",
      parameters: {
        type: "object",
        properties: {
          subject: { type: "string" },
          chapterName: { type: "string", description: "The name of the chapter." },
        },
        required: ["subject", "chapterName"]
      }
    }
  }
];

// ============================================================================
// TOOL EXECUTION & FORMATTING
// ============================================================================

/** Normalizes abstract dates like 'today' or 'tomorrow' into YYYY-MM-DD */
const normalizeDate = (dateStr: string) => {
  if (dateStr.toLowerCase() === 'today') return toLocalDateStr();
  if (dateStr.toLowerCase() === 'tomorrow') return addDays(toLocalDateStr(), 1);
  return dateStr;
};

/** Normalizes time to ensure HH:MM */
const normalizeTime = (timeStr: string) => {
  if (!timeStr || !timeStr.includes(':')) return '12:00';
  return timeStr.slice(0, 5);
};

export const formatToolDescription = (name: string, args: any): string => {
  try {
    const store = useAppStore.getState();
    const config = store.data.config;
    const subjName = args.subject ? config[args.subject as SubjectKey]?.name || args.subject : '';

    switch (name) {
      case 'update_progress':
        return `Update ${subjName} ${args.category}: ${args.operation} ${args.amount}`;
      case 'add_reminder':
        return `Set reminder: "${args.title}" at ${args.time} on ${normalizeDate(args.date)}`;
      case 'add_schedule_item':
        return `Schedule "${args.title}" for ${args.durationMinutes}m at ${args.time || args.startTime} on ${normalizeDate(args.date)}`;
      case 'add_planner_entry':
        return `Add to Planner (${subjName}): "${args.note}" on ${normalizeDate(args.date)}`;
      case 'schedule_test':
        return `Schedule Mock Test for ${subjName} at ${args.time} on ${normalizeDate(args.date)}`;
      case 'add_syllabus_chapter':
        return `Add Chapter: "${args.chapterName}" to ${subjName}`;
      default:
        return `Execute unknown action: ${name}`;
    }
  } catch (e) {
    return `Execute ${name} (Failed to parse args)`;
  }
};

/**
 * Executes the tool call against the Zustand store.
 * Returns a string representing the result (for the AI to read).
 */
export const executeToolCall = (name: string, args: any): { success: boolean; result: string } => {
  try {
    const store = useAppStore.getState();

    switch (name) {
      case 'update_progress': {
        const { subject, category, operation, amount } = args;
        const current = store.data.progress[category as 'lectures' | 'revisions'][subject as SubjectKey] || 0;
        let next = current;
        if (operation === 'add') next = current + amount;
        else if (operation === 'subtract') next = current - amount;
        else if (operation === 'set') next = amount;
        store.updateProgress(category, subject, next);
        return { success: true, result: `Successfully updated ${category} for ${subject} to ${next}.` };
      }

      case 'add_reminder': {
        const reminder: Reminder = {
          id: generateId(),
          title: args.title,
          body: args.body,
          scheduledAt: `${normalizeDate(args.date)}T${normalizeTime(args.time)}`,
          repeat: 'none',
          notifyEnabled: true,
          fired: false,
        };
        store.addReminder(reminder);
        return { success: true, result: `Reminder '${args.title}' created.` };
      }

      case 'add_schedule_item': {
        const item: ScheduleItem = {
          id: generateId(),
          customTitle: args.title,
          subject: args.subject || null,
          date: normalizeDate(args.date),
          startTime: normalizeTime(args.startTime || args.time),
          durationMinutes: args.durationMinutes || 60,
          notifyEnabled: true,
          completed: false,
        };
        store.addScheduleItem(item);
        return { success: true, result: `Scheduled '${args.title}' for ${args.durationMinutes}m.` };
      }

      case 'add_planner_entry': {
        const entry: PlannerEntry = {
          date: normalizeDate(args.date),
          subject: args.subject,
          note: (args.note || '').slice(0, 50),
          ticked: false,
          notifyEnabled: false,
        };
        store.updatePlannerEntry(entry);
        return { success: true, result: `Added planner entry for ${args.subject} on ${args.date}.` };
      }

      case 'schedule_test': {
        const test: ScheduledTest = {
          id: generateId(),
          subject: args.subject,
          date: normalizeDate(args.date),
          time: normalizeTime(args.time),
          note: args.note,
          notifyEnabled: true,
          completed: false,
        };
        store.addScheduledTest(test);
        return { success: true, result: `Scheduled test for ${args.subject}.` };
      }

      case 'add_syllabus_chapter': {
        store.addSyllabusChapter(args.subject, args.chapterName);
        return { success: true, result: `Added chapter '${args.chapterName}' to ${args.subject}.` };
      }

      default:
        return { success: false, result: `Error: Tool '${name}' is not recognized.` };
    }
  } catch (error: any) {
    return { success: false, result: `Error executing ${name}: ${error.message}` };
  }
};
