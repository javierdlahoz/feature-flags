<?php

namespace App\Filament\Resources\FeatureFlags\Schemas;

use App\Enums\FeaturesEnum;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class FeatureFlagForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),
                Select::make('component')
                    ->options(FeaturesEnum::class)
                    ->required(),
                Toggle::make('enabled')
                    ->required(),
                TextInput::make('filter')
                    ->helperText('To use with x-filter header'),
                DateTimePicker::make('enabled_at')->nullable(),
                DateTimePicker::make('disabled_at')->nullable(),
            ]);
    }
}
