@extends('layouts.app')
@section('content')
    <section class="section">
        <div class="columns">
            <div class="column is-half is-offset-one-quarter">
                <article class="message">
                    <div class="message-header">
                        <p>Test Demo</p>
                    </div>
                    <div class="message-body">
                        <form method='POST' action='/patient/{{ $patient->id }}'>
                        {{ method_field('PATCH') }}
                        {{ csrf_field() }}
                           <div class="field is-grouped">
                            <p class="control is-expanded">
                              <label class="label">Age</label>
                                <input type="number" placeholder="is only a number" name="age" value={{ $patient->age }}>
                            </p>
                            <p class="control is-expanded">
                              <label class="label">Weight</label>
                                <input type="number" placeholder="in kg" name="weight" value={{ $patient->weight }}>
                            </p>
                            <p class="control is-expanded">
                              <label class="label">Height</label>
                                <input type="number" placeholder="in cm" name="height" value={{ $patient->height }}>
                            </p>
                            </div>
                            <button type='submit' class='button is-warning'>Patch it Baby!</button>
                        </form>
                    </div>
                </article>
            </div>
        </div>
    </section>
@endsection
