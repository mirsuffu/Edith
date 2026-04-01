import React, { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { useEditorMode } from '@/hooks/useEditorMode';
import { SUBJECT_KEYS } from '@/constants';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Toggle } from '@/components/ui/Toggle';
import { generateId, addDays, formatFullDate, isTomorrow, toLocalDateStr } from '@/utils/dates';
import { toast, TOAST_MESSAGES } from '@/utils/toast';
import type { SubjectKey, ScheduleItem } from '@/types';
import { Plus, Trash2, Check, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { ConfirmModal } from '@/components/modals/ConfirmModal';

export const ScheduleTab: React.FC = () => {
  const config = useAppStore((s) => s.data.config);
  const schedule = useAppStore((s) => s.data.progress.schedule);
  const addItem = useAppStore((s) => s.addScheduleItem);
  const deleteItem = useAppStore((s) => s.deleteScheduleItem);
  const toggleComplete = useAppStore((s) => s.toggleScheduleComplete);
  const { isEditorMode } = useEditorMode();

  const [viewDate, setViewDate] = useState(addDays(toLocalDateStr(), 1));
  const [showAddModal, setShowAddModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [fSubject, setFSubject] = useState<SubjectKey | ''>('');
  const [fTitle, setFTitle] = useState('');
  const [fTime, setFTime] = useState('09:00');
  const [fDuration, setFDuration] = useState('60');
  const [fNotify, setFNotify] = useState(true);
  const [fIsFixed, setFIsFixed] = useState(false);

  const dateItems = schedule.filter((s) => s.date === viewDate);
  const fixedItems = schedule.filter((s) => s.date === '__fixed__');
  const hasDateOverride = dateItems.length > 0;
  const displayItems = hasDateOverride ? dateItems : fixedItems;
  const sortedItems = [...displayItems].sort((a, b) => a.startTime.localeCompare(b.startTime));

  const handleAdd = () => {
    if (!fTitle.trim()) { toast.error('Title is required.'); return; }
    if (fIsFixed && !isEditorMode) { toast.error('Enable Editor Mode for fixed schedule items.'); return; }
    const item: ScheduleItem = {
      id: generateId(), date: fIsFixed ? '__fixed__' : viewDate,
      subject: fSubject || null, customTitle: fTitle.trim(),
      startTime: fTime, durationMinutes: parseInt(fDuration) || 60,
      notifyEnabled: fNotify, completed: false,
    };
    addItem(item);
    toast.success(TOAST_MESSAGES.scheduleAdded);
    setShowAddModal(false);
    setFTitle(''); setFSubject(''); setFTime('09:00'); setFDuration('60');
  };

  return (
    <div className="h-full overflow-y-auto no-scrollbar pb-24 md:pb-4 tab-content-enter">
      {/* Date navigation */}
      <div className="flex items-center gap-2 mb-3">
        <button onClick={() => setViewDate(addDays(viewDate, -1))}
          className="p-2 rounded-lg border border-border hover:bg-surface-2 text-text-3" aria-label="Previous day">
          <ChevronLeft size={16} />
        </button>
        <div className="flex-1 text-center">
          <div className="text-sm font-semibold text-text-1">{formatFullDate(viewDate)}</div>
          {isTomorrow(viewDate) && <span className="text-[10px] text-accent font-semibold">Tomorrow</span>}
          {!hasDateOverride && fixedItems.length > 0 && (
            <span className="text-[10px] text-accent">📋 Daily template</span>
          )}
        </div>
        <button onClick={() => setViewDate(addDays(viewDate, 1))}
          className="p-2 rounded-lg border border-border hover:bg-surface-2 text-text-3" aria-label="Next day">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Add buttons */}
      <div className="flex gap-2 mb-3">
        <Button size="sm" onClick={() => { setFIsFixed(false); setShowAddModal(true); }}>
          <Plus size={14} /> Add
        </Button>
        <Button size="sm" variant="secondary" onClick={() => { setFIsFixed(true); setShowAddModal(true); }}>
          <Plus size={14} /> Fixed
        </Button>
      </div>

      {/* Timeline */}
      {sortedItems.length === 0 && (
        <div className="text-center py-8 text-text-3 text-xs">No schedule set.</div>
      )}

      <div className="space-y-1.5">
        {sortedItems.map((item) => (
          <div key={item.id} className="flex items-center gap-3 p-2.5 bg-surface border border-border rounded-xl card-shadow">
            <div className="w-12 shrink-0 text-right">
              <span className="font-mono text-xs font-bold text-text-2">{item.startTime}</span>
              {item.durationMinutes > 0 && (
                <div className="text-[9px] text-text-3 flex items-center justify-end gap-0.5">
                  <Clock size={8} />{item.durationMinutes}m
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              {item.subject && (
                <span className="text-[9px] font-bold" style={{ color: config[item.subject]?.color }}>
                  {config[item.subject]?.name} ·{' '}
                </span>
              )}
              <span className={`text-xs font-medium ${item.completed ? 'line-through text-text-3' : 'text-text-1'}`}>
                {item.customTitle}
              </span>
              {item.date === '__fixed__' && <span className="ml-1 text-[9px] text-text-3">(Fixed)</span>}
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button onClick={() => toggleComplete(item.id)}
                className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${
                  item.completed ? 'bg-success/20 border-success/30 text-success' : 'border-border hover:border-accent'
                }`} aria-label="Toggle">
                {item.completed && <Check size={12} />}
              </button>
              <button onClick={() => setItemToDelete(item.id)}
                className="text-text-3/30 hover:text-danger p-0.5 transition-colors" aria-label="Delete">
                <Trash2 size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      <Modal open={showAddModal} onClose={() => setShowAddModal(false)} title={fIsFixed ? 'Add Fixed Item' : 'Add Schedule Item'} maxWidth="max-w-md">
        <div className="p-5 space-y-4">
          <Select label="Subject (optional)" value={fSubject} onChange={(e) => setFSubject(e.target.value as SubjectKey)}>
            <option value="">— None —</option>
            {SUBJECT_KEYS.map((k) => (<option key={k} value={k}>{config[k].name}</option>))}
          </Select>
          <Input label="Title" placeholder="e.g. Accounts Ch 4-6" value={fTitle} onChange={(e) => setFTitle(e.target.value)} />
          <div className="grid grid-cols-2 gap-3">
            <Input label="Start Time" type="time" value={fTime} onChange={(e) => setFTime(e.target.value)} />
            <Input label="Duration (min)" type="number" value={fDuration} onChange={(e) => setFDuration(e.target.value)} />
          </div>
          <Toggle checked={fNotify} onChange={setFNotify} label="Notify 10 min before" />
        </div>
        <div className="p-5 border-t border-border flex justify-end gap-3">
          <Button variant="ghost" onClick={() => setShowAddModal(false)}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </div>
      </Modal>

      <ConfirmModal
        open={!!itemToDelete}
        onClose={() => setItemToDelete(null)}
        onConfirm={() => {
          if (itemToDelete) { deleteItem(itemToDelete); toast.info(TOAST_MESSAGES.scheduleItemDeleted); }
        }}
        title="Delete Item"
        message="Delete this schedule item?"
      />
    </div>
  );
};
