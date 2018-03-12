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

//Route::get('/patient/data/{id}', 'PatientController@getData');

Route::put('/patient/update/{id}', 'PatientController@updateField');
