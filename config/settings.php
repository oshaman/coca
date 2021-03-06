<?php
return [
    'mail_from' => env('MAIL_FROM', 'hello@example.com'),
    'locales' => ['uk', 'ru'],
    'no_image' => '/img/no-image.jpg',

    'roles' => [
        ['name' => 'admin'],
        ['name' => 'moderator'],
    ],

    'screens' => [
        ['slug' => 'golovna', 'title' => 'Головна',],
        ['slug' => 'pro-muzej', 'title' => 'Про музей',],
        ['slug' => 'umovi-uchastі', 'title' => 'Умови участі',],
        ['slug' => 'vіtrina', 'title' => 'Вітрина',],
        ['slug' => 'zabronjujte-datu-ta-chas', 'title' => 'Забронюйте дату та час',],
        ['slug' => 'galereja', 'title' => 'Галерея',],
        ['slug' => 'karta', 'title' => 'Карта',],
        ['slug' => 'futer', 'title' => 'Футер',],
    ],
    'time_intervals' => [
        'reserved',
        '9:00 - 10:30',
        '10:30 - 12:00',
        '12:00 - 13:30',
        '13:30 - 15:00',
        '15:00 - 16:30',
        '15:30 - 17:00',
    ],
    'statuses' => [
        'reserved',
        'Вільний',
        'Реєстрація',
        'Заброньовано',
        'Підтверджено',
    ],
    'status_class' => [
        'reserved',
        'time-free',
        'time-register',
        'time-reserved',
        'time-confirmed',
    ],
];
