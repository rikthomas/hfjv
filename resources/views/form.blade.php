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
                        {{-- <form method='POST' action='/patient/{{ $patient->id }}'>
                        {{ method_field('PATCH') }}
                        {{ csrf_field() }}
 --}}                           <div class="field is-grouped">
                            <p class="control is-expanded">
                              <label class="label">Age</label>
                                <input type="number" class="input" placeholder="is only a number" name="age" v-model="age" @blur="updateField">
                            </p>
                            <p class="control is-expanded">
                              <label class="label">Weight</label>
                                <input type="number" class="input" placeholder="in kg" name="weight" v-model="weight">
                            </p>
                            <p class="control is-expanded">
                              <label class="label">Height</label>
                                <input type="number" class="input" placeholder="in cm" name="height" v-model="height">
                            </p>
                            </div>
                            <button type='submit' class='button is-warning'>Patch it Baby!</button>
                        </form>
                    </div>
                </article>
            </div>
        </div>
    </section>
</div>
@endsection

@push('scripts')
<script>

new Vue({
    el: '#app',
    data: {
        age: '',
        weight: '',
        height: '',
        id: '',
    },
    created() {
        this.id = patient.id;
        this.age = patient.age;
        this.weight = patient.weight;
        this.height = patient.height;
    },
    methods: {
        updateField() {
            let newValue = (Number(this.age));
            axios.put('/patient/update/' + this.id, {
                age: newValue,
            }).then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });         
        },
    }
});

</script>
@endpush
