<main>
    <div class="top-main">
        <h1>Календар екскурсій</h1>
        @include('admin.logout')
    </div>
    <div class="calendar scrollbar">
        <div class="panel">
            <div class="panel-month">
                @if($today->isCurrentMonth())
                    <a class="prev" href="{{ route('admin.calendar.index', ['step'=>'previous']) }}">
                        <img src="{{ asset('admn') }}/imgs/corner-up-left.svg" alt="prev">
                    </a>
                @elseif($today->isNextMonth())
                    <a class="prev" href="{{ route('admin.calendar.index') }}">
                        <img src="{{ asset('admn') }}/imgs/corner-up-left.svg" alt="prev">
                    </a>
                @endif
                <p>{{ $today->format('F') }}</p>
                <span>{{ $today->format('Y') }}</span>
                @if($today->isCurrentMonth())
                    <a class="next" href="{{ route('admin.calendar.index', ['step'=>'next']) }}">
                        <img src="{{ asset('admn') }}/imgs/corner-up-left.svg" alt="prev">
                    </a>
                @elseif($today->isLastMonth())
                    <a class="next" href="{{ route('admin.calendar.index') }}">
                        <img src="{{ asset('admn') }}/imgs/corner-up-left.svg" alt="prev">
                    </a>
                @endif
            </div>
            <div class="add-trip">
                Додати екскурсію
                <p><img src="{{ asset('admn') }}/imgs/plus.svg" alt="+"></p>
            </div>
        </div>
        <table class="month">
            <thead class="days">
            <tr>
                <td>Понеділок</td>
                <td>Вівторок</td>
                <td>Середа</td>
                <td>Четверг</td>
                <td>П’ятниця</td>
            </tr>
            </thead>
            <tbody class="timetable">

            @while ($currentDay->month <= $today->month)
                <tr>
                    @for ($i = 0; $i < 7; $i++)

                        @if($currentDay->isWeekend())
                            @php
                                $currentDay->addDay();
                            @endphp
                            @continue
                        @endif
                        @include('admin.contents.calendar.day')
                        @php
                            $currentDay->addDay();
                        @endphp
                    @endfor
                </tr>
            @endwhile
            </tbody>
        </table>
    </div>
    <div class="info-content">
        <div class="under-back">
            <div class="empty-info">
                <img src="{{ asset('admn') }}/imgs/info-window.png" alt="info">
                <h2 class="info-h2">Ось тут будуть списки екскурсій
                    <p>для початку, наведіть курсор на будь який день</p>
                </h2>
            </div>

        </div>
        <div class="info-windows">
            <div class="info-window ">
                <h5>
                    <p class="day">26 число</p>
                    Інформація екскурсій
                </h5>
                <div class="info-block">
                    <div class="info-after"></div>
                    <div class="header-note">
                        <div class="time-calendar time-reserved">
                            <span>Заброньовано</span>
                            <span>16:40-17:34</span>
                        </div>
                        <div class="info-open">Відкрити</div>
                    </div>
                    <div class="info-note">
                        <div>
                            <p class="info-people">36 людей</p>
                            <p class="info-institution">Школа № 275 з поглибленням английської мови</p>
                            <p class="info-document">Фото докум.pdf</p>
                        </div>
                        <div>
                            <p class="info-number">093 21 72 513</p>
                            <p class="info-name">Надія Шпак макс чис</p>
                            <p class="info-position">Класний керівник</p>
                            <p class="info-mail">zemna2013@gmail.com</p>
                        </div>
                        <div class="btn">Редагувати</div>
                    </div>
                </div>
                <div class="info-block-add">
                    <div class="info-after-add"></div>
                    <div class="header-note">
                        <div class="time-calendar time-free">
                            <span>Вільний</span>
                            <span>15:30 -16:30</span>
                        </div>
                    </div>
                </div>
                <div class="info-block">
                    <div class="info-after"></div>
                    <div class="header-note">
                        <div class="time-calendar time-confirmed">
                            <span>Підверджено</span>
                            <span>15:30 -16:30</span>
                        </div>
                        <div class="info-open">Відкрити</div>
                    </div>
                    <div class="info-note">
                        <div>
                            <p class="info-people">36 людей</p>
                            <p class="info-institution">Школа № 275 з поглибленням английської мови</p>
                            <p class="info-document">Фото докум.pdf</p>
                        </div>
                        <div>
                            <p class="info-number">093 21 72 513</p>
                            <p class="info-name">Надія Шпак макс чис</p>
                            <p class="info-position">Класний керівник</p>
                            <p class="info-mail">zemna2013@gmail.com</p>
                        </div>
                        <div class="btn">Редагувати</div>
                    </div>
                </div>
                <div class="info-block">
                    <div class="info-after"></div>
                    <div class="header-note">
                        <div class="time-calendar time-reserved">
                            <span>Заброньовано</span>
                            <span>16:40-17:34</span>
                        </div>
                        <div class="info-open">Відкрити</div>
                    </div>
                    <div class="info-note">
                        <div>
                            <p class="info-people">36 людей</p>
                            <p class="info-institution">Школа № 275 з поглибленням английської мови</p>
                            <p class="info-document">Фото докум.pdf</p>
                        </div>
                        <div>
                            <p class="info-number">093 21 72 513</p>
                            <p class="info-name">Надія Шпак макс чис</p>
                            <p class="info-position">Класний керівник</p>
                            <p class="info-mail">zemna2013@gmail.com</p>
                        </div>
                        <div class="btn">Редагувати</div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</main>

<div class="pop-trip">
    <div class="pop-header">
        <p>Добавити екскурсію</p>
        <div class="close"><img src="{{ asset('admn') }}/imgs/close-red.svg" alt="close"></div>
    </div>
    <div class="pop-form">
        @include('admin.contents.calendar.add-form')
    </div>
</div>

<div class="pops-alert"></div>
<div class="pop-delete">
    <div class="pop-main">
        <div class="doubt-text">
            Ви впевнені що хочете видалити цього чела?
        </div>
        <div class="doubt-button">
            <div class="button-success">Так</div>
            <div class="button-cancel">Ні</div>
        </div>
    </div>
    <div class="pop-back"></div>
</div>
