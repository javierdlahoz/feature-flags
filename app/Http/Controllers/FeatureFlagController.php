<?php

namespace App\Http\Controllers;

use App\Services\FeatureFlagServiceInterface;
use Illuminate\Http\JsonResponse;

final class FeatureFlagController extends Controller
{
    private const string X_FILTER_HEADER = 'x-filter';

    public function __construct(
        private readonly FeatureFlagServiceInterface $featureFlagService,
    ) {}

    public function index(): JsonResponse
    {
        $filter = request()->header(self::X_FILTER_HEADER);
        $flags = $this->featureFlagService->get($filter);

        return response()->json($flags);
    }
}
