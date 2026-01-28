<?php

namespace App\Filament\Resources\FeatureFlags\Schemas;

use Filament\Infolists\Components\IconEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class FeatureFlagInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('name'),
                TextEntry::make('component')
                    ->badge(),
                IconEntry::make('active')
                    ->boolean()
                    ->getStateUsing(fn ($record) => $record->isEnabled()),
                IconEntry::make('enabled')
                    ->boolean(),
                TextEntry::make('filter')
                    ->placeholder('-'),
                TextEntry::make('enabled_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('disabled_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
            ]);
    }
}
