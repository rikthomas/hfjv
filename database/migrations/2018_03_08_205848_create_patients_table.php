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
            $table->integer('cvs')->nullable();
            $table->integer('ht')->nullable();
            $table->integer('antiht')->nullable();
            $table->integer('mi')->nullable();
            $table->integer('stents')->nullable();
            $table->integer('cva')->nullable();
            $table->string('lvef')->nullable();
            $table->integer('as')->nullable();
            $table->string('valve')->nullable();
            $table->integer('af')->nullable();
            $table->integer('cardiomyopathy')->nullable();
            $table->string('othercvs')->nullable();
            $table->integer('resp')->nullable();
            $table->integer('asthma')->nullable();
            $table->integer('copd')->nullable();
            $table->integer('bronchiectasis')->nullable();
            $table->integer('steroids')->nullable();
            $table->integer('icu')->nullable();
            $table->integer('control')->nullable();
            $table->integer('pft')->nullable();
            $table->integer('fev1')->nullable();
            $table->integer('fvc')->nullable();
            $table->integer('fevfvc')->nullable();
            $table->integer('pefr')->nullable();
            $table->string('otherresp')->nullable();
            $table->integer('aids')->nullable();
            $table->integer('tumour')->nullable();
            $table->integer('liver')->nullable();
            $table->integer('ccf')->nullable();
            $table->integer('pvd')->nullable();
            $table->integer('cvd')->nullable();
            $table->integer('dementia')->nullable();
            $table->integer('tissue')->nullable();
            $table->integer('pud')->nullable();
            $table->integer('pulmonary')->nullable();
            $table->integer('renal')->nullable();
            $table->integer('hemiplegia')->nullable();
            $table->integer('diabetes')->nullable();
            $table->integer('leukaemia')->nullable();
            $table->integer('lymphoma')->nullable();
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
