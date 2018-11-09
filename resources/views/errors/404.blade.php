<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Coca Cola</title>
    <link rel="stylesheet" href="{{ asset('assets') }}/css/reset.css">
    <link rel="stylesheet" href="{{ asset('assets') }}/css/style.css">


    <style>
        .error_page #main {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>
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
                        <a href="/#main">Головна</a>
                    </li>
                    <li>
                        <a href="/#about">Про музей</a>
                    </li>
                    <li>
                        <a href="/#participation">Умови участі</a>
                    </li>
                    <li>
                        <a href="/#form">Забронюйте дату та час</a>
                    </li>
                    <li>
                        <a href="/#gallery">Галерея</a>
                    </li>
                    <li>
                        <a href="/#map_cola">Карта</a>
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
    <div class="error">
        <p>Упс, не знайшли те що потрібно,
            <span>але є Кола</span></p>
    </div>
</main>



<script src="{{ asset('assets') }}/js/animation.js"></script>

<!--<script async="" defer="" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKFztHzVA7_L75JrTwyrzhk2asYAWUL7I&amp;callback=initMap&amp;language=ua"></script>-->
</body>
</html>
