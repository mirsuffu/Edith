import React, { useState, useCallback, useRef, useEffect, memo } from 'react';
import { useAppStore } from '@/store/appStore';
import { useEditorMode } from '@/hooks/useEditorMode';
import { SUBJECT_KEYS } from '@/constants';
import type { SubjectKey, SyllabusChapter } from '@/types';
import { ChevronDown, ChevronRight, Trash2, Plus } from 'lucide-react';
import { toast, TOAST_MESSAGES } from '@/utils/toast';
import { ConfirmModal } from '@/components/modals/ConfirmModal';

const MAX_CHAPTER_NAME = 80;

/** Local-state input that only commits on blur — prevents defocus on every keystroke */
const DebouncedChapterInput = memo<{
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
  maxLength?: number;
}>(({ value, onChange, disabled, maxLength }) => {
  const [local, setLocal] = useState(value);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => { setLocal(value); }, [value]);

  const commit = useCallback(() => {
    if (local !== value) onChange(local);
  }, [local, value, onChange]);

  return (
    <input
      ref={ref}
      type="text"
      value={local}
      maxLength={maxLength}
      onChange={(e) => setLocal(e.target.value)}
      onBlur={commit}
      onKeyDown={(e) => { if (e.key === 'Enter') { commit(); ref.current?.blur(); } }}
      disabled={disabled}
      className={`flex-1 bg-transparent text-xs font-medium text-text-1 border-none focus:outline-none min-w-0 ${disabled ? 'opacity-60' : ''}`}
    />
  );
});
DebouncedChapterInput.displayName = 'DebouncedChapterInput';

/** Fix #4: Status circle with visible border */
const StatusCircle: React.FC<{
  status: SyllabusChapter['status'];
  onClick: () => void;
}> = ({ status, onClick }) => {
  const styles = {
    'Not Started': 'border-text-3/50 bg-transparent',
    'In-Progress': 'border-warning bg-warning/25',
    'Completed': 'border-success bg-success/30',
  }[status];

  const label = {
    'Not Started': 'NS',
    'In-Progress': 'IP',
    'Completed': '✓',
  }[status];

  return (
    <button
      onClick={onClick}
      className={`w-5 h-5 rounded-full shrink-0 border-2 flex items-center justify-center transition-all hover:scale-110 ${styles}`}
      title={`${status} — Click to cycle`}
      aria-label={`Status: ${status}. Click to cycle.`}
    >
      <span className="text-[7px] font-bold text-text-1 leading-none">{label}</span>
    </button>
  );
};

/** Fix #5: Priority border style for chapter card */
const getPriorityBorder = (priority: SyllabusChapter['priority']): string => {
  if (priority === 'High') return 'border-danger/40';
  if (priority === 'Medium') return 'border-warning/35';
  return 'border-border/50'; // Low = default
};

