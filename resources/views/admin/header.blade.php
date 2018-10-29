<body class="{{ $body_class??'' }}">
<header>
    <img class="angles topleft" src="{{ asset('admn') }}/imgs/topleft.svg" alt="1">
    <div class="logo">
        <img src="{{ asset('admn') }}/imgs/Coca-Cola_logo.svg" alt="logo">
    </div>
    <div class="back-site">
        <div class="head-container">
            <a href="{{ config('app.url') }}" class="nav">Повернутись до сайту</a>
            <a href="{{ asset('admn') }}/imgs/manual.png" download class="btn btn-white">Завантажити мануал</a>
        </div>
    </div>
    <nav>
        <div class="head-container">
            {!! $navigation !!}
        </div>
    </nav>
    <div class="logoFlesh">
        <div class="fresh">
            <div class="created">САЙТ РАЗРАБОТАН</div>
            <a href="http://freshweb.agency/" target="_blank">
                <div class="fresh-logo"><span>F</span><span>R</span><span>E</span><span>S</span><span>H</span></div>
            </a>
            <div class="creative">CREATIVE WEB AGENCY</div>
        </div>
    </div>
    <div class="header-line"></div>
</header>
