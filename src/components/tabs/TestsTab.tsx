import React, { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { SUBJECT_KEYS } from '@/constants';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Toggle } from '@/components/ui/Toggle';
import { LogTestModal } from '@/components/modals/LogTestModal';
import { generateId, toLocalDateStr, formatDateDDMMYY } from '@/utils/dates';
import { toast, TOAST_MESSAGES } from '@/utils/toast';
import type { SubjectKey, ScheduledTest } from '@/types';
import { Trash2, Check, Calendar, Clock } from 'lucide-react';
import { ConfirmModal } from '@/components/modals/ConfirmModal';
import { Modal } from '@/components/ui/Modal';

export const TestsTab: React.FC = () => {
  const config = useAppStore((s) => s.data.config);
  const scheduledTests = useAppStore((s) => s.data.progress.scheduledTests);
  const loggedTests = useAppStore((s) => s.data.progress.tests);
  const addScheduledTest = useAppStore((s) => s.addScheduledTest);
  const deleteScheduledTest = useAppStore((s) => s.deleteScheduledTest);
  const updateScheduledTest = useAppStore((s) => s.updateScheduledTest);

  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [logModalOpen, setLogModalOpen] = useState(false);
  const [logPrefill, setLogPrefill] = useState<any>(null);
  const [testToDelete, setTestToDelete] = useState<string | null>(null);

  const [schSubject, setSchSubject] = useState<SubjectKey>('accounts');
  const [schDate, setSchDate] = useState(toLocalDateStr());
  const [schTime, setSchTime] = useState('10:00');
  const [schDuration, setSchDuration] = useState('');
  const [schNote, setSchNote] = useState('');
  const [schNotify, setSchNotify] = useState(true);

  const allScheduledTests = [...scheduledTests].sort((a, b) => new Date(`${a.date}T${a.time}`).getTime() - new Date(`${b.date}T${b.time}`).getTime());
  const allLoggedTests = [...loggedTests].sort((a, b) => new Date(`${b.date}T${b.time || '00:00'}`).getTime() - new Date(`${a.date}T${a.time || '00:00'}`).getTime());

  const handleSchedule = () => {
    const test: ScheduledTest = {
      id: generateId(), subject: schSubject, date: schDate, time: schTime,
      durationMinutes: schDuration ? parseInt(schDuration) : undefined,
      note: schNote.trim() || undefined, notifyEnabled: schNotify,
      completed: false,
    };
    addScheduledTest(test);
    toast.success(TOAST_MESSAGES.testScheduled);
    setShowScheduleModal(false);
    setSchNote(''); setSchDuration('');
  };

  const handleMarkComplete = (test: ScheduledTest) => {
    updateScheduledTest(test.id, { completed: true });
    setLogPrefill({ subject: test.subject, date: test.date, time: test.time, durationMinutes: test.durationMinutes, scheduledTestId: test.id });
    setLogModalOpen(true);
  };

  return (
    <div className="h-full overflow-y-auto no-scrollbar pb-24 md:pb-4 tab-content-enter">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-text-3">Tests</span>
        <Button size="sm" onClick={() => setShowScheduleModal(true)}>
          <Calendar size={14} /> Schedule
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Upcoming */}
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-text-3 mb-2">Upcoming</h3>
          {allScheduledTests.length === 0 && (
            <div className="p-4 border border-dashed border-border rounded-xl text-center text-text-3 text-xs">No tests scheduled.</div>
          )}
          <div className="space-y-2">
            {allScheduledTests.map((t) => (
              <div key={t.id} className="p-3 bg-surface border border-border rounded-xl card-shadow">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <div className="text-xs font-bold" style={{ color: config[t.subject]?.color }}>{config[t.subject]?.name}</div>
                    <div className="text-[10px] text-text-3 flex items-center gap-1.5 mt-0.5">
                      <Calendar size={10} /> {formatDateDDMMYY(t.date)}
                      <Clock size={10} className="ml-1" /> {t.time}
                      {t.durationMinutes && <span>({t.durationMinutes}m)</span>}
                    </div>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    {!t.completed && (
                      <button onClick={() => handleMarkComplete(t)} className="p-1 text-accent hover:bg-accent/10 rounded-lg" aria-label="Done">
                        <Check size={14} />
                      </button>
                    )}
                    <button onClick={() => setTestToDelete(t.id)} className="p-1 text-danger/50 hover:text-danger rounded-lg" aria-label="Delete">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
                {t.note && <div className="text-[10px] text-text-3 mt-1 pt-1 border-t border-border/50">{t.note}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Score History */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-text-3">Scores</h3>
            <Button size="sm" onClick={() => { setLogPrefill(null); setLogModalOpen(true); }}>+ Log</Button>
          </div>
          {allLoggedTests.length === 0 && (
            <div className="p-4 border border-dashed border-border rounded-xl text-center text-text-3 text-xs">No scores logged.</div>
          )}
          <div className="space-y-2">
            {allLoggedTests.map((t) => {
              const pct = t.maxMarks > 0 ? ((t.marksObtained / t.maxMarks) * 100).toFixed(0) : '—';
              return (
                <div key={t.id} className="p-3 bg-surface border border-border rounded-xl card-shadow flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: config[t.subject]?.color }} />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-text-1 truncate">{t.topics}</div>
                    <div className="text-[10px] text-text-3 mt-0.5">{formatDateDDMMYY(t.date)} · {t.marksObtained}/{t.maxMarks}</div>
                  </div>
                  <span className="font-mono text-sm font-bold text-accent">{pct}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Schedule Test Modal */}
      <Modal open={showScheduleModal} onClose={() => setShowScheduleModal(false)} title="Schedule Test" maxWidth="max-w-md">
        <div className="p-5 space-y-4">
          <Select label="Subject" value={schSubject} onChange={(e) => setSchSubject(e.target.value as SubjectKey)}>
            {SUBJECT_KEYS.map((k) => (<option key={k} value={k}>{config[k].name}</option>))}
          </Select>
          <div className="grid grid-cols-2 gap-3">
            <Input label="Date" type="date" value={schDate} onChange={(e) => setSchDate(e.target.value)} />
            <Input label="Time" type="time" value={schTime} onChange={(e) => setSchTime(e.target.value)} />
          </div>
          <Input label="Duration (min)" type="number" placeholder="Optional" value={schDuration} onChange={(e) => setSchDuration(e.target.value)} />
          <Input label="Note" placeholder="Optional" value={schNote} onChange={(e) => setSchNote(e.target.value)} />
          <Toggle checked={schNotify} onChange={setSchNotify} label="Notify before test" />
        </div>
        <div className="p-5 border-t border-border flex justify-end gap-3">
          <Button variant="ghost" onClick={() => setShowScheduleModal(false)}>Cancel</Button>
          <Button onClick={handleSchedule}>Schedule</Button>
        </div>
      </Modal>

      <LogTestModal open={logModalOpen} onClose={() => setLogModalOpen(false)} prefill={logPrefill} />

      <ConfirmModal
        open={!!testToDelete}
        onClose={() => setTestToDelete(null)}
        onConfirm={() => {
          if (testToDelete) { deleteScheduledTest(testToDelete); toast.info(TOAST_MESSAGES.scheduledTestDeleted); }
        }}
        title="Delete Test"
        message="Delete this scheduled test?"
      />
    </div>
  );
};
