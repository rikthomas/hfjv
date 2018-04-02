<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>HFJV Data Collection Tool</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">
        @stack('styles')
    </head>
    <body>
        <div id="app">
            <nav class="navbar has-shadow">
                <div class="container">
                    <div class="navbar-brand">
                        <a href="{{ url('/') }}" class="navbar-item">{{ config('app.name', 'Laravel') }}</a>
                        <a class="navbar-item" href="/patient/create">New Case</a>           
                </div>
            </nav>
        @yield('content')
    </div>
<!-- Scripts -->
        @include ('footer')
        <script src="{{ mix('js/app.js') }}"></script>
        @stack('scripts')
    </body>
</html>
