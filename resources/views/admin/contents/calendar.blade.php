<main>
    <div class="top-main">
        <h1>Календар екскурсій</h1>
        @include('admin.logout')
    </div>
    <div class="calendar scrollbar">
        <div class="panel">
            <div class="panel-month">
                <a class="prev" href="javascript:void(0)"><img src="{{ asset('admn') }}/imgs/corner-up-left.svg" alt="prev"></a>
                <p>Квітень</p>
                <span>2018</span>
                <a class="next" href="javascript:void(0)"><img src="{{ asset('admn') }}/imgs/corner-up-left.svg" alt="prev"></a>
            </div>
            <div class="add-trip">
                Добавити екскурсію
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
            <tr>
                <td class="prev-month">
                    <div class="td-wrap"></div>
                    <p class="day">31 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                </td>
                <td class="pres-month">
                    <div class="td-wrap"></div>
                    <p class="day">26 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                </td>
                <td class="pres-month">
                    <div class="td-wrap"></div>
                    <p class="day">26 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                </td>
                <td class="pres-month">
                    <div class="td-wrap"></div>
                    <p class="day">26 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                </td>
                <td class="pres-month">
                    <div class="td-wrap"></div>
                    <p class="day">26 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="pres-month">
                    <div class="td-wrap"></div>
                    <p class="day">26 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                </td>
                <td class="pres-month">
                    <div class="td-wrap"></div>
                    <p class="day">26 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                </td>
                <td class="pres-month">
                    <div class="td-wrap"></div>
                    <p class="day">26 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                </td>
                <td class="pres-month">
                    <div class="td-wrap"></div>
                    <p class="day">26 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                </td>
                <td class="pres-month">
                    <div class="td-wrap"></div>
                    <p class="day">26 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                </td>
            </tr>

            <tr>
                <td class="pres-month">
                    <div class="td-wrap"></div>
                    <p class="day">26 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                </td>
                <td class="pres-month">
                    <div class="td-wrap"></div>
                    <p class="day">26 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                </td>
                <td class="pres-month">
                    <div class="td-wrap"></div>
                    <p class="day">26 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                </td>
                <td class="pres-month">
                    <div class="td-wrap"></div>
                    <p class="day">26 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                </td>
                <td class="pres-month">
                    <div class="td-wrap"></div>
                    <p class="day">26 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                </td>
            </tr>

            <tr>
                <td class="pres-month">
                    <div class="td-wrap"></div>
                    <p class="day">26 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                </td>
                <td class="pres-month">
                    <div class="td-wrap"></div>
                    <p class="day">26 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                </td>
                <td class="pres-month">
                    <div class="td-wrap"></div>
                    <p class="day">26 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                </td>
                <td class="pres-month">
                    <div class="td-wrap"></div>
                    <p class="day">26 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                </td>
                <td class="prev-month">
                    <div class="td-wrap"></div>
                    <p class="day">26 число</p>
                    <div class="time-calendar time-register">
                        <span>Реєстрація</span>
                        <span>18:30 -19:30</span>
                    </div>
                    <div class="time-calendar time-confirmed">
                        <span>Підверджено</span>
                        <span>15:30 -16:30</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>

                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>16:40-17:34</span>
                    </div>
                    <div class="time-calendar time-reserved">
                        <span>Заброньовано</span>
                        <span>16:40-17:34</span>
                    </div>
                </td>
            </tr>

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
        <form class="form-trip">
            <div class="form-trip-block">
                <p>Виберіть дату та час</p>
                <select name="trip-month" id="select-month" class="custom-select sources">
                    <option value="04" selected>квітня</option>
                    <option value="05">травня</option>
                    <option value="06">червень</option>
                    <option value="06">червень</option>
                    <option value="06">червень</option>
                </select>
                <select name="trip-day" id="select-day" class="custom-select sources">
                    <option value="10" selected>10</option>
                    <option value="11">11</option>
                    <option value="11">11</option>
                    <option value="11">11</option>
                    <option value="11">11</option>
                    <option value="11">11</option>
                    <option value="11">11</option>
                    <option value="11">11</option>
                    <option value="11">11</option>
                    <option value="11">11</option>
                    <option value="11">11</option>
                </select>
                <select name="trip-time" id="select-time" class="custom-select sources">
                    <option value="1" selected>19:30-20:30</option>
                    <option value="2">23:00-00:00</option>
                    <option value="3">12:00-13:00</option>
                    <option value="4">14:30-15:30</option>
                    <option value="5">16:00-17:00</option>
                    <option value="6">19:00-20:00</option>
                </select>
            </div>
            <div class="form-trip-info">
                <p>Інформація щодо екскурсії</p>
                <div>
                    <input id='trip-name' type="text" class="form-control" required>
                    <label for="trip-name">Ім’я та Прізвище</label>
                </div>
                <div>
                    <input id='trip-phone' type="tel" class="form-control" required>
                    <label for="trip-phone">Телефон</label>
                </div>
                <div>
                    <input id='trip-email' type="email" class="form-control" required>
                    <label for="trip-email">Пошта</label>
                </div>
                <div>
                    <input id='trip-pos' type="text" class="form-control" required>
                    <label for="trip-pos">Посада</label>
                </div>
                <div>
                    <select name="sources1" id="position" class="custom-select sources" required>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                    <label for="position">Кількість людей</label>
                </div>
                <div>
                    <input id='trip-school' type="text" class="form-control" required>
                    <label for="trip-school">Назва закладу</label>
                </div>

            </div>
            <div class="form-trip-file">
                <div>
                    <div class="trip-photo">Фото документа
                        <div class="tooltip"><img src="{{ asset('admn') }}/imgs/Subtract.svg" alt="1">
                            <span class="tooltiptext">Підказка</span>
                        </div>
                    </div>
                    <input id="upload-doc" type="file">
                    <label for="upload-doc" class="btn btn-grey upload-doc">Завантажити</label>
                    <input type="text" id="filename" class="filename" disabled>
                </div>
                <div class="trip-check">
                    <input type="checkbox" id="cbtest" />
                    <label for="cbtest" class="check-box"></label>
                    <label for="cbtest" class="check-text">У мене немає документу</label>
                    <textarea name="pole" class="nodoc" cols="num" rows="num" placeholder="Тому що......"></textarea>
                </div>

                <div class="progress-bar">
                    <div class="bar-circle">
                        <div class="circle circle1 active"></div>
                        <div class="circle circle2"></div>
                        <div class="circle circle3"></div>
                        <hr class="active-top">
                        <hr class="active-bottom">
                    </div>
                    <div class="bar-text">
                        <p class="active">Заброньовано</p>
                        <p class="p-2">Очікує документ</p>
                        <p class="p-3">Підтвердженно</p>
                    </div>
                </div>
            </div>
            <div class="trip-buttons">
                <button type="submit" class="btn">Створити</button>
                <div class="btn btn-white">
                    Видалити
                </div>
            </div>

        </form>
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
