'use client';

import { Report } from '@/app/types/types';
import { useFeatureFlag } from '@/app/context/FeatureFlagContext';

interface Props {
    report: Report;
}

export function ReportView({ report }: Props) {
    const isEditEnabled = useFeatureFlag('updateReport');
    const isCustomerViewEnabled = useFeatureFlag('reportCustomerView');

    return (
        <div>
            <div className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
                <div className="mb-5">
                    <div className="mb-2 block text-sm font-bold text-gray-700">
                        Title:
                        <div className="w-full px-3 py-2 leading-tight text-gray-400">{report.title}</div>
                    </div>
                </div>
                <div className="mb-5">
                    <div className="mb-2 block text-sm font-bold text-gray-700">
                        Content:
                        <div className="w-full px-3 py-2 leading-tight text-gray-400">{report.content}</div>
                    </div>
                </div>
                {isCustomerViewEnabled && (
                    <div className="mb-5">
                        <div className="mb-2 block text-sm font-bold text-gray-700">
                            Customer Name:
                            <div className="w-full px-3 py-2 leading-tight text-gray-400">{report.customer}</div>
                        </div>
                    </div>
                )}
                {isEditEnabled && (
                    <a href={'/reports/' + report.id + '/edit'} className="text-blue-500 hover:underline">
                        Edit Report
                    </a>
                )}
            </div>
        </div>
    );
}
