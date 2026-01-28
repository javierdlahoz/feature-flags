'use client';

import React, { useState } from 'react';
import { Report } from '@/app/types/types';
import { useFeatureFlag } from '@/app/context/FeatureFlagContext';

interface Props {
    report?: Report;
}

export function ReportForm({ report }: Props) {
    const [title, setTitle] = useState(report?.title);
    const [content, setContent] = useState(report?.content);
    const [customer, setCustomer] = useState(report?.customer);
    const [isSuccess, setIsSuccess] = useState(false);
    const isCustomerViewEnabled = useFeatureFlag('reportCustomerView');

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        setIsSuccess(true);
    };

    return (
        <div>
            {isSuccess && (
                <div className="relative rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700" role="alert">
                    <p className="text-green-950">Report submitted successfully!</p>
                </div>
            )}
            <form onSubmit={handleSubmit} className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
                <div className="mb-5">
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                        Title:
                        <input
                            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="mb-5">
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                        Content:
                        <textarea
                            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </label>
                </div>
                {isCustomerViewEnabled && (
                    <div className="mb-5">
                        <label className="mb-2 block text-sm font-bold text-gray-700">
                            Customer Name:
                            <input
                                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                                type="text"
                                value={customer}
                                onChange={(e) => setCustomer(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                )}
                <button
                    type="submit"
                    className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
