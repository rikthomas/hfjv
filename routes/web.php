<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', 'PatientController@index');

Route::resource('patient', 'PatientController');

Route::put('/patient/update/{id}', 'PatientController@updateField');

Route::put('/patient/delcvs/{id}', 'PatientController@deleteCVS');

Route::put('/patient/delresp/{id}', 'PatientController@deleteResp');

Route::put('patient/update-date/{id}', 'PatientController@updateDate');

Route::get('/datatables/cases', 'PatientController@datatable');

Route::get('/export', 'PatientController@export');
