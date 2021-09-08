<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <!-- Required meta tags  -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>ADM ::  Login</title>
    <link rel="icon" type="image/png" href="assets/img/favicon.png" />


    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700" rel="stylesheet" />
    {{-- <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script> --}}
    
    <!--Core CSS -->
    <link rel="stylesheet" href="assets/css/app.css" />
    <link rel="stylesheet" href="assets/css/main.css" />

    <!--Mapbox styles-->
</head>

<body>
    <div class="app-wrapper">

        <!--Full pageloader-->
        <!-- Pageloader -->
        <div class="pageloader is-full"></div>
        {{-- <div class="infraloader is-full is-active"></div> --}}
        <div class="auth-wrapper">
            <!--Page body-->

            <div class="modern-login">

                <div class="underlay h-hidden-mobile h-hidden-tablet-p"></div>

                <div class="columns is-gapless is-vcentered">
                    <div class="column is-relative is-8 h-hidden-mobile h-hidden-tablet-p">
                        <div class="hero is-fullheight is-image">
                            <div class="hero-body">
                                <div class="container">
                                    <div class="columns">
                                        <div class="column">
                                            <img class="hero-image" src="assets/img/illustrations/login/station.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-4 is-relative">
                        <a class="top-logo" href="/">
                            <img class="light-image" src="assets/img/logos/logo/logo.svg" alt="">
                            <img class="dark-image" src="assets/img/logos/logo/logo-light.svg" alt="">
                        </a>
                        <label class="dark-mode ml-auto">
                            <input type="checkbox" checked>
                            <span></span>
                        </label>
                        <div class="is-form">
                            <div class="hero-body">
                                <div class="form-text">
                                    <h2>{{ __('Sign In') }}</h2>
                                    <p>Welcome back to your account.</p>
                                </div>
                                <div class="form-text is-hidden">
                                    <h2>Recover Account</h2>
                                    <p>Reset your account password.</p>
                                </div>
                                <form id="login-form" class="login-wrapper" method="POST" action="{{ route('login') }}">
                                    @csrf
                                    <div class="control has-validation">
                                        <input id="email" type="email" class="input @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                                        {{-- <small class="error-text">This is a required field</small> --}}
                                        @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                        <div class="auth-label">{{ __('E-Mail Address') }}</div>
                                        <div class="auth-icon">
                                            {{-- <i class="lnil lnil-envelope"></i> --}}
                                            <i data-feather="mail"></i>
                                        </div>
                                        <div class="validation-icon is-success">
                                            <div class="icon-wrapper">
                                                <i data-feather="check"></i>
                                            </div>
                                        </div>
                                        <div class="validation-icon is-error">
                                            <div class="icon-wrapper">
                                                <i data-feather="x"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="control has-validation">
                                        <input  id="password" type="password" class="input" @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                                        @error('password')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                        <div class="auth-label">{{ __('Password') }}</div>
                                        <div class="auth-icon">
                                            {{-- <i class="lnil lnil-lock-alt"></i> --}}
                                            <i data-feather="lock"></i>
                                        </div>
                                    </div>

                                    <div class="control is-flex">
                                        <label class="remember-toggle">
                                            <input type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                            <span class="toggler">
                                                    <span class="active">
                                                        <i data-feather="check"></i>
                                                    </span>
                                            <span class="inactive">
                                                        <i data-feather="circle"></i>
                                                    </span>
                                            </span>
                                        </label>
                                        <div class="remember-me">{{ __('Remember Me') }}</div>
                                        <a id="forgot-link" >Forgot Password?</a>
                                    </div>
                                    <div class="button-wrap has-help">
                                        <button id="login-submit" type="submit" class="button h-button is-big is-rounded is-primary is-bold is-raised">{{ __('Login Now') }}</button>
                                        <span>Or <a href="/auth-signup.html">Create</a> an account.</span>
                                    </div>
                                </form>

                                <form id="recover-form" class="login-wrapper is-hidden">
                                    <p class="recover-text">Enter your email and click on the confirm button to reset your password. We'll send you an email detailing the steps to complete the procedure.</p>
                                    <div class="control has-validation">
                                        <input type="text" class="input">
                                        <small class="error-text">This is a required field</small>
                                        <div class="auth-label">Email Address</div>
                                        <div class="auth-icon">
                                            <i class="lnil lnil-envelope"></i>
                                        </div>
                                        <div class="validation-icon is-success">
                                            <div class="icon-wrapper">
                                                <i data-feather="check"></i>
                                            </div>
                                        </div>
                                        <div class="validation-icon is-error">
                                            <div class="icon-wrapper">
                                                <i data-feather="x"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="button-wrap">
                                        <button id="cancel-recover" type="button" class="button h-button is-white is-big is-rounded is-lower">Cancel</button>
                                        <button type="button" class="button h-button is-solid is-big is-rounded is-lower is-raised is-colored">Confirm</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Huro Scripts-->
        <!-- Concatenated plugins -->
        <script src="assets/js/app.js" async></script>
        <script src="{{asset('assets/js/app.js')}}" async></script>

        <!-- Huro js -->
        <script src="{{asset('assets/js/functions.js')}}" async></script>
        <script type="text/javascript">
            initPageLoader(),
            $(document).ready(function () {
                if (
                    ("development" === env && changeDemoImages(),
                    initDarkMode(),
                    initAnimatedModals(),
                    $("#login-submit").on("click", function () {
                        var i = $(this);
                        i.addClass("is-loading"),
                            setTimeout(function () {
                                i.removeClass("is-loading"), $("#login-form").submit();
                            }, 1e3);
                    }),
                    $("#forgot-link, #cancel-recover").on("click", function () {
                        $(this).closest(".is-form").find("form, .form-text").toggleClass("is-hidden");
                    }),
                    $("#huro-signup").length)
                ) {
                        $("#confirm-step-2").on("click", function () {
                            var i = $(this);
                            i.addClass("is-loading"),
                                setTimeout(function () {
                                    i.removeClass("is-loading"), $(".step-icon:nth-child(2)").removeClass("is-inactive").trigger("click");
                                }, 1e3);
                        }),
                        $("#finish-signup").on("click", function () {
                            var i = $(this);
                            i.addClass("is-loading"),
                                $(".step-icon.is-inactive").removeClass("is-inactive").trigger("click"),
                                setTimeout(function () {
                                    i.removeClass("is-loading"), (window.location.href = "/admin-dashboards-personal-1.html");
                                }, 1400);
                        });
                }
            });

        </script>
    </div>
</body>

</html>