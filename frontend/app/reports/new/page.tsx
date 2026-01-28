'use client';

import { Report } from '@/app/types/types';
import { ReportForm } from '@/app/components/reports/form/ReportForm';
import { BackToReportList } from '@/app/components/reports/common/BackToReportList';
import { useFeatureFlag } from '@/app/context/FeatureFlagContext';
import { DisabledFeatureAlert } from '@/app/components/reports/common/DisabledFeatureAlert';

export default function SubmitReportPage() {
    const isCreateReportEnabled = useFeatureFlag('createReport');

    if (!isCreateReportEnabled) {
        return (
            <DisabledFeatureAlert featureName={'Create Report'} />
        );
    }

    const report: Report = {
        title: '',
        customer: '',
        content: '',
        id: 0,
     };

    return (
        <div>
            <h1>Submit a new Report</h1>
            <ReportForm report={report} />
            <BackToReportList />
        </div>
    );
}
