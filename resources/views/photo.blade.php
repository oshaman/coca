<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Обери свою унікальну рамку</title>
    <link rel="stylesheet" href="{{ asset('admn') }}/css/jquery.mCustomScrollbar.min.css">
    <link rel="stylesheet" href="{{ asset('admn') }}/css/style.css">
</head>
<body class="photo-page">
<header>
    <img class="angles topleft" src="{{ asset('admn') }}/imgs/topleft.svg" alt="1">
    <div class="logo">
        <img src="{{ asset('admn') }}/imgs/Coca-Cola_logo.svg" alt="logo">
    </div>

    <div class="logoFlesh">
        <div class="fresh">
            <div class="created">САЙТ РАЗРАБОТАН</div>
            <a href="http://freshweb.agency/" target="_blank">
                <div class="fresh-logo"><span>F</span><span>R</span><span>E</span><span>S</span><span>H</span></div>
            </a>
            <div class="creative">CREATIVE WEB AGENCY</div>
        </div>
    </div>
</header>
<main>
    <div class="big">
        <h1>Обери свою унікальну рамку</h1>
        <div class="main-frames">
            <img src="{{ asset('admn') }}/imgs/frames/frame-one.png" alt="one">
            <div class="users-photo">
                <img src="{{ $excursion->getPhoto() }}" alt="">
            </div>
        </div>

        <a href="javascript:void(0)" class="btn btn-red" download>Завантажити</a>
    </div>
    <div class="small scrollbar">
        <div class="under-back"></div>
        <h2>Рамки на вибір</h2>
        <div class="choose">

            @forelse($frames as $frame)
                <div class="frame">
                    <div class="photo-frame"><img src="{{ $frame->getFrame() }}" alt="st"></div>
                    <div class="name-frame">“{{ $frame->title??'' }}”</div>
                </div>
            @empty
            @endforelse
        </div>
    </div>


</main>

<footer>
    <img class="angles topright" src="{{ asset('admn') }}/imgs/topright.svg" alt="1">
    <img class="angles bottomright" src="{{ asset('admn') }}/imgs/bottomright.svg" alt="1">
</footer>


<script src="{{ asset('admn') }}/js/jquery-3.3.1.min.js"></script>
<script src="{{ asset('admn') }}/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script src="{{ asset('admn') }}/js/main.js"></script>
</body>
</html>
