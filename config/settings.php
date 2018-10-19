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
];
