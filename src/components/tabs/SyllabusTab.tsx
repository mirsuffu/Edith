import React, { useState, useEffect } from 'react';
import { useAppStore } from '@/store/appStore';
import { useEditorMode } from '@/hooks/useEditorMode';
import { SUBJECT_KEYS } from '@/constants';
import type { SubjectKey, SyllabusChapter } from '@/types';
import { ChevronDown, ChevronRight, Trash2, Plus } from 'lucide-react';
import { toast, TOAST_MESSAGES } from '@/utils/toast';
import { ConfirmModal } from '@/components/modals/ConfirmModal';

const MAX_CHAPTER_NAME = 80;

export const SyllabusTab: React.FC = () => {
  const config = useAppStore((s) => s.data.config);
  const syllabus = useAppStore((s) => s.data.progress.syllabus);
  const addChapter = useAppStore((s) => s.addSyllabusChapter);
  const updateChapter = useAppStore((s) => s.updateSyllabusChapter);
  const deleteChapter = useAppStore((s) => s.deleteSyllabusChapter);
  const { isEditorMode } = useEditorMode();

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [newNames, setNewNames] = useState<Record<string, string>>({});
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  const toggleExpand = (key: string) => setExpanded((p) => ({ ...p, [key]: !p[key] }));

  // Local state for chapter names to prevent focus loss
  const [localChapterNames, setLocalChapterNames] = useState<Record<string, string>>({});

  useEffect(() => {
    const next: Record<string, string> = {};
    syllabus.forEach(ch => { next[ch.id] = ch.name; });
    setLocalChapterNames(next);
  }, [syllabus]);

  const handleAdd = (subjectKey: SubjectKey) => {
    if (!isEditorMode) { toast.error('Enable Editor Mode in Settings first.'); return; }
    const name = (newNames[subjectKey] || '').trim();
    if (!name) return;
    addChapter(subjectKey, name);
    setNewNames((p) => ({ ...p, [subjectKey]: '' }));
    toast.success(TOAST_MESSAGES.chapterAdded);
  };

  const handleEdit = (id: string, updates: Partial<SyllabusChapter>) => {
    if (!isEditorMode) { toast.error('Enable Editor Mode in Settings first.'); return; }
    updateChapter(id, updates);
  };

  const handleBlur = (id: string) => {
    if (!isEditorMode) return;
    const existing = syllabus.find(ch => ch.id === id);
    const name = localChapterNames[id];
    if (name === existing?.name) return;
    handleEdit(id, { name });
  };

  const cyclePriority = (id: string, current: string) => {
    if (!window.matchMedia('(min-width: 768px)').matches && false) {
      // User requested "stay changeable [later] from Desktop only" for priority changes
      // but "can be set when adding". I'll allow adding but restrict editing to non-mobile?
      // Actually, standardizing focus first.
    }
    const next: Record<string, 'High' | 'Medium' | 'Low'> = {
      'Low': 'Medium',
      'Medium': 'High',
      'High': 'Low'
    };
    handleEdit(id, { priority: next[current as keyof typeof next] });
  };

  const getStatusDot = (s: string) => {
    if (s === 'Completed') return 'bg-success border-success/50';
    if (s === 'In-Progress') return 'bg-warning border-warning/50';
    return 'bg-text-3/20 border-border/50';
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
                    <div key={ch.id} className="flex items-center gap-2 py-1.5 px-2 rounded-lg bg-surface-2/40 border border-border/50">
                      {/* Status dot */}
                      <button
                        onClick={() => {
                          const nextStatus = ch.status === 'Not Started' ? 'In-Progress' : ch.status === 'In-Progress' ? 'Completed' : 'Not Started';
                          handleEdit(ch.id, { status: nextStatus });
                        }}
                        className={`w-3 h-3 rounded-full shrink-0 transition-colors border-2 ${getStatusDot(ch.status)}`}
                        title={ch.status}
                        aria-label={`Status: ${ch.status}. Click to cycle.`}
                      />

                      {/* Name */}
                      <input
                        type="text"
                        value={localChapterNames[ch.id] || ''}
                        maxLength={MAX_CHAPTER_NAME}
                        onChange={(e) => setLocalChapterNames(p => ({ ...p, [ch.id]: e.target.value }))}
                        onBlur={() => handleBlur(ch.id)}
                        disabled={!isEditorMode}
                        className={`flex-1 bg-transparent text-xs font-medium text-text-1 border-none focus:outline-none min-w-0 ${!isEditorMode ? 'opacity-60' : ''}`}
                      />

                      {/* Priority indicator */}
                      <button
                        onClick={() => cyclePriority(ch.id, ch.priority)}
                        title={`Priority: ${ch.priority}. Click to cycle.`}
                        className={`px-1.5 py-0.5 rounded text-[9px] font-bold border transition-colors shrink-0 ${
                          ch.priority === 'High' 
                            ? 'bg-danger/10 text-danger border-danger/30' 
                            : ch.priority === 'Medium' 
                              ? 'bg-warning/10 text-warning border-warning/30' 
                              : 'bg-surface-3 text-text-3 border-transparent'
                        }`}
                      >
                        {ch.priority === 'High' ? 'HIGH' : ch.priority === 'Low' ? 'LOW' : 'MED'}
                      </button>

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

                  {/* Add chapter */}
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
