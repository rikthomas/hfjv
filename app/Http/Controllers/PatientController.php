<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Patient;
use JavaScript;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $patients = Patient::all();
        return view('home', compact('patients'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $new = Patient::create();
        return redirect ('/patient/' . $new->id);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        JavaScript::put([
            'patient' => Patient::find($id),
        ]);
        return view('form');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Patient $patient)
    {
        $patient->update(['age' => $request->age, 'weight' => $request->weight, 'height' => $request->height]);
        
        return redirect ('patient/' . $patient->id );

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function updateField(Request $request, $id)
    {
        $patient = Patient::findOrFail($id);
        $patient[$request->field] = $request->value;
        $patient->save();
    }

    public function deleteCVS($id)
    {
        $patient = Patient::findOrFail($id);
        $patient->ht = null;
        $patient->antiht = null;
        $patient->mi = null;
        $patient->stents = null;
        $patient->cva = null;
        $patient->lvef = null;
        $patient->as = null;
        $patient->valve = null;
        $patient->af = null;
        $patient->cardiomyopathy = null;
        $patient->othercvs = null;
        $patient->save();
    }

    public function deleteResp($id)
    {
        $patient = Patient::findOrFail($id);
        $patient->asthma = null;
        $patient->copd = null;
        $patient->bronchiectasis = null;
        $patient->steroids = null;
        $patient->icu = null;
        $patient->control = null;
        $patient->pft = null;
        $patient->fev1 = null;
        $patient->fvc = null;
        $patient->fevfvc = null;
        $patient->pefr = null;
        $patient->otherresp = null;
        $patient->save();
    }
}
