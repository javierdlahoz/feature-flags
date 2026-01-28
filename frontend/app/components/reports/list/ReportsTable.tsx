'use client';

import { Report } from '@/app/types/types';
import { ReportRow } from '@/app/components/reports/list/ReportRow';
import { useFeatureFlag } from '@/app/context/FeatureFlagContext';

type Props = {
    reports: Report[];
};

export function ReportsTable({ reports }: Props) {
    const isCustomerViewEnabled = useFeatureFlag('reportCustomerView');

    return (
        <table className={'w-full my-8'}>
            <thead>
                <tr className={'border-b bg-blue-100 font-extrabold text-gray-900'}>
                    <td className={'px-6 py-4 text-sm whitespace-nowrap'}>ID</td>
                    <td className={'px-6 py-4 text-sm whitespace-nowrap'}>Title</td>
                    {isCustomerViewEnabled && <td className={'px-6 py-4 text-sm whitespace-nowrap'}>Customer</td>}
                </tr>
            </thead>
            <tbody>
                {reports.map((report) => (
                    <ReportRow key={report.id} report={report} />
                ))}
            </tbody>
        </table>
    );
}
