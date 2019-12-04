<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Patient;
use App\DataDump;
use JavaScript;
use DataTables;
use Carbon\Carbon;
use Maatwebsite\Excel\Facades\Excel;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $patient = Patient::find($id);
        if (!$patient->created_at->isToday()) {$patient->disabled = 1;}
        $patient->date = $patient->created_at->format('d/m/Y');
        JavaScript::put([
            'patient' => $patient,
        ]);
        return view('form');

    }

    public function updateField(Request $request, $id)
    {
        $patient = Patient::findOrFail($id);
        $patient[$request->field] = $request->value;
        $patient->save();
    }

    public function updateDate(Request $request, $id)
    {
        $patient = Patient::findOrFail($id);
        $patient->created_at = Carbon::parse($request->date)->format('Y-m-d H:i:s');
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

    public function datatable() {
        $data = Patient::select('id', 'anaesthetist', 'created_at', 'fucomplete')->get();
        $cases = [];
        foreach ($data as $case) {
            array_push($cases, array('id'=>$case->id, 'anaesthetist'=>$case->anaesthetist, 'created_at'=>$case->created_at->format('d/m/Y'), 'fucomplete'=>$case->fucomplete));
        }
        return Datatables::of($cases)->make(true);   
    }

    public function export()
    {
        return Excel::download(new DataDump(), date('Y-m-d') . '_HFJV_DataDump.xlsx');
    }
}
