<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('feature_flags', static function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('component')->unique();
            $table->boolean('enabled');
            $table->string('filter')->nullable();
            $table->dateTime('enabled_at')->nullable();
            $table->dateTime('disabled_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('feature_flags');
    }
};
