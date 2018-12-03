<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $seo->seo_title }}</title>
    <meta name="description" content="{{ $seo->seo_description }}" />
    <meta name="keywords" content="{{ $seo->seo_keywords }}">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta property="og:locale" content="uk_UA">
    <meta property="og:url" content="{{ env('APP_URL') }}">
    <meta property="og:site_name" content="{{ $seo->seo_title }}">


    <meta property="og:title" content="{{ $seo->og_title }}">
    <meta property="og:description" content="{{ $seo->og_description }}">
    <meta property="og:image" content="{{ $seo->og_image }}">

    <meta name="twitter:title" content="{{ $seo->seo_title }}">
    <meta name="twitter:description" content="{{ $seo->seo_description }}">
    <meta name="twitter:image" content="{{ $seo->og_image }}">

    {{--<link rel="stylesheet" href="{{ asset('assets') }}/css/reset.css">--}}


    <style>
        body.is_load{position:fixed}#canvas-container{background:#fff;background-size:cover;top:50%;position:fixed;transform:translate(0,-50%);z-index:999;height:100vh;width:100vw}#sineCanvas{position:absolute;bottom:0}.canvas_load{height:50vh;width:100vw;position:absolute;bottom:0;background:#f40009}.canvas_load:nth-child(1){top:0}#sineCanvas2,#sineCanvas{background-color:#fff;position:absolute;width:100vw}#sineCanvas2{bottom:0}#sineCanvas{top:-1px}
    </style>

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PVCLZSN');</script>
    <!-- End Google Tag Manager -->
</head>
<body class="is_load">

    <div id="canvas-container">
        <div class="canvas_load">
            <canvas id="sineCanvas2"></canvas>
        </div>
        <div class="canvas_load">
            <canvas id="sineCanvas"></canvas>
        </div>

    </div>


<header class="header">
    <div class="container">
        <div class="head">
            <div class="logo">
                <a href="#">
                <img src="{{ asset('assets') }}/img/icon/logo.svg" alt="">
                </a>
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
                        <a href="#map_cola">Контакти</a>
                    </li>
                </ul>
            </nav>
            <div class="stock_cola">
                <div class="cola_event">
                    @include('main.svg_event')
                    {{--<img src="{{ asset('assets') }}/img/icon/svg_cola.svg" alt="">--}}
                </div>
                <div class="event_info">
                    <img src="{{ asset('assets') }}/img/icon/svg_cola.svg" alt="">
                    <p>Збери всі частини пляшки Кока-Кола
                       та отримай подарунок!
                        </p>
                </div>

            </div>
            <div class="back_call">
                <a href="#form">Забронювати
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
                <div class="seo_button" data-on_text="Розгорнути" data-off_text="Згорнути">
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

@include('main.footer', ['screen'=>$screens->where('slug', 'futer')->first()])

<div class="pop_up">
    <div class="modal">
        <div class="slider_popUp">

        </div>
        <div class="close"></div>
    </div>
</div>
<div class="pop_blag">
    <img src="{{ asset('assets') }}/img/icon/pop_blag.svg" alt="">
    <h3>Круто!<br>
        Вітаю з завершенням!</h3>
        <p>Тепер менеджер з тобою зв’яжеться для отримання більш детальньої інформації</p>
    <div class="close">
        <p>ок</p>
    </div>
</div>
<div class="pop_event">
    <img src="{{ asset('assets') }}/img/icon/pop_blag.svg" alt="">
    <h3>Вітаємо Тебе!<br>Ти знайшов пaсхалку - <br><span></span></h3>
    <p>Знайди всі та отримай крутий подарунок!</p>
    <div class="cool_ev_fs">
        <p><span>1</span>/3</p>
        <div class="hr_fs">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="close">
        <p>ок</p>
      </div>
</div>

<div class="chat">
    <div class="chat_open">
        <img data-src="{{ asset('assets') }}/img/icon/chat_bot_colo.svg" alt="">
        <img class="bot_coca_i" data-src="{{ asset('assets') }}/img/icon/luar.svg" alt="">
        <div class="coca_hello"><p>Хей! Запитуй в мене!</p></div>
    </div>
    <div class="chat_close">
        <span></span>
        <span></span>
        <img class="puls_cl" data-src="{{ asset('assets') }}/img/icon/puls_cl.gif" alt="">
    </div>
    <div class="chat_window">
        <div class="bot_window"></div>
    </div>
</div>
    <link rel="stylesheet" href="{{ asset('assets') }}/css/style.css">

    <script>function preloader_canvas(){var o=100,h,f,d,k,p,e,g,c,n,b;function q(){h=document.getElementById("sineCanvas");d=document.getElementById("sineCanvas2");h.width=document.documentElement.clientWidth;d.width=document.documentElement.clientWidth;h.height=100;d.height=100;f=h.getContext("2d");k=d.getContext("2d");p=h.height;e=h.width;g=Math.floor(p/2);c=0;n();b()}function n(){f.clearRect(0,0,e,p);j("#F40009",1,2.5,0);n.seconds=n.seconds+0.02;n.t=n.seconds*Math.PI;setTimeout(n,35)}n.seconds=0;n.t=0;function b(){k.clearRect(0,0,e,p);l("#F40009",1,6,0);b.seconds=b.seconds+0.01;b.t=b.seconds*Math.PI;setTimeout(b,10)}b.seconds=0;b.t=0;function j(r,u,t,s){f.fillStyle=r;f.globalAlpha=u;f.beginPath();m(n.t/0.5,t,s);f.lineTo(e+10,p);f.lineTo(0,p);f.closePath();f.fill()}function l(r,u,t,s){k.fillStyle=r;k.globalAlpha=u;k.beginPath();a(n.t/0.8,t,s);k.lineTo(e+10,-p);k.lineTo(0,-p);k.closePath();k.fill()}function m(u,v,s){var r=u;var w=Math.sin(r)/v;f.moveTo(c,o*w+g);for(i=c;i<=e+10;i+=10){r=u+(-c-i)/o/v;w=Math.sin(r-s)/5;f.lineTo(i,o*w+g)}}function a(u,v,s){var r=u;var w=Math.sin(r)/v;k.moveTo(c,o*w+g);for(i=c;i<=e+10;i+=10){r=u+(-c-i)/o/v;w=Math.sin(r-s)/3;k.lineTo(i,o*w+g)}}q()}preloader_canvas();</script>
    @include('main.popups', ['screen'=>$screens->where('slug', 'futer')->first()])
    @include('main.easters', ['screen'=>$screens->where('slug', 'easter')->first()])

    {{--<script data-src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBktDMPdQuUkHC1MWrvNEaIKlhymL5X-C4&callback=initMap&language=ua"></script>--}}
    <script src="{{ asset('assets') }}/js/animation.js"></script>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PVCLZSN" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-86271972-14"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-86271972-14');
    </script>
</body>
</html>
