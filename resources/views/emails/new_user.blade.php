{{--@component('mail::message')--}}

    <div class="img-l"><img src="{{ asset('admn') }}/imgs/colya.png" alt="кока-коля"></div>

    <p class="main-text-l">Привіт!</p>

    <p class="main-text-l">Вітаю, друже!</p>

    <p class="main-text-l">Тепер і в тебе є доступ до сайту visitcoke.com.ua</p>

    <div class="table-l">

        <div class="inner-l">

            <div class="pole-l">

                <p>Твоя роль</p>

                <p>Логін </p>

                <p>Пароль</p>

            </div>

            <div class="input-l">

                <p>{{ $user->role->uk_name }}</p>

                <p>{{ $user->email }}</p>

                <p>{{ $password }}</p>

            </div>

        </div>

    </div>

{{--@endcomponent--}}
