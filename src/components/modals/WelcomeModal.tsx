import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { useAppStore } from '@/store/appStore';
import { useStats } from '@/hooks/useStats';

export const WelcomeModal: React.FC = () => {
  const show = useAppStore((s) => s.showWelcomeModal);
  const setShow = useAppStore((s) => s.setShowWelcomeModal);
  const setActiveTab = useAppStore((s) => s.setActiveTab);
  const userName = useAppStore((s) => s.userProfile?.name || 'Soldier');
  const stats = useStats();

  const handleLetsGo = () => {
    setShow(false);
    setActiveTab('tracker');
  };

  return (
    <Modal open={show} onClose={() => setShow(false)} maxWidth="max-w-md">
      <div className="p-8 text-center space-y-6">
        <img src="/logo.png" alt="E.D.I.T.H" className="w-20 h-20 mx-auto rounded-2xl" />
        <h2 className="font-display text-2xl font-bold text-text-1">
          Welcome back, {userName} 🔥
        </h2>
        <p className="text-text-2 text-sm leading-relaxed">
          You have <span className="font-mono font-bold text-accent">{stats.daysToLectures}</span> days
          until your lecture deadline.<br />
          No pressure... just your entire career on the line 😬
        </p>
        <div className="flex gap-3 justify-center pt-2">
          <Button onClick={handleLetsGo} size="lg">
            Let's get it →
          </Button>
          <Button variant="ghost" onClick={() => setShow(false)} size="lg">
            Not now
          </Button>
        </div>
      </div>
    </Modal>
  );
};
