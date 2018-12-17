<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Обери свою унікальну рамку</title>
    <link rel="stylesheet" href="{{ asset('admn') }}/css/jquery.mCustomScrollbar.min.css">
    <link rel="stylesheet" href="{{ asset('admn') }}/css/style.css">
    <style>.hidden {
            display: none;
        }</style>
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
            <img src="{{ asset('admn') }}/imgs/frames/frame-one.png" class="image1" alt="one">
            <div class="users-photo">
                <img src="{{ $excursion->getPhoto() }}" class="image2" alt="">
            </div>
        </div>

        <a href="javascript:void(0)" class="btn btn-red btn-merge" download>Завантажити</a>
        <canvas id="canvas" class="hidden"></canvas>
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

<script>
    // $('.file1, .file2').each(function () {
    //     var reader = new FileReader(),
    //         imageSelector = $(this).data('image-selector');
    //
    //     if (this.files && this.files[0]) {
    //         reader.onload = function (e) {
    //             imageIsLoaded(e, imageSelector)
    //         };
    //         reader.readAsDataURL(this.files[0]);
    //     }
    // });


    $('.frame').unbind('click', merge);
    $('.frame').bind('click', function () {
        setTimeout(function () {
            merge()
        },300)
    });
    merge()
    function merge() {
        var image1_h = $('.image1').height(),
            image1_w = $('.image1').width(),
            image2_h = $('.image2').height(),
            image2_w = $('.image2').width(),
            raz_w = (1754 - 1400) / 2,
            raz_h = (1240 - 877) / 2,
            canvas = document.getElementById('canvas'),
            ctx = canvas.getContext('2d'),
            imageObj1 = new Image(),
            imageObj2 = new Image();

        canvas.width = 1754;
        canvas.height = 1240;
        imageObj1.src = $('.image1').attr('src');

        imageObj1.onload = function () {
            ctx.globalAlpha = 1;
            // ctx.drawImage(imageObj1, 0, 0, image1_w, image1_h);
            ctx.drawImage(imageObj1, 0, 0, 1754, 1240);
            imageObj2.src = $('.image2').attr('src');
            imageObj2.onload = function () {

                ctx.globalAlpha = 1;
                ctx.drawImage(imageObj2, raz_w, raz_h, 1400, 877);
                var img = canvas.toDataURL('image/png');
                // $('.btn.btn-red.btn-merge').removeAttr('download href');
                $('.btn.btn-red.btn-merge').attr({'download': 'visitcoke','href':img });
                // $('body').append('<a href="' + img + '" download="' + img + '">скачать</a>')
            }
        };
    }
</script>
</body>
</html>
