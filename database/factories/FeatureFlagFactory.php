<?php

namespace Database\Factories;

use App\Enums\FeaturesEnum;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;
use Random\RandomException;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FeatureFlag>
 */
class FeatureFlagFactory extends Factory
{
    /**
     * @throws RandomException
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'component' => FeaturesEnum::CreateReport->value,
            'filter' => '',
            'enabled' => true,
            'enabled_at' => null,
            'disabled_at' => null,
        ];
    }
}
