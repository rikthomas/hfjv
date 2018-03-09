@extends('layouts.app')

@section('content')
    <section class="section">
        <div class="columns">
            <div class="column is-half is-offset-one-quarter">
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
                <a href='/patient/create' class='button is-primary'>Add Case</a>
            </div>
        </div>
    </section>
@endsection
