<?php

use Faker\Generator as Faker;


$factory->define(\App\Excursion::class, function (Faker $faker) {
    return [
        'name' => $faker->name.' '.$faker->lastName,
        'phone' => $faker->phoneNumber,
        'email' =>$faker->email,
        'people'=> rand(4,32),
        'institution'=>$faker->company,
        'status'=>rand(1,4),
        'interval'=>rand(1,6),
    ];
});
