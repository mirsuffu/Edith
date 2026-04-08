import React from 'react';
import { useAppStore } from '@/store/appStore';
import type { TabName } from '@/types';
import {
  BookOpen, Calendar, PieChart, MessageSquare, Settings,
} from 'lucide-react';

const navItems: { id: TabName; label: string; icon: React.ReactNode }[] = [
  { id: 'planner',     label: 'Schedule',    icon: <Calendar size={20} /> },
  { id: 'tracker',     label: 'Tracker',     icon: <BookOpen size={20} /> },
  { id: 'performance', label: 'Performance', icon: <PieChart size={20} /> },
  { id: 'edith',       label: 'Edith AI',    icon: <MessageSquare size={20} /> },
  { id: 'settings',    label: 'Settings',    icon: <Settings size={20} /> },
];

/**
 * Desktop side rail — thin vertical icon navigation, fixed to left.
 * Hidden on mobile. Labels appear on hover as tooltips.
 */
export const SideRail: React.FC = () => {
  const activeTab = useAppStore((s) => s.activeTab);
  const setActiveTab = useAppStore((s) => s.setActiveTab);

  return (
    <nav
      className="hidden md:flex flex-col items-center w-[60px] shrink-0 border-r border-border py-4 gap-1 bg-surface/50"
      style={{ zIndex: 5 }}
      aria-label="Main navigation"
    >
      {navItems.map((item) => {
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            role="tab"
            aria-selected={isActive}
            aria-label={item.label}
            title={item.label}
            onClick={() => setActiveTab(item.id)}
            className={`
              relative w-10 h-10 rounded-xl flex items-center justify-center
              transition-all duration-200
              ${isActive
                ? 'bg-accent/12 text-accent'
                : 'text-text-3 hover:text-text-1 hover:bg-surface-2'
              }
            `}
          >
            {item.icon}
            {/* Active dot */}
            {isActive && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[1px] w-[3px] h-5 rounded-r-full bg-accent" />
            )}
          </button>
        );
      })}
    </nav>
  );
};
