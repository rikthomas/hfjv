@extends('layouts.app')
@section('content')
            <div class="column is-8">
                <article class="message">
                    <div class="message-header">
                        <p>Cases</p>
                    </div>
                    <div class="message-body">
                        @foreach ($patients as $patient)
                        <div>Case {{ $patient->id }}</div>
                        @endforeach
                    </div>
                </article>
            </div>
@endsection
