<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExcursionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('excursions', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name')->nullable()->default(null);
            $table->string('phone')->nullable()->default(null);
            $table->string('email')->nullable()->default(null);
            $table->string('position')->nullable()->default(null);
            $table->unsignedTinyInteger('people')->nullable()->default(null);
            $table->string('institution')->nullable()->default(null);
            $table->string('file')->nullable()->default(null);
            $table->string('photo')->nullable()->default(null);
            $table->string('comment')->nullable()->default(null);
            $table->enum('status', [1,2,3,4])->default(1);
            $table->enum('interval', [1,2,3,4,5,6]);

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
        Schema::dropIfExists('excursions');
    }
}
