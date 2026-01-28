'use client';

import { BackToReportList } from '@/app/components/reports/common/BackToReportList';
import { REPORTS } from '@/app/data/reports';
import { ReportForm } from '@/app/components/reports/form/ReportForm';
import React from 'react';
import { ReportNotFoundAlert } from '@/app/components/reports/common/ReportNotFoundAlert';
import { useFeatureFlag } from '@/app/context/FeatureFlagContext';
import { DisabledFeatureAlert } from '@/app/components/reports/common/DisabledFeatureAlert';

interface Props {
    params: {
        id: number;
    };
}

export default function EditReportPage({ params }: Props) {
    const isEditEnabled = useFeatureFlag('updateReport');
    if (!isEditEnabled) {
        return (
            <DisabledFeatureAlert featureName={'Edit Report'} />
        )
    }

    // @ts-ignore
    const { id } = React.use(params);
    const index: number = id - 1;
    const report = REPORTS.at(index);

    if (!report) {
        return <ReportNotFoundAlert />;
    }

    return (
        <div>
            <h1>Edit Report {report?.id}</h1>
            <ReportForm report={report} />
            <BackToReportList />
        </div>
    );
}
