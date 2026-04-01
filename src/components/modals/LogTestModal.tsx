import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { useAppStore } from '@/store/appStore';
import { SUBJECT_KEYS } from '@/constants';
import { generateId, toLocalDateStr, toLocalTimeStr } from '@/utils/dates';
import { toast, TOAST_MESSAGES } from '@/utils/toast';
import type { LoggedTest, SubjectKey } from '@/types';

interface LogTestModalProps {
  open: boolean;
  onClose: () => void;
  prefill?: { subject?: SubjectKey; date?: string; time?: string; durationMinutes?: number; scheduledTestId?: string };
}

export const LogTestModal: React.FC<LogTestModalProps> = ({ open, onClose, prefill }) => {
  const config = useAppStore((s) => s.data.config);
  const logTest = useAppStore((s) => s.logTest);

  const [subject, setSubject] = useState<SubjectKey>(prefill?.subject || 'accounts');
  const [topics, setTopics] = useState('');
  const [date, setDate] = useState(prefill?.date || toLocalDateStr());
  const [time, setTime] = useState(prefill?.time || toLocalTimeStr());
  const [duration, setDuration] = useState(prefill?.durationMinutes?.toString() || '');
  const [note, setNote] = useState('');
  const [marks, setMarks] = useState('');
  const [maxMarks, setMaxMarks] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    setError('');
    if (!topics.trim()) { setError('Topics cannot be empty.'); return; }
    if (!marks.trim() || isNaN(Number(marks))) { setError(TOAST_MESSAGES.emptyScore); return; }
    if (!maxMarks.trim() || isNaN(Number(maxMarks)) || Number(maxMarks) <= 0) { setError('Max marks must be a positive number.'); return; }

    const test: LoggedTest = {
      id: generateId(),
      subject,
      topics: topics.trim(),
      date,
      time,
      durationMinutes: duration ? parseInt(duration) : undefined,
      note: note.trim() || undefined,
      marksObtained: Number(marks),
      maxMarks: Number(maxMarks),
      scheduledTestId: prefill?.scheduledTestId,
    };

    logTest(test);
    toast.success(TOAST_MESSAGES.testLogged);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title="Log Test Result" maxWidth="max-w-md">
      <div className="p-5 space-y-4 overflow-y-auto no-scrollbar">
        <Select label="Subject" value={subject} onChange={(e) => setSubject(e.target.value as SubjectKey)}>
          {SUBJECT_KEYS.map((k) => (
            <option key={k} value={k}>{config[k].name}</option>
          ))}
        </Select>

        <Input label="Topics / Chapters" placeholder="e.g. Ch 5-7, Partnership" value={topics} onChange={(e) => setTopics(e.target.value)} />

        <div className="grid grid-cols-2 gap-3">
          <Input label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <Input label="Time" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Input label="Duration (min)" type="number" placeholder="Optional" value={duration} onChange={(e) => setDuration(e.target.value)} />
          <Input label="Note" placeholder="Optional" value={note} onChange={(e) => setNote(e.target.value)} />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Input label="Marks Obtained" type="number" placeholder="e.g. 45" value={marks} onChange={(e) => setMarks(e.target.value)} />
          <Input label="Max Marks" type="number" placeholder="e.g. 100" value={maxMarks} onChange={(e) => setMaxMarks(e.target.value)} />
        </div>

        {error && <p className="text-danger text-xs font-medium">{error}</p>}
      </div>

      <div className="p-5 border-t border-border flex justify-end gap-3">
        <Button variant="ghost" onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Log Test</Button>
      </div>
    </Modal>
  );
};
