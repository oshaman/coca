<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
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
                        <a href="#form">Забронюйте дау та час</a>
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
    <section class="sec_1">
        <div class="container">
            <div class="sec_title">
                <h1>Запрошуємо до Музею <span>Кока Кола</span></h1>
                <p>де ви матимете змогу відчути<br>
                    справжні емоції від всесвітньо відомого бренду.</p>
                <div class="button_callback">
                    <a href="#form">ЗАписатись</a>
                </div>
                <div class="button_callback">
                    {{ Form::open(['url'=>'get-calendar', 'method'=>'post']) }}
                    {!! Form::submit('Submit', ['class' => 'form-control']) !!}
                    {{ Form::close() }}
                </div>

            </div>

        </div>
        <div class="slider_top">
            <div class="slider_top_img"></div>
            <div class="nav_slider_top"></div>
        </div>
    </section>
    <section id="about" class="sec_2">
        <div class="container">
            <div class="about-area">
                <div class="about-img">
                    <img src="{{ asset('assets') }}/img/page/video_img.png" alt="">
                </div>
                <div class="about-content">
                    <div class="sec_title">
                        <span>Чиста правда</span>
                        <h2>Про музей</h2>
                        <p>
                            Компанія Кока-Кола приймає організовані групи відвідувачів починаючи <strong>з 2000 року.</strong>
                        </p>

                        <p>
                            Від школярів та студентів університетів до груп споживачів – відвідувачі із захопленням
                            спостерігають за тим, як виробляються їх улюблені напої на одному з <strong>найбільших заводів
                                Кока-Кола у Європі.</strong>
                        </p>
                    </div>
                    <div class="sec_title_bottom">
                        <p>Партнери з якими ми співпрацюємо понад 10 років</p>
                        <div class="sec_about_img">
                            <img src="{{ asset('assets') }}/img/icon/about_1.svg" alt="">
                            <img src="{{ asset('assets') }}/img/icon/about_2.svg" alt="">
                            <img src="{{ asset('assets') }}/img/icon/about_3.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="participation" class="sec_3">
        <div class="container">
            <div class="participation-area">
                <div class="participation-content">
                    <div class="sec_title">
                        <span>Супер пупер</span>
                        <h2>Умови участі</h2>
                        <p>Наш тур складається з двох частин: музею та заводу.</p>
                        <p>Оскільки наша програма дуже популярна, ми рекомендуємо Вам бронювати Ваш візит
                            заздалегідь. На жаль, ми не можемо прийняти відвідувачів без попереднього бронювання.
                        </p>
                        <p>Гаряча лінія, де Ви зможете отримати більше <br>
                            інформації  –  <em>0800 30 80 08</em></p>
                    </div>


                </div>
                <div class="participation-block">
                    <div class="block_par">
                        <div class="block_head">
                            <div class="block_img_">
                                <img src="{{ asset('assets') }}/img/icon/block_head_1.svg" alt="">
                            </div>
                            <p>Тури безкоштовні.</p>
                        </div>
                        <div class="block_number">
                            <p>01</p>
                        </div>
                    </div>
                    <div class="block_par">
                        <div class="block_head">
                            <div class="block_img_">
                                <img src="{{ asset('assets') }}/img/icon/block_head_2.svg" alt="">
                            </div>
                            <p>Вам потрібно підтвердити тур за 7 днів до визначеної дати</p>
                        </div>
                        <div class="block_number">
                            <p>02</p>
                        </div>
                    </div>
                    <div class="block_par">
                        <div class="block_head">
                            <div class="block_img_">
                                <img src="{{ asset('assets') }}/img/icon/block_head_3.svg" alt="">
                            </div>
                            <p>Завод дозволяється відвідувати дітям старшим 12 років</p>
                        </div>
                        <div class="block_number">
                            <p>03</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="sec_4">
        <div class="container">
            <div class="block_sec4">
                <div class="left_sec4">
                    <div class="sec_4_img">
                        <img src="{{ asset('assets') }}/img/page/sec4_2.png" alt="">
                    </div>
                    <div class="sec_4_text">
                        <p>Музей присвячений Кока Колі - це ж сама крута річ для дітей. Безкошовні подарунки,
                            офігенні фото та всяке інше..
                        </p>
                    </div>
                </div>
                <div class="right_sec4">
                    <div class="sec_4_text">
                        <p>Вони прокладають цей величезний шлях - заради тебе.
                            Прийди а побач власними очами як створюєься Кока Кола.
                        </p>
                    </div>
                    <div class="sec_4_img">
                        <img src="{{ asset('assets') }}/img/page/sec4_1.png" alt="">
                    </div>

                </div>
            </div>
        </div>
    </section>
    <section id="form" class="sec_5">
        <div class="container">
            <div class="form-area">
                <div class="sec_title">
                    <span>Швидче</span>
                    <h2>Забронюйте<br>
                        дату та час</h2>
                    <p>
                        Наш тур складається з двох частин: музею та заводу.
                    </p>
                    <p>
                        Оскільки наша програма дуже популярна, ми рекомендуємо Вам бронювати Ваш візит заздалегідь.
                        На жаль, ми не можемо прийняти відвідувачів без попереднього бронювання.
                    </p>
                    <p>
                        Будь ласка, зверніть увагу на те, що:
                    </p>
                </div>
                <div class="form_sec5">
                    <form action="">
                        <fieldset>
                            <h3>Загальна інформація</h3>
                            <div class="name">
                                <input type="text" id="name" name="name">
                                <label for="name">Ім’я та Прізвище</label>
                            </div>
                            <div class="tell">
                                <input type="text" id="phone" name="phone">
                                <label for="phone">Телефон</label>
                            </div>
                            <div class="email">
                                <input type="email" id="email" name="email">
                                <label for="email">Пошта</label>
                            </div>
                            <div class="pole_form">
                                <input type="text" id="position" name="position">
                                <label for="position">Посада</label>
                            </div>
                            <div class="pole_form">
                                <input type="text" id="institution" name="institution">
                                <label for="institution">Назва закладу</label>
                            </div>
                            <div class="pole_form">
                                <input list="number_people" placeholder="Кількість людей" class="number_people">
                                <datalist id="number_people">

                                    <select>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>

                                </datalist>

                            </div>
                        </fieldset>
                        <fieldset>
                            <h3>Дату та час</h3>
                            <div class="bron">
                                <div class="data">
                                    <div  class="data_calendar">
                                        <p></p>
                                        <i></i>
                                    </div>
                                    <div ng-app="app" class="calendar_w">

                                        <div ng-controller="MainController">
                                            <div class="wrapp">
                                                <flex-calendar options="options" events="events"></flex-calendar>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="timer">
                                    <input list="timer_day" placeholder="Кількість людей">
                                    <datalist id="timer_day">
                                        <option value="9.00">9.00</option>
                                        <option disabled value="10.30">10.30</option>
                                        <option value="12.00">12.00</option>
                                        <option value="13.30">13.30</option>
                                        <option value="15.00">15.00</option>
                                        <option value="14.30">14.30</option>
                                    </datalist>
                                </div>
                            </div>


                        </fieldset>

                        <div class="button">
                            <input type="submit" id="send" value="Забронювати">
                            <label for="checkBox">
                                <input id="checkBox" type="checkbox" name="checkBox"> Я згоден на оброботку своїх данних
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <section id="gallery" class="sec_6">
        <div class="container">
            <div class="gallery-area">
                <div class="gallery_title">
                    <div class="sec_title">
                        <span>Щаслива</span>
                        <h2>Галерея</h2>
                    </div>
                    <div class="slider_nav">
                        <div class="nav-control nav-control_prev"></div>
                        <div class="nav-control nav-control_next"></div>
                    </div>
                </div>
                <div class="gallery_slider">
                    <div class="gallery_block">
                        <iframe src="https://www.youtube.com/embed/IQ017ZQf2GI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <p>Оскільки наша програма дуже популярна, ми рекомендуємо Вам бронювати Ваш візит заздалегідь. </p>
                    </div>
                    <div class="gallery_block">
                        <img src="{{ asset('assets') }}/img/page/gallery_1.png" alt="">
                        <p>Оскільки наша програма дуже популярна, ми рекомендуємо Вам бронювати Ваш візит заздалегідь. </p>
                    </div>
                    <div class="gallery_block">
                        <img src="{{ asset('assets') }}/img/page/gallery_2.png" alt="">
                        <p>Оскільки наша програма дуже популярна, ми рекомендуємо Вам бронювати Ваш візит заздалегідь. </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="map_cola" class="sec_7">
        <div id="map"></div>
        <div class="contact">
            <div class="sec_title">
                <span>Куди їхати</span>
                <h2>Карта</h2>
            </div>
            <div class="contact-area">
                <div class="con_lan">
                    <p>Броварський район, Велика Димерка, 51-й км Санкт-Петербурзького шосе</p>
                </div>
                <div class="con_tell">
                    <a href="">+38 044 490 07 07</a>
                </div>
                <div class="con_mail">
                    <a href="">ccbu@cchellenic.com</a>
                </div>
            </div>
            <div class="contact-marsh">
                <h4>Як до нас дібратись</h4>
                <div class="marsh_">
                    <h5>Маршрутка 523</h5>
                </div>
                <div class="marsh_">
                    <h5>Маршрутка 563</h5>
                </div>
            </div>
        </div>
    </section>
    <section class="sec_8">
        <div class="container">
            <div class="seo_text">
                <div class="about-description">
                    <p>Каждому из нас хорошо знаком красно-белый логотип компании «Кока-Кола». По статистике, его легко
                        узнают 94% населения земного шара. Все мы хоть раз в жизни пробовали напитки, выпускаемые под
                        торговой маркой Кока-Кола, и вкус самых распространенных из них узнаем без труда.
                    </p>
                    <p>
                        Однако немногим из нас известно об удивительных фактах, связанных с Кока-Колой. К примеру, о
                        том, что основной напиток производится по старинному рецепту, который хранится в строжайшей
                        тайне и не менялся с момента его патентования в конце ХІХ века. Или же о том, что в некоторых
                        странах его потребляют в качестве лекарства от простуды или нервных расстройств.
                    </p>
                </div>
                <div class="seo_button" data-on_text="Розкрити" data-off_text="Закрить">
                    <p>Розкрити</p>
                </div>

            </div>

        </div>
    </section>
