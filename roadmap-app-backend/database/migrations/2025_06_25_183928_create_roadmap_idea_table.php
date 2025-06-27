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
        Schema::create('add_ideas', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->string('added_by')->default('Admin');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
public function down(): void
{
    // This must match the actual table name: 'add_ideas'
    Schema::dropIfExists('add_ideas');
}
};
