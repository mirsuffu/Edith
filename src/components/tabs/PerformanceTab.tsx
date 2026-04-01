import React, { useState } from 'react';
import { TestsTab } from './TestsTab';
import { MetricsTab } from './MetricsTab';
import { LogsTab } from './LogsTab';
import { SegmentedControl } from '@/components/ui/SubtabBar';

type PerformanceView = 'metrics' | 'tests' | 'logs';

export const PerformanceTab: React.FC = () => {
  const [activeView, setActiveView] = useState<PerformanceView>('metrics');

  return (
    <div className="h-full flex flex-col">
      <SegmentedControl
        views={[
          { id: 'metrics', label: 'Overview' },
          { id: 'tests', label: 'Tests' },
          { id: 'logs', label: 'Logs' },
        ]}
        activeView={activeView}
        onViewChange={(id) => setActiveView(id as PerformanceView)}
      />
      <div className="flex-1 min-h-0">
        {activeView === 'metrics' && <MetricsTab />}
        {activeView === 'tests' && <TestsTab />}
        {activeView === 'logs' && <LogsTab />}
      </div>
    </div>
  );
};
