import React, { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Toggle } from '@/components/ui/Toggle';
import { Badge } from '@/components/ui/Badge';
import { generateId } from '@/utils/dates';
import { toast, TOAST_MESSAGES } from '@/utils/toast';
import { useNotifications } from '@/hooks/useNotifications';
import { schedulePersistentNotification, cancelNotification } from '@/services/notificationService';
import type { Reminder } from '@/types';
import { Bell, Trash2, Plus, Clock, Repeat } from 'lucide-react';
import { ConfirmModal } from '@/components/modals/ConfirmModal';

export const RemindersTab: React.FC = () => {
  const reminders = useAppStore((s) => s.data.progress.reminders);
  const addReminder = useAppStore((s) => s.addReminder);
  const updateReminder = useAppStore((s) => s.updateReminder);
  const deleteReminder = useAppStore((s) => s.deleteReminder);
  const { isSupported, permission, requestPermission } = useNotifications();

  const [showAdd, setShowAdd] = useState(false);
  const [reminderToDelete, setReminderToDelete] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('09:00');
  const [repeat, setRepeat] = useState<'none' | 'daily' | 'weekly'>('none');
  const [notify, setNotify] = useState(true);

  // Sort: unfired first, then by scheduledAt
  const sorted = [...reminders].sort((a, b) => {
    if (a.fired !== b.fired) return a.fired ? 1 : -1;
    return a.scheduledAt.localeCompare(b.scheduledAt);
  });

  const handleAdd = () => {
    if (!title.trim()) { toast.error('Title is required.'); return; }
    if (!date) { toast.error('Date is required.'); return; }

    const reminder: Reminder = {
      id: generateId(),
      title: title.trim(),
      body: body.trim(),
      scheduledAt: `${date}T${time}:00`,
      repeat,
      notifyEnabled: notify,
      fired: false,
    };

    addReminder(reminder);
    
    // Also schedule persistently if enabled
    if (reminder.notifyEnabled) {
      schedulePersistentNotification(
        reminder.id,
        reminder.title,
        reminder.body || 'Reminder from Edith',
        reminder.scheduledAt
      );
    } else {
      toast.success(TOAST_MESSAGES.reminderSet);
    }
    
    setShowAdd(false);
    setTitle(''); setBody(''); setDate(''); setRepeat('none');
  };

  return (
    <div className="h-full overflow-y-auto no-scrollbar pb-24 md:pb-4 tab-content-enter">
      {/* Permission prompt */}
      {isSupported && permission === 'default' && (
        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-4 mb-4 flex items-center gap-3">
          <Bell size={20} className="text-accent shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-medium text-text-1">Enable notifications?</p>
            <p className="text-xs text-text-2 mt-0.5">Get reminded about upcoming study sessions and tests.</p>
          </div>
          <Button size="sm" onClick={requestPermission}>Allow</Button>
        </div>
      )}

      {/* Header + Add button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-lg font-bold text-text-1">Reminders</h2>
        <Button size="sm" onClick={() => setShowAdd(true)}><Plus size={14} /> Add Reminder</Button>
      </div>

      {/* Reminders list */}
      {sorted.length === 0 && (
        <div className="text-center py-12 text-text-3 text-sm">
          No reminders yet. Add one to stay on track.
        </div>
      )}

      <div className="space-y-2">
        {sorted.map((r) => (
          <div key={r.id} className={`p-4 bg-surface border border-border rounded-xl card-shadow flex items-start gap-3 ${r.fired ? 'opacity-50' : ''}`}>
            <Bell size={16} className={r.notifyEnabled ? 'text-warning mt-0.5' : 'text-text-3 mt-0.5'} />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-text-1">{r.title}</div>
              {r.body && <div className="text-xs text-text-2 mt-0.5">{r.body}</div>}
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-[10px] font-mono text-text-3 flex items-center gap-1">
                  <Clock size={10} />{new Date(r.scheduledAt).toLocaleString()}
                </span>
                {r.repeat !== 'none' && (
                  <Badge variant="default"><Repeat size={8} className="mr-1" />{r.repeat}</Badge>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Toggle checked={r.notifyEnabled} onChange={(v) => updateReminder(r.id, { notifyEnabled: v })} />
              <button onClick={() => setReminderToDelete(r.id)}
                className="text-danger/40 hover:text-danger p-1 rounded transition-colors" aria-label="Delete">
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Reminder Modal */}
      <Modal open={showAdd} onClose={() => setShowAdd(false)} title="Add Reminder" maxWidth="max-w-md">
        <div className="p-5 space-y-4">
          <Input label="Title" placeholder="e.g. Revise Income Tax Ch 3" value={title} onChange={(e) => setTitle(e.target.value)} />
          <Input label="Note (optional)" placeholder="Additional details" value={body} onChange={(e) => setBody(e.target.value)} />
          <div className="grid grid-cols-2 gap-3">
            <Input label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <Input label="Time" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
          <Select label="Repeat" value={repeat} onChange={(e) => setRepeat(e.target.value as any)}>
            <option value="none">No Repeat</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </Select>
          <Toggle checked={notify} onChange={setNotify} label="Enable notification" />
        </div>
        <div className="p-5 border-t border-border flex justify-end gap-3">
          <Button variant="ghost" onClick={() => setShowAdd(false)}>Cancel</Button>
          <Button onClick={handleAdd}>Add Reminder</Button>
        </div>
      </Modal>

      <ConfirmModal
        open={!!reminderToDelete}
        onClose={() => setReminderToDelete(null)}
        onConfirm={() => {
          if (reminderToDelete) {
            cancelNotification(reminderToDelete); // Also deletes from Firestore
            deleteReminder(reminderToDelete);
            toast.info(TOAST_MESSAGES.reminderDeleted);
          }
        }}
        title="Delete Reminder"
        message="Are you sure you want to delete this reminder?"
      />
    </div>
  );
};
