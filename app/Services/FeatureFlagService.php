<?php

declare(strict_types=1);

namespace App\Services;

use App\Enums\CacheTagsEnum;
use App\Http\Resource\FeatureFlagResource;
use App\Models\FeatureFlag;
use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Cache;

final readonly class FeatureFlagService implements FeatureFlagServiceInterface
{
    private const int CACHE_TTL_SECONDS = 86400; // 1 day

    public function get(?string $filter): array
    {
        $cacheKey = sprintf(
            '%s:%s',
            CacheTagsEnum::FeatureFlags->value,
            $filter ?? '*'
        );

        $flags = Cache::tags([CacheTagsEnum::FeatureFlags->value])->get($cacheKey);
        if ($flags === null) {
            $flags = $this->getFeatureFlags($filter);
            Cache::tags([CacheTagsEnum::FeatureFlags->value])
                ->put(
                    key: $cacheKey,
                    value: $flags,
                    ttl: $this->getCacheTTL(),
                );
        }

        return $flags;
    }

    private function getFeatureFlags(?string $filter): array
    {
        $context = ['filter' => $filter];

        return FeatureFlag::all()
            ->map(fn ($featureFlag) => new FeatureFlagResource($featureFlag, $context))
            ->toArray();
    }

    private function getCacheTtl(): \DateTimeInterface|int
    {
        /** @var CarbonImmutable|null $earlierDisabledAt */
        $earlierDisabledAt = FeatureFlag::whereNotNull('disabled_at')
            ->where('disabled_at', '>', now())
            ->where('enabled_at', '<', now())
            ->where('enabled', '=', true)
            ->orderBy('disabled_at', 'asc')
            ->value('disabled_at');

        return $earlierDisabledAt ?? self::CACHE_TTL_SECONDS;
    }
}
