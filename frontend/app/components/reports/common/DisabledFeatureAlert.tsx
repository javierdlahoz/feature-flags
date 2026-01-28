'use client';

export function DisabledFeatureAlert({ featureName }: { featureName: string }) {
    return (
        <div className="mb-4 rounded-lg bg-yellow-100 p-4 text-sm text-yellow-700" role="alert">
            <div className='font-extrabold'>Feature Disabled</div>
            <span className="font-medium">Feature Disabled:</span> The {featureName} feature is currently disabled.
        </div>
    );
}
