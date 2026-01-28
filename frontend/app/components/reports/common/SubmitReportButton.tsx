'use client';

import { useFeatureFlag } from '@/app/context/FeatureFlagContext';

export function SubmitReportButton() {
    const isCreateReportEnabled = useFeatureFlag('createReport');

    if (!isCreateReportEnabled) {
        return null;
    }

    return (
        <div className="mt-4">
            <a href="/reports/new" className="text-blue-500 hover:underline">
                Submit a new Report
            </a>
        </div>
    );
}
