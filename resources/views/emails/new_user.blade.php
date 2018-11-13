@component('mail::message')

    Привіт!
    Вітаю, друже!
    Тепер і в тебе є доступ до сайту visitcoke.com.ua
    Твоя роль - {{ $user->role->uk_name }}
    Логін - {{ $user->email }}
    Пароль - {{ $password }}

    и далее подвал .... З найкращими.... (и так далее как в других письмах)


@endcomponent
