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
            $table->string('resp')->nullable();
            $table->string('asthma')->nullable();
            $table->string('copd')->nullable();
            $table->string('bronchiectasis')->nullable();
            $table->string('steroids')->nullable();
            $table->string('icu')->nullable();
            $table->string('control')->nullable();
            $table->string('pft')->nullable();
            $table->integer('fev1')->nullable();
            $table->integer('fvc')->nullable();
            $table->integer('fevfvc')->nullable();
            $table->integer('pefr')->nullable();
            $table->string('otherresp')->nullable();
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
