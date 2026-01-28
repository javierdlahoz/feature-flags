'use client';

import { Report } from '@/app/types/types';
import { useRouter } from 'next/navigation';
import { useFeatureFlag } from '@/app/context/FeatureFlagContext';

type Props = {
    report: Report;
};

export function ReportRow({ report }: Props) {
    const router = useRouter();
    const isViewReportEnabled = useFeatureFlag('viewReport');
    const isCustomerViewEnabled = useFeatureFlag('reportCustomerView');
    const handleClick = () => {
        if (!isViewReportEnabled) {
            return;
        }

        router.push(`/reports/${report.id}/view`);
    };

    return (
        <tr className={'border-b text-gray-900 hover:bg-gray-50'} onClick={handleClick}>
            <td className={'px-6 py-4 text-sm font-medium whitespace-nowrap'}>{report.id}</td>
            <td className={'px-6 py-4 text-sm font-medium whitespace-nowrap'}>{report.title}</td>
            {isCustomerViewEnabled && <td className={'px-6 py-4 text-sm whitespace-nowrap'}>{report.customer}</td>}
        </tr>
    );
}
