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
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        @stack('styles')
    </head>
    <body>
        <div id="app">

            <section class="section">
                        <div class="container">
                            <div class="columns">                      
                                <div class="column is-2">
                                    <aside class="menu is-hidden-mobile">
                                      <p class="menu-label">
                                        Menu
                                    </p>
                                    <ul class="menu-list">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/patient/create">New Case</a></li>
                                    </ul>
                                    </aside>
                                 </div>
                                 @yield('content')
                            </div>
                        </div>
                    </section>


</div>
<!-- Scripts -->
        @include ('footer')
        <script src="{{ asset('js/app.js') }}"></script>
        @stack('scripts')
    </body>
</html>
