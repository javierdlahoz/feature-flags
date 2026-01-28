<?php

use App\Http\Controllers\FeatureFlagController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', static function () {
    return redirect('/feature-flags');
})->name('home');


Route::get(
    uri: '/api/feature-flags',
    action: [FeatureFlagController::class, 'index']
);
