<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Coca Cola</title>
    <link rel="stylesheet" href="{{ asset('assets') }}/css/reset.css">
    <link rel="stylesheet" href="{{ asset('assets') }}/css/style.css">
</head>
<body>
<header class="header">
    <div class="container">
        <div class="head">
            <div class="logo">
                <img src="{{ asset('assets') }}/img/icon/logo.svg" alt="">
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#main">Головна</a>
                    </li>
                    <li>
                        <a href="#about">Про музей</a>
                    </li>
                    <li>
                        <a href="#participation">Умови участі</a>
                    </li>
                    <li>
                        <a href="#form">Забронюйте дату та час</a>
                    </li>
                    <li>
                        <a href="#gallery">Галерея</a>
                    </li>
                    <li>
                        <a href="#map_cola">Карта</a>
                    </li>
                </ul>
            </nav>
            <div class="stock_cola">
                <img src="{{ asset('assets') }}/img/icon/svg_cola.svg" alt="">
            </div>
            <div class="back_call">
                <a href="#form">
                    Записатись
                </a>
            </div>
        </div>

    </div>
</header>
<main id="main">
    @include('main.top', ['screen'=>$screens->where('slug', 'golovna')->first()])
    @include('main.pro-muzej', ['screen'=>$screens->where('slug', 'pro-muzej')->first()])
    @include('main.umovi-uchasty', ['screen'=>$screens->where('slug', 'umovi-uchasty')->first()])
    @include('main.witryna', ['screen'=>$screens->where('slug', 'witryna')->first()])
    @include('main.zabronjujte-datu-ta-chas', ['screen'=>$screens->where('slug', 'zabronjujte-datu-ta-chas')->first()])
    @include('main.galereja', ['screen'=>$screens->where('slug', 'galereja')->first()])
    @include('main.karta', ['screen'=>$screens->where('slug', 'karta')->first()])





    <section class="sec_8">
        <div class="container">
            <div class="seo_text">
                <div class="about-description">
                    {!! $seo->seo_text??'' !!}
                </div>
                <div class="seo_button" data-on_text="Розкрити" data-off_text="Згорнути">
                    <p>Розгорнути</p>
                </div>

            </div>

        </div>
    </section>
    <div class="text_fixed">
        <div class="text_R">Coca Cola</div>
        <div class="text_R2">Coca Cola</div>
        <div class="text_L">Coca Cola</div>
    </div>
</main>

@include('main.footer', ['screen'=>$screens->where('slug', 'footer')->first()])

<div class="pop_up">
    <div class="modal">
        <div class="slider_popUp">

        </div>
        <div class="close"></div>
    </div>
</div>
<div class="chat">
    <img src="{{ asset('assets') }}/img/icon/chat.svg" alt="">
</div>
{{--<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.min.js"></script>--}}
{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-translate/2.7.2/angular-translate.js"></script>--}}
<script src="{{ asset('assets') }}/js/animation.js"></script>

<!--<script async="" defer="" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKFztHzVA7_L75JrTwyrzhk2asYAWUL7I&amp;callback=initMap&amp;language=ua"></script>-->
</body>
</html>
