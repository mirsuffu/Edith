import React, { useState } from 'react';
import { LecturesTab } from './LecturesTab';
import { RevisionsTab } from './RevisionsTab';
import { SyllabusTab } from './SyllabusTab';
import { SegmentedControl } from '@/components/ui/SubtabBar';

type TrackerView = 'progress' | 'syllabus';

export const TrackerTab: React.FC = () => {
  const [activeView, setActiveView] = useState<TrackerView>('progress');

  return (
    <div className="h-full flex flex-col">
      <SegmentedControl
        views={[
          { id: 'progress', label: 'Progress' },
          { id: 'syllabus', label: 'Syllabus' },
        ]}
        activeView={activeView}
        onViewChange={(id) => setActiveView(id as TrackerView)}
      />
      <div className="flex-1 min-h-0">
        {activeView === 'progress' && (
          <div className="h-full overflow-y-auto no-scrollbar pb-24 md:pb-4 tab-content-enter space-y-4">
            {/* Lectures section */}
            <div>
              <h3 className="text-center text-[10px] font-bold uppercase tracking-wider text-text-3 py-1.5 mb-3 bg-surface-2/40 rounded-lg">Lectures</h3>
              <LecturesTab />
            </div>
            {/* Gradient separator */}
            <div className="gradient-divider my-4" />
            {/* Revisions section below */}
            <div>
              <h3 className="text-center text-[10px] font-bold uppercase tracking-wider text-text-3 py-1.5 mb-3 bg-surface-2/40 rounded-lg">Revisions</h3>
              <RevisionsTab />
            </div>
          </div>
        )}
        {activeView === 'syllabus' && <SyllabusTab />}
      </div>
    </div>
  );
};
