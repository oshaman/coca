<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $seo->seo_title }}</title>
    <meta name="description" content="{{ $seo->seo_description }}" />
    <meta name="keywords" content="{{ $seo->seo_keywords }}">
    
    <meta property="og:locale" content="uk_UA">
    <meta property="og:url" content="{{ env('APP_URL') }}">
    <meta property="og:site_name" content="{{ $seo->seo_title }}">


    <meta property="og:title" content="{{ $seo->og_title }}">
    <meta property="og:description" content="{{ $seo->og_description }}">
    <meta property="og:image" content="{{ $seo->og_image }}">

    <meta name="twitter:title" content="{{ $seo->seo_title }}">
    <meta name="twitter:description" content="{{ $seo->seo_description }}">
    <meta name="twitter:image" content="{{ $seo->og_image }}">

    <link rel="stylesheet" href="{{ asset('assets') }}/css/reset.css">
    <link rel="stylesheet" href="{{ asset('assets') }}/css/style.css">

    <style>
        body.is_load {
            position: fixed;
        }
       /*.is_load_:before {*/
            /*content: '';*/
            /*position: fixed;*/
            /*left: 0;*/
            /*top: 0;*/
            /*background-color: #F40009;*/
            /*width: 100vw;*/
            /*height: 100vh;*/
            /*z-index: 999;*/
        /*}*/
        #canvas-container {
            background: #ffffff;
            /*background: #F40009;*/
            background-size: cover;
            top: 50%;
            position: fixed;
            transform: translate(0,-50%);
            z-index: 999;
            height: 100vh;
            width: 100vw;
        }
        #sineCanvas {
            position: absolute;
            bottom: 0;
        }
        .canvas_load {
            height: 50vh;
            width: 100vw;
            position: absolute;
            bottom: 0;
            background: #F40009;
        }
        .canvas_load:nth-child(1) {
            top: 0;
        }
        #sineCanvas2,#sineCanvas {
            background-color: #fff;
            position: absolute;
            width: 100vw
        }
        #sineCanvas2 {
            bottom: 0;
        }
        #sineCanvas {
            top: -1px;
        }
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
                        <a href="#map_cola">Контакти</a>
                    </li>
                </ul>
            </nav>
            <div class="stock_cola">
                <div class="cola_event">
                    <img src="{{ asset('assets') }}/img/icon/svg_cola.svg" alt="">
                </div>
                <div class="event_info">
                    <img src="{{ asset('assets') }}/img/icon/svg_cola.svg" alt="">
                    <p>Збери всі частини Коли
                        <span>та отрімуй шалені подарунки!</span>
                        </p>
                </div>

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
    <h3>Круто!</br>
        Вітаю з завершенням!</h3>
        <p>Тепер менеджер з тобою зв’яжеться для отримання більш детальньої інформації</p>
    <div class="close">
        <p>ок</p>
    </div>
</div>
<div class="chat">
    <div class="chat_open">
        <img src="{{ asset('assets') }}/img/icon/chat_bot_colo.svg" alt="">
        <img class="bot_coca_i" src="{{ asset('assets') }}/img/icon/luar.svg" alt="">
        <div class="coca_hello"><p>Хей! Запитуй в мене!</p></div>
    </div>
    <div class="chat_close">
        <span></span>
        <span></span>
        <img class="puls_cl" src="{{ asset('assets') }}/img/icon/puls_cl.gif" alt="">
    </div>
    <div class="chat_window">
        <div class="bot_window"></div>
    </div>
