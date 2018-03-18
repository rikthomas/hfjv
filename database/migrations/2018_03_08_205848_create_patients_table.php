<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('age')->nullable();
            $table->integer('weight')->nullable();
            $table->integer('height')->nullable();
            $table->integer('bmi')->nullable();
            $table->integer('asa')->nullable();
            $table->string('cvs')->nullable();
            $table->string('ht')->nullable();
            $table->integer('antiht')->nullable();
            $table->string('mi')->nullable();
            $table->string('stents')->nullable();
            $table->string('cva')->nullable();
            $table->string('lvef')->nullable();
            $table->string('as')->nullable();
            $table->string('valve')->nullable();
            $table->string('af')->nullable();
            $table->string('cardiomyopathy')->nullable();
            $table->string('othercvs')->nullable();
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
        Schema::dropIfExists('patients');
    }
}
