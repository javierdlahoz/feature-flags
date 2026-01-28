'use client';

import { BackToReportList } from '@/app/components/reports/common/BackToReportList';
import { REPORTS } from '@/app/data/reports';
import React from 'react';
import { ReportView } from '@/app/components/reports/view/ReportView';
import { useFeatureFlag } from '@/app/context/FeatureFlagContext';
import { DisabledFeatureAlert } from '@/app/components/reports/common/DisabledFeatureAlert';
import { ReportNotFoundAlert } from '@/app/components/reports/common/ReportNotFoundAlert';

interface Props {
    params: {
        id: number;
    };
}

export default function ViewReportPage({ params }: Props) {
    // @ts-ignore
    const { id } = React.use(params);
    const index = id - 1;
    const report = REPORTS.at(index);
    const isViewReportEnabled = useFeatureFlag('viewReport');

    if (!isViewReportEnabled) {
        return (
            <DisabledFeatureAlert featureName={'View Report'} />
        );
    }

    if (!report) {
        return (
            <ReportNotFoundAlert />
        );
    }

    return (
        <div>
            <h1>View Report {report.id}</h1>
            <ReportView report={report} />
            <BackToReportList />
        </div>
    );
}
