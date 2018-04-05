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
            $table->string('anaesthetist')->nullable();
            $table->string('tumoursite')->nullable();
            $table->string('procedure')->nullable();
            $table->string('position')->nullable();
            $table->integer('proceed')->nullable();
            $table->text('noproceed')->nullable();
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
            $table->integer('charlson')->nullable();
            $table->float('tenyear', 3, 1)->nullable();
            $table->integer('ecog')->nullable();
            $table->string('ppcardiac')->nullable();
            $table->string('ppresp')->nullable();
            $table->string('ppecg')->nullable();
            $table->string('ppbp')->nullable();
            $table->string('pppulse')->nullable();
            $table->string('pphb')->nullable();
            $table->string('ppwbc')->nullable();
            $table->string('ppurea')->nullable();
            $table->string('ppna')->nullable();
            $table->string('ppk')->nullable();
            $table->string('ppgcs')->nullable();
            $table->string('ppseverity')->nullable();
            $table->string('ppprocedures')->nullable();
            $table->string('ppbloodloss')->nullable();
            $table->string('ppsoiling')->nullable();
            $table->string('ppmalignancy')->nullable();
            $table->string('ppurgency')->nullable();
            $table->integer('ppphysiology')->nullable();
            $table->integer('ppopscore')->nullable();
            $table->float('ppmorbidity', 3, 1)->nullable();
            $table->float('ppmortality', 3, 1)->nullable();
            $table->integer('tiva')->nullable();
            $table->integer('artline')->nullable();
            $table->integer('hfjvuse')->nullable();
            $table->integer('frequency')->nullable();
            $table->integer('drivingpressuremin')->nullable();
            $table->integer('drivingpressuremax')->nullable();
            $table->integer('fio2')->nullable();
            $table->integer('meanpressuremin')->nullable();
            $table->integer('meanpressuremax')->nullable();
            $table->integer('etco2')->nullable();
            $table->integer('minco2')->nullable();
            $table->integer('maxco2')->nullable();
            $table->integer('desat')->nullable();
            $table->integer('lowestdesat')->nullable();
            $table->integer('ippv')->nullable();
            $table->integer('tolerance')->nullable();
            $table->integer('satisfaction')->nullable();
            $table->integer('extubated')->nullable();
            $table->string('destination')->nullable();
            $table->integer('disabled')->default('0');
            $table->string('los')->nullable();
            $table->string('discharge')->nullable();
            $table->integer('unplannedicu')->nullable();
            $table->integer('complication')->nullable();
            $table->integer('haemothorax')->nullable();
            $table->integer('ptx')->nullable();
            $table->integer('cvsunstable')->nullable();
            $table->string('othercomplication')->nullable();
            $table->integer('fucomplete')->nullable();
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
