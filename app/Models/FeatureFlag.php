<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\FeaturesEnum;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class FeatureFlag extends Model
{
    /** @use HasFactory<\Database\Factories\FeatureFlagFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'component',
        'enabled',
        'filter',
        'enabled_at',
        'disabled_at',
    ];

    protected $visible = [
        'name',
        'component',
        'enabled',
        'enabled_at',
        'disabled_at',
        'filter',
    ];

    protected function casts(): array
    {
        return [
            'enabled' => 'boolean',
            'component' => FeaturesEnum::class,
            'enabled_at' => 'datetime',
            'disabled_at' => 'datetime',
        ];
    }

    public function isEnabled(?string $filter = null): bool
    {
        return $this->enabled &&
            $this->isEnabledNow()
            && $this->isEnabledByFilter($filter);
    }

    protected function isEnabledNow(): bool
    {
        if ($this->disabled_at && $this->disabled_at < Carbon::now()) {
            return false;
        }

        if ($this->enabled_at && $this->enabled_at >= Carbon::now()) {
            return false;
        }

        return true;
    }

    protected function isEnabledByFilter(?string $filter): bool
    {
        return ! $this->filter || $this->filter === $filter;
    }
}
