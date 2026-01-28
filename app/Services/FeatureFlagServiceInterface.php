<?php

declare(strict_types=1);

namespace App\Services;

use App\Http\Resource\FeatureFlagResource;

interface FeatureFlagServiceInterface
{
    /**
     * @return FeatureFlagResource[]
     */
    public function get(?string $filter): array;
}
