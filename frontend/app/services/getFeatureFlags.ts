import 'server-only';
import { FeatureFlags } from '@/app/types/types';

export async function getFeatureFlags(): Promise<FeatureFlags> {
    const baseUrl = process.env.API_BASE_URL || 'http://app:8000/api';
    const revalidateTime = Number(process.env.NEXT_REVALIDATE_TIME || 30);
    const xFilter = process.env.X_FILTER_HEADER || '';

    console.log(baseUrl);

    const res = await fetch(`${baseUrl}/feature-flags`, {
        headers: {
            'x-filter': xFilter,
        },
        next: {
            revalidate: revalidateTime,
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch feature flags');
    }

    const data = await res.json();
    const featureFlags: FeatureFlags = {};

    for (const flag of data) {
        featureFlags[flag.component as keyof FeatureFlags] = flag.enabled;
    }

    return featureFlags;
}
