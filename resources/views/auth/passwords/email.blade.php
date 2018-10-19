@extends('layouts.admin')

@section('header')
    <body class="enter-page forgot-page">
    <header>
        <img src="{{ asset('admn') }}/imgs/Coca-Cola_logo.svg" alt="logo">
    </header>
    @endsection

    @section('content')

        <main>
            <div class="bottle-side">
                <img src="{{ asset('admn') }}/imgs/bottle-forgot.svg" alt="cola">
            </div>
            <div class="form-side">
                @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                @endif

                <h1>Забули пароль? Без паніки <sup>Випий Коли</sup></h1>
                <form action="{{ route('password.email') }}" class="form-signin" method="post">
                    @csrf

                    <div>
                        <input id='form1' type="email" class="form-control" name="email" value="{{ old('email') }}" required>
                        <label for="form1">Пошта</label>
                        @if ($errors->has('email'))
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                        @endif
                    </div>

                    <button class="btn btn-red" type="submit">Відправити</button>
                </form>
            </div>
        </main>
    @endsection

    @section('footer')
        <footer>
            <div class="logoFlesh">
                <div class="fresh">
                    <div class="created">САЙТ РАЗРАБОТАН</div>
                    <a href="http://freshweb.agency/" target="_blank">
                        <div class="fresh-logo"><span>F</span><span>R</span><span>E</span><span>S</span><span>H</span>
                        </div>
                    </a>
                    <div class="creative">CREATIVE WEB AGENCY</div>
                </div>
            </div>
        </footer>
        <img class="angles topleft" src="{{ asset('admn') }}/imgs/topleft.svg" alt="1">
        <img class="angles topright" src="{{ asset('admn') }}/imgs/topright.svg" alt="1">
        <img class="angles bottomright" src="{{ asset('admn') }}/imgs/bottomright.svg" alt="1">
@endsection
