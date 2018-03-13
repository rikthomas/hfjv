@extends('layouts.app')
@section('content')
<div id='app'>
    <section class="section">
        <div class="columns">
            <div class="column is-half is-offset-one-quarter">
                <article class="message">
                    <div class="message-header">
                        <p>Test Demo</p>
                    </div>
                    <div class="message-body">
                        <div class="field is-grouped">
                            <form-field label="Age" type="number" placeholder="is just a number" name="age"></form-field>
                            <form-field label="Weight" type="number" placeholder="in kg" name="weight"></form-field>
                            <form-field label="Height" type="number" placeholder="in cm" name="height"></form-field>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</div>
@endsection

@push('scripts')
<script src="{{ asset('js/home_scripts.js') }}"></script>
@endpush