export const SyllabusTab: React.FC = () => {
  const config = useAppStore((s) => s.data.config);
  const syllabus = useAppStore((s) => s.data.progress.syllabus);
  const addChapter = useAppStore((s) => s.addSyllabusChapter);
  const updateChapter = useAppStore((s) => s.updateSyllabusChapter);
  const deleteChapter = useAppStore((s) => s.deleteSyllabusChapter);
  const { isEditorMode } = useEditorMode();

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [newNames, setNewNames] = useState<Record<string, string>>({});
  const [newPriorities, setNewPriorities] = useState<Record<string, SyllabusChapter['priority']>>({});
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  const toggleExpand = (key: string) => setExpanded((p) => ({ ...p, [key]: !p[key] }));

  const handleAdd = (subjectKey: SubjectKey) => {
    if (!isEditorMode) { toast.error('Enable Editor Mode in Settings first.'); return; }
    const name = (newNames[subjectKey] || '').trim();
    if (!name) return;
    addChapter(subjectKey, name);
    // Update priority if not default
    const priority = newPriorities[subjectKey] || 'Medium';
    if (priority !== 'Medium') {
      // Find the just-added chapter (last one for this subject)
      const allForSubject = useAppStore.getState().data.progress.syllabus.filter(c => c.subject === subjectKey);
      const last = allForSubject[allForSubject.length - 1];
      if (last) updateChapter(last.id, { priority });
    }
    setNewNames((p) => ({ ...p, [subjectKey]: '' }));
    setNewPriorities((p) => ({ ...p, [subjectKey]: 'Medium' }));
    toast.success(TOAST_MESSAGES.chapterAdded);
  };

  const handleEdit = (id: string, updates: Partial<SyllabusChapter>) => {
    if (!isEditorMode) { toast.error('Enable Editor Mode in Settings first.'); return; }
    updateChapter(id, updates);
  };

  // Status cycling is UNLOCKED (no Editor Mode needed) per user request
  const handleStatusCycle = (ch: SyllabusChapter) => {
    const nextStatus = ch.status === 'Not Started' ? 'In-Progress' : ch.status === 'In-Progress' ? 'Completed' : 'Not Started';
    updateChapter(ch.id, { status: nextStatus });
  };

  return (
    <div className="h-full overflow-y-auto no-scrollbar pb-24 md:pb-4 tab-content-enter">
      {/* Expand/Collapse all */}
      <div className="flex justify-end mb-3">
        <button
          onClick={() => {
            const allExpanded = SUBJECT_KEYS.every(k => expanded[k]);
            const next: Record<string, boolean> = {};
            SUBJECT_KEYS.forEach(k => { next[k] = !allExpanded; });
            setExpanded(next);
          }}
          className="px-3 py-1.5 rounded-lg text-[10px] font-semibold text-text-3 hover:text-text-1 transition-colors"
        >
          {SUBJECT_KEYS.every(k => expanded[k]) ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      <div className="space-y-2">
        {SUBJECT_KEYS.map((subjectKey) => {
          const subject = config[subjectKey];
          const chapters = syllabus.filter((c) => c.subject === subjectKey);
          const completed = chapters.filter((c) => c.status === 'Completed').length;
          const total = chapters.length;
          const pct = total > 0 ? (completed / total) * 100 : 0;
          const isExp = !!expanded[subjectKey];

          return (
            <div key={subjectKey} className="bg-surface border border-border rounded-xl overflow-hidden card-shadow">
              {/* Subject header */}
              <button
                onClick={() => toggleExpand(subjectKey)}
                className="w-full flex items-center justify-between p-3 hover:bg-surface-2/30 transition-colors"
              >
                <div className="flex items-center gap-2">
                  {isExp ? <ChevronDown size={14} className="text-text-3" /> : <ChevronRight size={14} className="text-text-3" />}
                  <span className="text-sm font-bold" style={{ color: subject.color }}>{subject.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-text-3">{completed}/{total}</span>
                  <div className="w-16 h-1.5 rounded-full overflow-hidden bg-surface-2">
                    <div className="h-full rounded-full progress-fill" style={{ width: `${pct}%`, backgroundColor: subject.color }} />
                  </div>
                </div>
              </button>

              {/* Chapters */}
              {isExp && (
                <div className="px-3 pb-3 space-y-1.5 border-t border-border pt-2">
                  {chapters.length === 0 && (
                    <div className="text-center py-3 text-text-3 text-xs">No chapters yet</div>
                  )}

                  {chapters.map((ch) => (
                    <div
                      key={ch.id}
                      className={`flex items-center gap-2 py-1.5 px-2 rounded-lg bg-surface-2/40 border-2 transition-colors ${getPriorityBorder(ch.priority)}`}
                    >
                      {/* Fix #4: Status circle with visible border — UNLOCKED */}
                      <StatusCircle
                        status={ch.status}
                        onClick={() => handleStatusCycle(ch)}
                      />

                      {/* Name — uses debounced input to prevent defocus */}
                      <DebouncedChapterInput
                        value={ch.name}
                        maxLength={MAX_CHAPTER_NAME}
                        onChange={(val) => handleEdit(ch.id, { name: val })}
                        disabled={!isEditorMode}
                      />

                      {/* Fix #5: Priority indicator — changeable in editor mode */}
                      {isEditorMode ? (
                        <select
                          value={ch.priority}
                          onChange={(e) => handleEdit(ch.id, { priority: e.target.value as SyllabusChapter['priority'] })}
                          className="text-[9px] font-semibold shrink-0 bg-transparent border border-border rounded px-1 py-0.5 text-text-2 focus:outline-none focus:border-accent cursor-pointer"
                        >
                          <option value="High">High</option>
                          <option value="Medium">Med</option>
                          <option value="Low">Low</option>
                        </select>
                      ) : (
                        <span className={`text-[9px] font-semibold shrink-0 px-1.5 py-0.5 rounded ${
                          ch.priority === 'High' ? 'text-danger bg-danger/10' : ch.priority === 'Low' ? 'text-success bg-success/10' : 'text-text-3'
                        }`}>
                          {ch.priority === 'High' ? 'H' : ch.priority === 'Low' ? 'L' : 'M'}
                        </span>
                      )}

                      {/* Delete */}
                      <button
                        onClick={() => isEditorMode ? setItemToDelete(ch.id) : toast.error('Enable Editor Mode first.')}
                        className="text-text-3/40 hover:text-danger p-0.5 shrink-0 transition-colors"
                        aria-label="Delete chapter"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  ))}

                  {/* Add chapter — with priority selector */}
                  <div className="flex gap-1.5 mt-2">
                    <input
                      type="text"
                      placeholder="New chapter..."
                      maxLength={MAX_CHAPTER_NAME}
                      value={newNames[subjectKey] || ''}
                      onChange={(e) => setNewNames((p) => ({ ...p, [subjectKey]: e.target.value }))}
                      onKeyDown={(e) => { if (e.key === 'Enter') handleAdd(subjectKey); }}
                      className="flex-1 text-xs px-3 py-2 rounded-lg border border-border bg-surface-2 text-text-1 placeholder:text-text-3 focus:outline-none focus:border-accent min-w-0"
                    />
                    <select
                      value={newPriorities[subjectKey] || 'Medium'}
                      onChange={(e) => setNewPriorities((p) => ({ ...p, [subjectKey]: e.target.value as SyllabusChapter['priority'] }))}
                      className="text-[10px] font-semibold bg-surface-2 border border-border rounded-lg px-2 py-2 text-text-2 focus:outline-none focus:border-accent"
                      title="Priority"
                    >
                      <option value="High">High</option>
                      <option value="Medium">Med</option>
                      <option value="Low">Low</option>
                    </select>
                    <button
                      onClick={() => handleAdd(subjectKey)}
                      className="px-3 py-2 rounded-lg text-xs font-semibold text-white active:scale-95 transition-all"
                      style={{ backgroundColor: subject.color }}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <ConfirmModal
        open={!!itemToDelete}
        onClose={() => setItemToDelete(null)}
        onConfirm={() => {
          if (itemToDelete) {
            deleteChapter(itemToDelete);
            toast.info(TOAST_MESSAGES.chapterDeleted);
          }
        }}
        title="Delete Chapter"
        message="Delete this chapter from your syllabus? Poof — gone forever 💨"
      />
    </div>
  );
};
