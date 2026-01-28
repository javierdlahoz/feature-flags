<?php

namespace App\Providers;

use App\Models\FeatureFlag;
use App\Observers\FeatureFlagObserver;
use App\Services\FeatureFlagService;
use App\Services\FeatureFlagServiceInterface;
use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configureDefaults();
    }

    protected function configureDefaults(): void
    {
        Date::use(CarbonImmutable::class);

        DB::prohibitDestructiveCommands(
            app()->isProduction(),
        );

        Password::defaults(fn (): ?Password => app()->isProduction()
            ? Password::min(12)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
                ->uncompromised()
            : null
        );

        FeatureFlag::observe(FeatureFlagObserver::class);

        $this->app->bind(
            abstract: FeatureFlagServiceInterface::class,
            concrete: FeatureFlagService::class
        );
    }
}
