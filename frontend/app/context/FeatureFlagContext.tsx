'use client';

import { createContext, useContext } from 'react';
import { FeatureFlags } from '@/app/types/types';

const FeatureContext = createContext<FeatureFlags | null>(null);

export function FeatureFlagsProvider({ features, children }: { features: FeatureFlags; children: React.ReactNode }) {
    return <FeatureContext.Provider value={features}>{children}</FeatureContext.Provider>;
}

export function useFeatureFlag(key: string): boolean {
    const features = useContext(FeatureContext);

    if (!features) {
        throw new Error('useFeature must be used within FeatureProvider');
    }

    // @ts-ignore
    return Boolean(features[key]);
}
