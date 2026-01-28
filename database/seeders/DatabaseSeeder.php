<?php

namespace Database\Seeders;

use App\Enums\FeaturesEnum;
use App\Models\FeatureFlag;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

final class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'password' => 'admin',
        ]);

        FeatureFlag::factory()->create([
            'name' => 'Create Report View',
            'component' => FeaturesEnum::CreateReport->value,
        ]);

        FeatureFlag::factory()->create([
            'name' => 'View Report',
            'component' => FeaturesEnum::ViewReport->value,
        ]);

        FeatureFlag::factory()->create([
            'name' => 'Update Report',
            'component' => FeaturesEnum::UpdateReport->value,
            'filter' => 'updateme',
        ]);

        FeatureFlag::factory()->create([
            'name' => 'View Customer Details',
            'component' => FeaturesEnum::ReportCustomerView->value,
            'enabled_at' => Carbon::now(),
            'disabled_at' => Carbon::tomorrow(),
        ]);

        FeatureFlag::factory()->create([
            'name' => 'Back to Report List View',
            'component' => FeaturesEnum::BackToReportListView->value,
        ]);
    }
}
