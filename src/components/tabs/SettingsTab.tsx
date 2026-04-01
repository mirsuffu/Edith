import React, { useRef, useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { useEditorMode } from '@/hooks/useEditorMode';
import { EditorModeModal } from '@/components/modals/EditorModeModal';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Toggle } from '@/components/ui/Toggle';
import { SUBJECT_KEYS, WHATSAPP_CONTACT_URL } from '@/constants';
import { signOutUser, resetPassword } from '@/services/authService';
import { validateImportStructure } from '@/utils/validateImport';
import { toast, TOAST_MESSAGES } from '@/utils/toast';
import { isFirebaseConfigured } from '@/config/firebase';
import type { ThemeMode } from '@/types';
import {
  User, Mail, LogOut, KeyRound, Calendar,
  Moon, Sun, Monitor, Clock, Download, Upload, Trash2,
  Brain, MessageCircle, Bell, Lock, Unlock,
  ChevronDown,
} from 'lucide-react';

/** Collapsible section — collapsed by default when `defaultOpen` is false */
const Section: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}> = ({ title, icon, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border/50 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 py-3 text-left group"
      >
        <span className="text-text-3">{icon}</span>
        <span className="text-xs font-bold uppercase tracking-wider text-text-2 flex-1">{title}</span>
        <ChevronDown
          size={14}
          className={`text-text-3 transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  );
};

export const SettingsTab: React.FC = () => {
  const user = useAppStore((s) => s.user);
  const userProfile = useAppStore((s) => s.userProfile);
  const data = useAppStore((s) => s.data);
  const setDeadlines = useAppStore((s) => s.setDeadlines);
  const setThemeMode = useAppStore((s) => s.setThemeMode);
  const setLastExported = useAppStore((s) => s.setLastExported);
  const setPacingThreshold = useAppStore((s) => s.setPacingAlertThreshold);
  const updateSubjectConfig = useAppStore((s) => s.updateSubjectConfig);
  const setNotificationsEnabled = useAppStore((s) => s.setNotificationsEnabled);
  const clearAllData = useAppStore((s) => s.clearAllData);
  const importData = useAppStore((s) => s.importData);
  const setUserName = useAppStore((s) => s.setUserName);
  const setEdithMemory = useAppStore((s) => s.setEdithMemory);

  const { isEditorMode, enableEditorMode, disableEditorMode } = useEditorMode();
  const [showEditorModal, setShowEditorModal] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [memDraft, setMemDraft] = useState(data.edithMemory);
  const [editingName, setEditingName] = useState(false);
  const [nameDraft, setNameDraft] = useState(userProfile?.name || '');
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSignOut = async () => {
    const result = await signOutUser();
    if (result.success) toast.info(TOAST_MESSAGES.signOut);
  };

  const handleResetPw = async () => {
    if (!user?.email) return;
    const result = await resetPassword(user.email);
    if (result.success) toast.info(TOAST_MESSAGES.passwordReset);
  };

  const handleExport = () => {
    const exportData = { ...data, lastExported: new Date().toISOString() };
    setLastExported(exportData.lastExported);
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'edith_backup.json';
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (validateImportStructure(parsed)) {
          importData(parsed);
          toast.success(TOAST_MESSAGES.importSuccess);
        } else {
          toast.error(TOAST_MESSAGES.importFail);
        }
      } catch {
        toast.error(TOAST_MESSAGES.importFail);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleClear = () => {
    clearAllData();
    toast.info(TOAST_MESSAGES.clearConfirm);
    setShowClearConfirm(false);
  };

  const handleEditorToggle = () => {
    if (isEditorMode) {
      disableEditorMode();
      toast.info('Editor Mode disabled.');
    } else {
      setShowEditorModal(true);
    }
  };

  const themeOptions: { value: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { value: 'dark', label: 'Dark', icon: <Moon size={16} /> },
    { value: 'light', label: 'Light', icon: <Sun size={16} /> },
    { value: 'system', label: 'System', icon: <Monitor size={16} /> },
    { value: 'auto', label: 'Auto', icon: <Clock size={16} /> },
  ];

  return (
    <div className="h-full overflow-y-auto no-scrollbar pb-24 md:pb-4 tab-content-enter max-w-xl mx-auto">

      {/* Editor Mode — always at top, prominent */}
      <div className="flex items-center justify-between p-3 mb-4 rounded-xl border border-border bg-surface-2/30">
        <div className="flex items-center gap-2.5">
          {isEditorMode ? <Unlock size={16} className="text-warning" /> : <Lock size={16} className="text-text-3" />}
          <div>
            <p className="text-sm font-semibold text-text-1">{isEditorMode ? 'Editor Mode On' : 'Editor Mode Off'}</p>
            <p className="text-[10px] text-text-3">{isEditorMode ? 'Sensitive areas are editable.' : 'Sensitive areas locked.'}</p>
          </div>
        </div>
        <button
          onClick={handleEditorToggle}
          className={`relative w-11 h-6 rounded-full transition-all duration-300 ${
            isEditorMode ? 'bg-warning' : 'bg-surface-3 border border-border'
          }`}
        >
          <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
            isEditorMode ? 'translate-x-5' : 'translate-x-0.5'
          }`} />
        </button>
      </div>

      {/* All sections — single column, flowing list */}

      <Section title="Account" icon={<User size={14} />} defaultOpen={false}>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <User size={14} className="text-text-3 shrink-0" />
            {editingName ? (
              <div className="flex items-center gap-2 flex-1">
                <input type="text" value={nameDraft} onChange={(e) => setNameDraft(e.target.value)}
                  className="flex-1 px-3 py-1.5 rounded-lg border border-border bg-surface-2 text-sm text-text-1 focus:outline-none focus:border-accent" />
                <Button size="sm" onClick={() => { setUserName(nameDraft); setEditingName(false); }}>Save</Button>
              </div>
            ) : (
              <div className="flex items-center gap-2 flex-1">
                <span className="text-sm font-medium text-text-1">{userProfile?.name || 'Student'}</span>
                <button onClick={() => setEditingName(true)} className="text-xs text-accent hover:underline">Edit</button>
              </div>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Mail size={14} className="text-text-3 shrink-0" />
            <span className="text-sm text-text-2">{userProfile?.email || 'Not logged in'}</span>
          </div>
          {isFirebaseConfigured && (
            <div className="flex gap-2 pt-1">
              <Button size="sm" variant="secondary" onClick={handleResetPw}><KeyRound size={14} /> Reset Password</Button>
              <Button size="sm" variant="danger" onClick={handleSignOut}><LogOut size={14} /> Sign Out</Button>
            </div>
          )}
        </div>
      </Section>

      <Section title="Exam Deadlines" icon={<Calendar size={14} />} defaultOpen={false}>
        <div className="grid grid-cols-2 gap-3">
          <Input label="Lectures Deadline" type="date" value={data.deadlines.lectures}
            onChange={(e) => setDeadlines({ ...data.deadlines, lectures: e.target.value })}
            disabled={!isEditorMode} />
          <Input label="Exam Date" type="date" value={data.deadlines.exam}
            onChange={(e) => setDeadlines({ ...data.deadlines, exam: e.target.value })}
            disabled={!isEditorMode} />
        </div>
      </Section>

      <Section title="Subject Workloads" icon={<User size={14} />} defaultOpen={false}>
        <div className="space-y-2">
          {SUBJECT_KEYS.map((key) => {
            const sub = data.config[key];
            return (
              <div key={key} className="flex items-center gap-3 p-2 rounded-lg bg-surface-2/30">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: sub.color }} />
                <span className="text-xs font-semibold text-text-1 w-24 shrink-0 truncate">{sub.name}</span>
                <div className="flex-1 grid grid-cols-2 gap-2">
                  <Input label="Lec" type="number" value={sub.lectures}
                    onChange={(e) => updateSubjectConfig(key, 'lectures', parseInt(e.target.value) || 0)}
                    disabled={!isEditorMode} />
                  <Input label="Rev" type="number" value={sub.revisions}
                    onChange={(e) => updateSubjectConfig(key, 'revisions', parseInt(e.target.value) || 0)}
                    disabled={!isEditorMode} />
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section title="Appearance" icon={<Moon size={14} />} defaultOpen={false}>
        <div className="grid grid-cols-4 gap-2">
          {themeOptions.map((opt) => (
            <button key={opt.value} onClick={() => setThemeMode(opt.value)}
              className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all ${
                data.themeMode === opt.value
                  ? 'bg-accent/10 border-accent text-accent'
                  : 'border-border text-text-3 hover:bg-surface-2 hover:text-text-1'
              }`}>
              {opt.icon}
              <span className="text-[10px] font-bold">{opt.label}</span>
            </button>
          ))}
        </div>
      </Section>

      <Section title="Pacing" icon={<Calendar size={14} />} defaultOpen={false}>
        <div className="flex items-center gap-3">
          <Input label="Daily Pace Alert" type="number"
            value={data.pacingAlertThreshold}
            onChange={(e) => setPacingThreshold(parseInt(e.target.value) || 4)}
            disabled={!isEditorMode} />
          <p className="text-[10px] text-text-3 flex-1">Warning when required daily pace exceeds this.</p>
        </div>
      </Section>

      <Section title="Notifications" icon={<Bell size={14} />} defaultOpen={false}>
        <Toggle checked={data.notificationsEnabled} onChange={setNotificationsEnabled} label="Enable all notifications" />
      </Section>

      <Section title="Data" icon={<Download size={14} />} defaultOpen={false}>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="secondary" onClick={handleExport}><Download size={14} /> Export</Button>
          <Button size="sm" variant="secondary" onClick={() => fileRef.current?.click()}><Upload size={14} /> Import</Button>
          <Button size="sm" variant="danger" onClick={() => setShowClearConfirm(true)}><Trash2 size={14} /> Clear All</Button>
          <input type="file" ref={fileRef} onChange={handleImport} className="hidden" accept=".json" />
        </div>
        {showClearConfirm && (
          <div className="mt-3 p-3 border border-danger/30 rounded-xl bg-danger/5 space-y-2">
            <p className="text-xs text-danger font-medium">This will wipe all data. Back up first!</p>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary" onClick={handleExport}><Download size={14} /> Backup</Button>
              <Button size="sm" variant="danger" onClick={handleClear}><Trash2 size={14} /> Confirm</Button>
              <Button size="sm" variant="ghost" onClick={() => setShowClearConfirm(false)}>Cancel</Button>
            </div>
          </div>
        )}
      </Section>

      <Section title="Edith AI Memory" icon={<Brain size={14} />} defaultOpen={false}>
        <p className="text-xs text-text-3 mb-2">Info Edith always remembers in conversations.</p>
        <textarea
          value={memDraft}
          onChange={(e) => setMemDraft(e.target.value)}
          rows={3}
          disabled={!isEditorMode}
          className={`w-full px-3 py-2 rounded-xl border border-border bg-surface-2 text-sm text-text-1 placeholder:text-text-3 focus:outline-none focus:border-accent resize-none ${!isEditorMode ? 'opacity-50' : ''}`}
          placeholder="e.g. I study best early morning. GST is my weakest..."
        />
        <Button size="sm" className="mt-2" disabled={!isEditorMode}
          onClick={() => { setEdithMemory(memDraft); toast.success(TOAST_MESSAGES.memoryUpdated); }}>
          Save Memory
        </Button>
      </Section>

      <Section title="Feedback" icon={<MessageCircle size={14} />} defaultOpen={false}>
        <a href={WHATSAPP_CONTACT_URL} target="_blank" rel="noopener noreferrer">
          <Button size="sm" variant="secondary"><MessageCircle size={14} /> Report Bug / Feedback</Button>
        </a>
      </Section>

      {/* Editor Mode Modal */}
      <EditorModeModal
        open={showEditorModal}
        onClose={() => setShowEditorModal(false)}
        onConfirm={() => {
          enableEditorMode();
          toast.success('Editor Mode enabled.');
        }}
      />
    </div>
  );
};
