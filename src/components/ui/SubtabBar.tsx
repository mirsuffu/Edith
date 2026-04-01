import React from 'react';

interface SegmentedControlProps {
  views: { id: string; label: string }[];
  activeView: string;
  onViewChange: (id: string) => void;
}

/**
 * Minimal always-visible segmented control.
 * No auto-hide, no toggle pill, no dropdown.
 * Just a clean inline pill switcher.
 */
export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  views, activeView, onViewChange,
}) => (
  <div className="flex bg-surface-2/80 p-0.5 rounded-xl shrink-0 mb-3">
    {views.map((v) => (
      <button
        key={v.id}
        onClick={() => onViewChange(v.id)}
        className={`
          flex-1 py-1.5 text-[11px] font-semibold rounded-lg transition-all duration-200
          ${activeView === v.id
            ? 'bg-accent/12 text-accent shadow-sm'
            : 'text-text-3 hover:text-text-2'
          }
        `}
      >
        {v.label}
      </button>
    ))}
  </div>
);
