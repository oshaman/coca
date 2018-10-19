<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateScreensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('screens', function (Blueprint $table) {
            $table->increments('id');

            $table->string('title', 32)->nullable()->default(null);
            $table->string('slug', 32)->unique();
            $table->string('description')->nullable()->default(null);
            $table->text('content')->nullable()->default(null);
            $table->text('additionally')->nullable()->default(null);
            $table->text('headings')->nullable()->default(null);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('screens');
    }
}
