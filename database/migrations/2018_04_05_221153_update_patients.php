<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdatePatients extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('patients', function (Blueprint $table) {
            $table->float('drivingpressuremin', 3, 1)->nullable()->change();
            $table->float('drivingpressuremax', 3, 1)->nullable()->change();
            $table->float('minco2', 3, 1)->nullable()->change();
            $table->float('maxco2', 3, 1)->nullable()->change();
            $table->text('comments')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
