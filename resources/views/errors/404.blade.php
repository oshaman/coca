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
        .error {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .error:before {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            background-image: url(https://visitcoke.com.ua/assets/img/icon/404_bg.png);
            /*width: 1144px;*/
            width: 59.583333333333336vw;
            /*height: 707px;*/
            height: 36.822916666666664vw;
            /*margin-top: 130px;*/
            margin-top: 6.770833333333333vw;
            /*margin-left: 29px;*/
            margin-left: 1.5104166666666667vw;
            background-repeat: no-repeat;
            background-size: contain;
        }
        .error p {
            font-family: 'Oswald';
            position: absolute;
            font-weight: 500;
            /*line-height: 27px;*/
            line-height: 1.40625vw;
            /*font-size: 24px;*/
            font-size: 1.25vw;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            display: flex;
            flex-direction: column;
            left: 49.7%;
            top: 77.9%;
        }
        .error p span {
            font-family: 'Oswald';
            font-weight: 700;
            /*line-height: 40px;*/
            line-height: 2.083333333333333vw;
            /*font-size: 36px;*/
            font-size: 1.875vw;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #F40009;
        }
        .error_page #main {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .error_404 img{
            /*width: 711px;*/
            width: 37.03125vw;
            /*height: 270px;*/
            height: 14.0625vw;
            /*margin-left: -83px;*/
            margin-left: -4.322916666666667vw;
            /*margin-top: 162px;*/
            margin-top: 8.4375vw;
        }
        @media only screen and (max-width: 1024px) {
            .error:before {
                /*width: 265px;*/
                width: 82.8125vw;
                /*height: 225px;*/
                height: 70.3125vw;
                /*margin-top: 36px;*/
                margin-top: 11.25vw;
                /*margin-left: 11px;*/
                margin-left: 3.4375000000000004vw;
            }
            .error_404 img {
                /*width: 218px;*/
                width: 68.125vw;
                /*height: 96px;*/
                height: 30vw;
                /*margin-left: -15px;*/
                margin-left: -4.6875vw;
                /*margin-top: 36px;*/
                margin-top: 11.25vw;
            }
            .error p span {
                /*line-height: 13px;*/
                line-height: 4.0625vw;
                /*font-size: 16px;*/
                font-size: 5vw;
            }
            .error p {
                /*line-height: 19px;*/
                line-height: 5.9375vw;
                /*font-size: 9px;*/
                font-size: 2.8125vw;
                /*left: 47.7%;*/
                /*top: 61.9%;*/
                left: 48.75vw;
                top: 109.375vw;
            }
        }

    </style>
</head>
<body >
<header class="header">
    <div class="container">
        <div class="head">
            <div class="logo">
                <a href="/">
                    <img src="{{ asset('assets') }}/img/icon/logo.svg" alt="">
                </a>

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
                    Забронювати
                </a>
            </div>
        </div>

    </div>
</header>
<main id="main">
    <div class="error">
        <div class="error_404">
            <img src="{{ asset('assets') }}/img/icon/404.png" alt="">
        </div>
        <p>Упс, не знайшли те що потрібно,
            <span>але є Кола</span></p>
    </div>
</main>



<script src="{{ asset('assets') }}/js/animation.js"></script>

<!--<script async="" defer="" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKFztHzVA7_L75JrTwyrzhk2asYAWUL7I&amp;callback=initMap&amp;language=ua"></script>-->
</body>
</html>
