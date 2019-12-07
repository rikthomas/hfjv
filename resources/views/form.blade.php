@extends('layouts.app')

@push('styles')
<link rel="stylesheet" href="/css/font-awesome.min.css" />
@endpush

@section('content')
    <form-change-date-modal></form-change-date-modal>
    <section class="section">   
        <div class="columns">  
            <div class="column is-three-fifths is-offset-one-fifth">
                <div class="field">
                    <a class="button is-info" v-show="disabled" @click="unlock"><i class="fa fa-lock">&nbsp</i>Unlock Form</a>
                </div>
                <article class="message is-success">
                    <div class="message-header">
                        <p>Case Details: @{{ date }}</p><a class="button is-success is-inverted is-small" v-show="!disabled" @click="changeDate">Change Date</a>
                    </div>
                    <div class="message-body">
                        <div class="field is-grouped">
                            <form-field label="Anaesthetist" type="text" placeholder="who are you!" name="anaesthetist"></form-field>
                            <form-select label="Tumour site" name="tumoursite" :data="tumoursite" :function="dummy"></form-select>
                        </div>
                        <div class="field is-grouped">
                            <p class="control is-expanded">
                                <form-select label="IR Procedure Type" name="procedure" :data="procedure" :function="dummy"></form-select>
                            </p>
                            <p class="control is-expanded">
                                <form-select label="Patient Position" name="position" :data="position" :function="dummy"></form-select>
                            </p>
                        </div>
                        <div class="field is-grouped">
                            <form-check-yes label="Appropriate for HFJV?" name="proceed"></form-check-yes>
                            <form-check-yes label="Epic Import" name="epic"></form-check-yes>
                        </div>
                        <div class="field" v-show="!hfjvCase">
                            <form-textarea label="Rationale" placeholder="please state reasons why patient not suitable and what anaesthetic techique was used instead...." name="noproceed"></form-textarea>
                        </div>
                    </div>
                </article>
                <div id="main-form" v-show="hfjvCase">
                    <article class="message">
                        <div class="message-header">
                            <p>Weights and Measures</p>
                        </div>
                        <div class="message-body">
                            <div class="field is-grouped">
                                <p class="control">
                                    <form-select label="Sex" name="sex" :data="sex" :function="dummy"></form-select>
                                </p>
                                <p class="control">
                                    <form-field label="Age" type="number" placeholder="is just a number" name="age"></form-field>
                                </p>
                            </div>
                            <div class="field is-grouped">
                                <form-field label="Weight" type="number" placeholder="in kg" name="weight"></form-field>
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
                                    <form-check-yes label="Cardiovascular morbidity" name="cvs"></form-check-yes>
                                    <form-check-yes label="Respiratory morbidity" name="resp"></form-check-yes>
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
                    <article class="message is-primary">
                        <div class="message-header">
                            <p>Charlson Comorbidity Index</p>
                        </div>
                        <div class="message-body">
                            <div class="field">
                                <form-charlson></form-charlson>
                            </div>
                        </div>
                    </article>
                        <form-ecog></form-ecog>
                        <form-ppossum></form-ppossum>
                        <form-anaesthetic></form-anaesthetic>
                        <form-postop></form-postop>
                </div>
            </div>
        </div>
    </section>
@endsection

@push('scripts')
<script src="{{ mix('js/form.js') }}"></script>
@endpush
