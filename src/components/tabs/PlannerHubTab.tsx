import React, { useState } from 'react';
import { PlannerTab } from './PlannerTab';
import { ScheduleTab } from './ScheduleTab';
import { RemindersTab } from './RemindersTab';
import { SegmentedControl } from '@/components/ui/SubtabBar';

type PlannerView = 'planner' | 'schedule' | 'reminders';

export const PlannerHubTab: React.FC = () => {
  const [activeView, setActiveView] = useState<PlannerView>('planner');

  return (
    <div className="h-full flex flex-col">
      <SegmentedControl
        views={[
          { id: 'planner', label: 'Planner' },
          { id: 'schedule', label: 'Schedule' },
          { id: 'reminders', label: 'Reminders' },
        ]}
        activeView={activeView}
        onViewChange={(id) => setActiveView(id as PlannerView)}
      />
      <div className="flex-1 min-h-0">
        {activeView === 'planner' && <PlannerTab />}
        {activeView === 'schedule' && <ScheduleTab />}
        {activeView === 'reminders' && <RemindersTab />}
      </div>
    </div>
  );
};
