'use client';

import { useFeatureFlag } from '@/app/context/FeatureFlagContext';

export function BackToReportList() {
    const isBackToReportListEnabled = useFeatureFlag('backToReportListView');

    if (!isBackToReportListEnabled) {
        return null;
    }

    return (
        <div className="mt-4">
            <a href="/reports" className="text-blue-500 hover:underline">
                Back to Report List
            </a>
        </div>
    );
}
