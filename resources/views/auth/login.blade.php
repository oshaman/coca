@extends('layouts.admin')

@section('header')
    <body class="enter-page">
    <header>
        <img src="{{ asset('admn') }}/imgs/Coca-Cola_logo.svg" alt="logo">
    </header>
    @endsection


    @section('content')
        <main>
            <div class="bottle-side">
                <img src="{{ asset('admn') }}/imgs/bottle.svg" alt="cola">
            </div>
            <div class="form-side">
                <h1>Увійти в адмін-панель</h1>
                <form method="POST" action="{{ route('login') }}" class="form-signin">
                    @csrf
                    <div>
                        <input id='inputMail' type="email" class="form-control" name="email" required>
                        <label for="inputMail">Пошта</label>
                        @if ($errors->has('email'))
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                        @endif
                    </div>
                    <div>
                        <input type="password" id="inputPassword" class="form-control" name="password" required>

                        <label for="inputPassword">Пароль</label>
                        <div class="eye" data-action="see-password" data-toggle="inputPassword">
                            <i class="icon-eye-open"></i>
                        </div>
                        @if ($errors->has('password'))
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                        @endif
                    </div>
                    <button class="btn btn-red" type="submit">Увійти</button>
                    <a href="{{ route('password.request') }}" class="btn btn-white">Забув пароль</a>
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
