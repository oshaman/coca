<section id="form" class="sec_5">
    <div class="container">
        <div class="form-area">
            <div class="sec_title">
                <span>{{ $screen->headings[0]??'' }}</span>
                <div class="fs_title">
                    <h2>{{ $screen->headings[1]??'' }}</h2>
                </div>
                {!! $screen->content !!}
            </div>
            <div class="form_sec5">
                <form action="" autocomplete="off">
                    <fieldset>
                        <h3>Загальна інформація</h3>
                        <div class="name">
                            <input type="text" id="name" name="name" autocomplete="off">
                            <label for="name">Ім’я та Прізвище</label>
                        </div>
                        <div class="tell">
                            <input type="text" id="phone" maxlength="17" name="phone" autocomplete="off" value="">
                            <label for="phone">Телефон</label>
                        </div>
                        <div class="email">
                            <input type="text" id="email" name="email" autocomplete="off">
                            <label for="email">Пошта</label>
                        </div>
                        <div class="pole_form">
                            <input type="text" id="position" name="position" autocomplete="off">
                            <label for="position">Посада</label>
                        </div>
                        <div class="pole_form">
                            <input type="text" id="institution" name="institution" autocomplete="off">
                            <label for="institution">Навчальний заклад чи Приватна особа</label>
                        </div>
                        <div class="pole_form">
                            <input type="number" id="people" name="people" maxlength="2" autocomplete="off" min="10" max="37">
                            <label for="people">Кількість людей  (від 10 до 37)</label>
                            {{--{{Form::selectRange('people', 4, 32, null, ['id'=>'position', 'class'=>"custom-select_people sources",'placeholder'=>'Кількість людей'])}}--}}
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

                                <select name="interval" id="interval" class="custom-select" >
                                    <option value="1">9:00-10:30</option>
                                    <option  value="2">10:30-12:00</option>
                                    <option value="3">12:00-13:30</option>
                                    <option value="4">13:30-15:00</option>
                                    <option value="5">15:00-16:30</option>
                                    <option value="6">16:30-18:00</option>
                                </select>


                            </div>
                        </div>
                        <h3>Фото документа <i></i></h3>
                        <div class="file_b">
                            <input type="file" id="addFile">
                            <div class="file-don">
                                <i></i>
                                <p>Завантажити</p>
                            </div>
                            <div class="check_text">
                                <label>
                                    <input type="checkbox">
                                    <span>У мене немає документу</span>
                                </label>

                                <textarea name="comment" class="nodoc" cols="num" rows="num" placeholder="Тому що......"></textarea>
                            </div>
                        </div>

                    </fieldset>

                    <div class="button">
                        <div class="send">
                            <button type="submit" id="send" value="Забронювати">Забронювати</button>
                        </div>
                        <label>
                            <input id="checkBox" type="checkbox" name="checkBox">
                            <span>Я згоден на оброботку своїх данних</span>
                        </label>

                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="class_woter">
        <img data-src="{{ asset('assets') }}/img/icon/cola_woter.gif" alt="">
    </div>
</section>