</main>

<footer class="footer">
    <div class="container">
        <div class="footer__columns">
            <div class="footer__column">
                <div class="logo_footer">
                    <img src="{{ asset('assets') }}/img/icon/logo_footer.svg" alt="">
                </div>
                <div class="footer__local_icon">
                    <a target="_blank" class="" href="#">
                        <img src="{{ asset('assets') }}/img/icon/fb.svg" alt="">
                    </a>
                    <a target="_blank" class="" href="#">
                        <img src="{{ asset('assets') }}/img/icon/g+.svg" alt="">
                    </a>
                    <a target="_blank" class="" href="#">
                        <img src="{{ asset('assets') }}/img/icon/pl.svg" alt="">
                    </a>
                </div>
            </div>
            <div class="footer__column">
                <p>Всі права захищені Джидаями. 2018</p>
            </div>
            <div class="footer__column">
                <div class="logo_flesh">
                    <img src="{{ asset('assets') }}/img/icon/logo_fresh.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</footer>
<div class="text_fixed">
    <div class="text_R">Coca Cola</div>
    <div class="text_R2">Coca Cola</div>
</div>
<div class="chat">
    <img src="{{ asset('assets') }}/img/icon/chat.svg" alt="">
</div>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-translate/2.7.2/angular-translate.js"></script>
<script src="{{ asset('assets') }}/js/animation.js"></script>

<!--<script async="" defer="" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKFztHzVA7_L75JrTwyrzhk2asYAWUL7I&amp;callback=initMap&amp;language=ua"></script>-->
</body>
</html>
