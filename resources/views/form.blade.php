@extends('layouts.app')
@section('content')
<div id='app'>
    <section class="section">
        <div class="columns">
            <div class="column is-half is-offset-one-quarter">
                <article class="message">
                    <div class="message-header">
                        <p>Weights and Measures</p>
                    </div>
                    <div class="message-body">
                        <div class="field is-grouped">
                            <form-field label="Age" type="number" placeholder="is just a number" name="age"></form-field>
                            <form-field label="Weight" type="number" placeholder="in kg" name="weight"></form-field>
                        </div>
                        <div class="field is-grouped">
                            <form-field label="Height" type="number" placeholder="in cm" name="height"></form-field>
                            <p class="control is-expanded">
                              <label class="label">BMI</label>
                              <input type="number" class="input" name="bmi" v-model="bmi" disabled>
                            </p>
                        </div>
                    </div>
                </article>
                <article class="message is-info">
                    <div class="message-header">
                        <p>Pre-Assessment</p>
                    </div>
                    <div class="message-body">
                        <div class="field">
                            <form-asa></form-asa>
                        </div>
                        <div class="field">
                            <form-yes-no label="Cardiovascular morbidity" name="cvs"></form-yes-no>
                        </div>
                    </div>
                </article>
                <form-delete-modal v-if="modalVisible"></form-delete-modal>
                <article class="message is-danger" v-if="cvsVisible">
                    <div class="message-header">
                        <p>Cardiovascular Disease</p>
                    </div>
                    <div class="message-body">
                        <div class="field">
                            <form-cvs></form-cvs>
                        </div>
                        <div><button class="button" @click="reload">Reload</button></div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</div>
@endsection

@push('scripts')
<script src="{{ asset('js/form.js') }}"></script>
@endpush
