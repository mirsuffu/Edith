import React, { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { useEditorMode } from '@/hooks/useEditorMode';
import { SUBJECT_KEYS } from '@/constants';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Toggle } from '@/components/ui/Toggle';
import { generateId, addDays, formatFullDate, isTomorrow, isToday, toLocalDateStr } from '@/utils/dates';
import { toast, TOAST_MESSAGES } from '@/utils/toast';
import { schedulePersistentNotification, cancelNotification } from '@/services/notificationService';
import type { SubjectKey, ScheduleItem } from '@/types';
import { Plus, Trash2, Check, Clock, ChevronLeft, ChevronRight, Edit2 } from 'lucide-react';
import { ConfirmModal } from '@/components/modals/ConfirmModal';

const DAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export const ScheduleTab: React.FC = () => {
  const config = useAppStore((s) => s.data.config);
  const schedule = useAppStore((s) => s.data.progress.schedule);
  const addItem = useAppStore((s) => s.addScheduleItem);
  const updateItem = useAppStore((s) => s.updateScheduleItem);
  const deleteItem = useAppStore((s) => s.deleteScheduleItem);
  const toggleComplete = useAppStore((s) => s.toggleScheduleComplete);
  const { isEditorMode } = useEditorMode();

  const [viewDate, setViewDate] = useState(toLocalDateStr());
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  
  const [fSubject, setFSubject] = useState<SubjectKey | ''>('');
  const [fTitle, setFTitle] = useState('');
  const [fTime, setFTime] = useState('09:00');
  const [fDuration, setFDuration] = useState('60');
  const [fNotify, setFNotify] = useState(true);
  const [fIsFixed, setFIsFixed] = useState(false);
  const [fDaysOfWeek, setFDaysOfWeek] = useState<number[]>([1, 2, 3, 4, 5]); // Default Mon-Fri

  const viewDayIndex = new Date(viewDate + 'T12:00:00').getDay();

  const oneDayItems = schedule
    .filter((s) => s.date === viewDate)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  const fixedItems = schedule
    .filter((s) => s.date === '__fixed__' && (!s.daysOfWeek || s.daysOfWeek.includes(viewDayIndex)))
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  const handleOpenAdd = (isFixed: boolean) => {
    setEditingItemId(null);
    setFIsFixed(isFixed);
    setFTitle(''); setFSubject(''); setFTime('09:00'); setFDuration('60'); setFNotify(true);
    setFDaysOfWeek([1, 2, 3, 4, 5]);
    setShowAddModal(true);
  };

  const handleOpenEdit = (item: ScheduleItem) => {
    setEditingItemId(item.id);
    setFIsFixed(item.date === '__fixed__');
    setFTitle(item.customTitle);
    setFSubject(item.subject || '');
    setFTime(item.startTime);
    setFDuration(item.durationMinutes.toString());
    setFNotify(item.notifyEnabled);
    setFDaysOfWeek(item.daysOfWeek || [1, 2, 3, 4, 5]);
    setShowAddModal(true);
  };

  const handleSave = () => {
    if (!fTitle.trim()) { toast.error('Title is required.'); return; }
    if (fIsFixed && !isEditorMode) { toast.error('Enable Editor Mode for fixed schedule items.'); return; }
    
    const itemData: any = {
      subject: fSubject || null,
      customTitle: fTitle.trim(),
      startTime: fTime,
      durationMinutes: parseInt(fDuration) || 60,
      notifyEnabled: fNotify,
      daysOfWeek: fIsFixed ? fDaysOfWeek : undefined,
    };

    if (editingItemId) {
      updateItem(editingItemId, itemData);
      toast.success('Item updated.');
    } else {
      const newItem: ScheduleItem = {
        ...itemData,
        id: generateId(),
        date: fIsFixed ? '__fixed__' : viewDate,
        completed: false,
        completedDates: [],
      };
      addItem(newItem);
      toast.success(TOAST_MESSAGES.scheduleAdded);
    }
    
    // Notification logic
    const finalId = editingItemId || generateId(); // Placeholder for new notification logic if needed
    if (fNotify && !fIsFixed) {
      const dateObj = new Date(`${viewDate}T${fTime}:00`);
      dateObj.setMinutes(dateObj.getMinutes() - 10);
      schedulePersistentNotification(
        finalId,
        fTitle.trim(),
        `Starting in 10 min: ${config[fSubject || 'accounts']?.name || 'Study session'}`,
        dateObj.toISOString()
      );
    }
    
    setShowAddModal(false);
  };

  const toggleDay = (day: number) => {
    setFDaysOfWeek(prev => prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]);
  };

  const ItemRow = ({ item, isOneDay }: { item: ScheduleItem, isOneDay: boolean }) => {
    const isDone = item.date === '__fixed__' 
      ? item.completedDates?.includes(viewDate)
      : item.completed;

    return (
      <div className={`flex items-center gap-3 p-3 bg-surface border rounded-xl card-shadow transition-all ${
        isOneDay ? 'border-danger/30 bg-danger/5 shadow-danger/5' : 'border-border'
      } ${isDone ? 'opacity-60' : ''}`}>
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
          <span className={`text-xs font-medium ${isDone ? 'line-through text-text-3' : 'text-text-1'}`}>
            {item.customTitle}
          </span>
          {item.date === '__fixed__' && <span className="ml-1 text-[9px] text-text-3">(Fixed)</span>}
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <button onClick={() => toggleComplete(item.id)}
            className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-colors ${
              isDone ? 'bg-success/20 border-success/30 text-success' : 'border-border hover:border-accent bg-surface-2/50'
            }`} aria-label="Toggle">
            {isDone && <Check size={14} />}
          </button>
          <button onClick={() => handleOpenEdit(item)}
            className="w-7 h-7 flex items-center justify-center text-text-3 hover:text-accent hover:bg-accent/10 rounded-lg transition-colors" aria-label="Edit">
            <Edit2 size={12} />
          </button>
          <button onClick={() => setItemToDelete(item.id)}
            className="w-7 h-7 flex items-center justify-center text-text-3/30 hover:text-danger hover:bg-danger/10 rounded-lg transition-colors" aria-label="Delete">
            <Trash2 size={12} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full overflow-y-auto no-scrollbar pb-24 md:pb-4 tab-content-enter">
      {/* Date navigation */}
      <div className="flex items-center gap-2 mb-3 bg-surface/50 p-2 rounded-2xl border border-border/50">
        <button onClick={() => setViewDate(addDays(viewDate, -1))}
          className="p-2 rounded-xl border border-border hover:bg-surface-2 text-text-3 transition-colors" aria-label="Previous day">
          <ChevronLeft size={18} />
        </button>
        <div className="flex-1 text-center">
          <div className="text-sm font-bold text-text-1">{formatFullDate(viewDate)}</div>
          {isToday(viewDate) ? (
            <div className="text-lg font-black text-success mt-0.5 tracking-tight scale-up-center">TODAY</div>
          ) : isTomorrow(viewDate) ? (
            <div className="text-[10px] text-accent font-bold uppercase tracking-widest mt-0.5">Tomorrow</div>
          ) : null}
        </div>
        <button onClick={() => setViewDate(addDays(viewDate, 1))}
          className="p-2 rounded-xl border border-border hover:bg-surface-2 text-text-3 transition-colors" aria-label="Next day">
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Add buttons */}
      <div className="flex gap-2 mb-6">
        <Button size="sm" className="flex-1 rounded-xl shadow-lg shadow-accent/10" onClick={() => handleOpenAdd(false)}>
          <Plus size={14} /> Add One-Day
        </Button>
        <Button size="sm" variant="secondary" className="flex-1 rounded-xl shadow-lg shadow-surface-2/10" onClick={() => handleOpenAdd(true)}>
          <Plus size={14} /> Fixed Plan
        </Button>
      </div>

      {/* Timeline Sections */}
      <div className="space-y-6">
        {/* One-Day Section */}
        {oneDayItems.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-danger/70 pl-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-danger animate-pulse" />
              One-Day Schedule
            </h3>
            <div className="space-y-2">
              {oneDayItems.map(item => <ItemRow key={item.id} item={item} isOneDay={true} />)}
            </div>
          </div>
        )}

        {/* Fixed Section */}
        <div className="space-y-3">
          <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-text-3 pl-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-text-3/30" />
            Fixed Schedules
          </h3>
          {fixedItems.length > 0 ? (
            <div className="space-y-2">
              {fixedItems.map(item => <ItemRow key={item.id} item={item} isOneDay={false} />)}
            </div>
          ) : (
            <div className="text-center py-6 bg-surface-2/20 border border-dashed border-border rounded-2xl text-[10px] text-text-3 font-medium">
              No fixed plans for this weekday.
            </div>
          )}
        </div>

        {oneDayItems.length === 0 && fixedItems.length === 0 && (
          <div className="text-center py-12 text-text-3 text-xs flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-surface-2 flex items-center justify-center opacity-50">
              <Clock size={20} />
            </div>
            Nothing scheduled for this day.
          </div>
        )}
      </div>

      {/* Add Modal */}
      <Modal open={showAddModal} onClose={() => setShowAddModal(false)} title={editingItemId ? 'Edit Item' : fIsFixed ? 'Add Fixed Item' : 'Add One-Day Item'}>
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

          {fIsFixed && (
             <div className="space-y-1.5">
               <label className="text-[10px] uppercase font-bold text-text-3 tracking-wider">Days of Week</label>
               <div className="flex justify-between gap-1">
                 {DAY_LABELS.map((label, i) => {
                   const active = fDaysOfWeek.includes(i);
                   return (
                     <button key={i} onClick={() => toggleDay(i)}
                       className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                         active ? 'bg-accent text-white shadow-md shadow-accent/20' : 'bg-surface-2 text-text-3 hover:bg-surface-3'
                       }`}>
                       {label}
                     </button>
                   );
                 })}
               </div>
             </div>
          )}

          <Toggle checked={fNotify} onChange={setFNotify} label="Notify 10 min before" />
        </div>
        <div className="p-5 border-t border-border flex justify-end gap-3">
          <Button variant="ghost" onClick={() => setShowAddModal(false)}>Cancel</Button>
          <Button onClick={handleSave}>{editingItemId ? 'Update' : 'Add'}</Button>
        </div>
      </Modal>

      <ConfirmModal
        open={!!itemToDelete}
        onClose={() => setItemToDelete(null)}
        onConfirm={() => {
          if (itemToDelete) { 
            cancelNotification(itemToDelete);
            deleteItem(itemToDelete); 
            toast.info(TOAST_MESSAGES.scheduleItemDeleted); 
          }
        }}
        title="Delete Item"
        message="Delete this schedule item?"
      />
    </div>
  );
};
