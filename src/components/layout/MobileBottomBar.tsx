import React from 'react';
import { useAppStore } from '@/store/appStore';
import type { TabName } from '@/types';
import { BookOpen, Calendar, PieChart, MessageSquare, Settings } from 'lucide-react';

const bottomItems: { id: TabName; label: string; icon: React.ReactNode }[] = [
  { id: 'planner',     label: 'Planner',   icon: <Calendar size={20} /> },
  { id: 'tracker',     label: 'Tracker',   icon: <BookOpen size={20} /> },
  { id: 'performance', label: 'Metrics',   icon: <PieChart size={20} /> },
  { id: 'edith',       label: 'Edith',     icon: <MessageSquare size={20} /> },
  { id: 'settings',    label: 'Settings',  icon: <Settings size={20} /> },
];

/**
 * Mobile bottom bar — 5 flat equal icons with labels.
 * No floating FAB, no elevated center button.
 */
export const MobileBottomBar: React.FC = () => {
  const activeTab = useAppStore((s) => s.activeTab);
  const setActiveTab = useAppStore((s) => s.setActiveTab);

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-t border-border"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around px-1 py-1.5">
        {bottomItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              role="tab"
              aria-selected={isActive}
              aria-label={item.label}
              onClick={() => setActiveTab(item.id)}
              className={`
                flex flex-col items-center justify-center gap-0.5 py-1 px-3 rounded-xl
                transition-all duration-200 min-w-[52px]
                ${isActive
                  ? 'text-accent'
                  : 'text-text-3 active:text-text-2'
                }
              `}
            >
              {item.icon}
              <span className={`text-[9px] font-semibold ${isActive ? 'text-accent' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Safe area spacer for iOS */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
};
