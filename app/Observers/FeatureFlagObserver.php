<?php

declare(strict_types=1);

namespace App\Observers;

use App\Enums\CacheTagsEnum;
use App\Models\FeatureFlag;
use Illuminate\Support\Facades\Cache;

final readonly class FeatureFlagObserver
{
    public function updated(FeatureFlag $event): void
    {
        $this->flushCache();
    }

    public function deleted(FeatureFlag $event): void
    {
        $this->flushCache();
    }

    public function created(FeatureFlag $event): void
    {
        $this->flushCache();
    }

    private function flushCache(): void
    {
        Cache::tags([CacheTagsEnum::FeatureFlags->value])->flush();
    }
}