</div>
<script>
    function preloader_canvas() {

        var unit = 100,
            canvas, context, canvas2, context2,
            height, width, xAxis, yAxis,
            draw, draw2;

        /**
         * Init function.
         *
         * Initialize variables and begin the animation.
         */
        function init() {

            canvas = document.getElementById("sineCanvas");
            canvas2 = document.getElementById("sineCanvas2");
            //Установите ширину холста на ширину окна
            canvas.width = document.documentElement.clientWidth;
            canvas2.width = document.documentElement.clientWidth;
            canvas.height = 100;
            canvas2.height = 100;

            context = canvas.getContext("2d");
            context2 = canvas2.getContext("2d");

            height = canvas.height;
            width = canvas.width;

            xAxis = Math.floor(height/2);
            yAxis = 0;

            draw();
            draw2();
        }

        /**
         * Draw animation function.
         *
         * This function draws one frame of the animation, waits 20ms, and then calls
         * itself again.
         */
        function draw() {

            context.clearRect(0, 0, width, height);

            drawWave('#F40009', 1, 2.5, 0);

            // Обновите время и снова нарисуйте
            draw.seconds = draw.seconds + .02;
            draw.t = draw.seconds*Math.PI;
            setTimeout(draw, 35);
        };
        draw.seconds = 0;
        draw.t = 0;

        function draw2() {

            // Очистить рисунок холста
            context2.clearRect(0, 0, width, height);

            //Нарисуйте волну
            drawWave2('#F40009', 1, 6, 0);

            // Обновите время и снова нарисуйте
            draw2.seconds = draw2.seconds + .01;
            draw2.t = draw2.seconds*Math.PI;
            setTimeout(draw2, 10);
        };
        draw2.seconds = 0;
        draw2.t = 0;
        /**
         *Нарисуйте волну
         * drawWave(Цвет, непрозрачность, масштабирование по ширине волны, отставание начального положения волны)
         */
        function drawWave(color, alpha, zoom, delay) {
            context.fillStyle = color;
            context.globalAlpha = alpha;
            context.beginPath(); //Начальный проход
            drawSine(draw.t / 0.5, zoom, delay);
            context.lineTo(width + 10, height); //Путь в нижнем правом углу холста
            context.lineTo(0, height); //Путь к левому нижнему углу холста
            context.closePath() //Закрыть путь
            context.fill(); //заполнить
        }
        function drawWave2(color, alpha, zoom, delay) {
            context2.fillStyle = color;
            context2.globalAlpha = alpha;
            context2.beginPath(); //Начальный проход
            drawSine2(draw.t / 0.8, zoom, delay);
            context2.lineTo(width + 10, -height); //Путь в нижнем правом углу холста
            context2.lineTo(0, -height); //Путь к левому нижнему углу холста
            context2.closePath() //Закрыть путь
            context2.fill(); //заполнить
        }
        /**
         * Функция рисования синуса
         *
         * Кривая синуса рисуется в сегментах 10px, начиная с начала координат.
         * drawSine(Время, ширина ширины ширины волны, задержка положения начала волны)
         */
        function drawSine(t, zoom, delay) {

            // Задайте начальные x и y, начиная с 0,0 и переведя на начало координат
            // на холст.
            var x = t; //Пусть время будет горизонтальным
            var y = Math.sin(x)/zoom;
            context.moveTo(yAxis, unit*y+xAxis); //Поместите путь в исходное положение
            // Цикл для рисования сегментов (Нарисуйте волны по ширине)
            for (i = yAxis; i <= width + 10; i += 10) {
                x = t+(-yAxis-i)/unit/zoom;
                y = Math.sin(x - delay)/5;
                context.lineTo(i, unit*y+xAxis);
            }
        }
        function drawSine2(t, zoom, delay) {

            var x = t;
            var y = Math.sin(x)/zoom;
            context2.moveTo(yAxis, unit*y+xAxis);

            for (i = yAxis; i <= width + 10; i += 10) {
                x = t+(-yAxis-i)/unit/zoom;
                y = Math.sin(x - delay)/3;
                context2.lineTo(i, unit*y+xAxis);
            }
        }

        init();

    };
    preloader_canvas()
</script>
@include('main.popups', ['screen'=>$screens->where('slug', 'futer')->first()])
<script src="{{ asset('assets') }}/js/animation.js"></script>


<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PVCLZSN"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-86271972-14"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-86271972-14');
</script>

</body>
</html>
