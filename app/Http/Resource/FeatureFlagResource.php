<?php

declare(strict_types=1);

namespace App\Http\Resource;

use App\Models\FeatureFlag;
use Illuminate\Http\Resources\Json\JsonResource;

final class FeatureFlagResource extends JsonResource
{
    public function __construct(
        FeatureFlag $resource,
        private readonly array $context = [],
    ) {
        parent::__construct($resource);
    }

    public function toArray($request): array
    {
        $filter = $this->context['filter'] ?? null;

        return [
            'component' => $this->resource->component,
            'enabled' => $this->resource->isEnabled($filter),
            'name' => $this->resource->name,
        ];
    }
}
