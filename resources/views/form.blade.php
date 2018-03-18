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
                        <div class="field is-grouped">
                            <p class="control is-expanded">
                                <form-yes-no label="Cardiovascular morbidity" name="cvs"></form-yes-no>
                            </p>
                            <p class="control is-expanded">
                                <form-yes-no label="Respiratory morbidity" name="resp"></form-yes-no>
                            </p>
                        </div>
                    </div>
                </article>
                <form-delete-cvs-modal v-if="modalVisible"></form-delete-cvs-modal>
                <article class="message is-danger" v-if="cvsVisible">
                    <div class="message-header">
                        <p>Cardiovascular Disease</p>
                    </div>
                    <div class="message-body">
                        <div class="field">
                            <form-cvs></form-cvs>
                        </div>
                    </div>
                </article>
                <form-delete-resp-modal v-if="respModalVisible"></form-delete-resp-modal>
                <article class="message is-warning" v-if="respVisible">
                    <div class="message-header">
                        <p>Respiratory Disease</p>
                    </div>
                    <div class="message-body">
                        <div class="field">
                            <form-resp></form-resp>
                        </div>
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
