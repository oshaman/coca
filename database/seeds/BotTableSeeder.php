<?php

use Illuminate\Database\Seeder;

class BotTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $bots = [
            ['title'=>'Адреса', 'slug'=>'address', 'question'=>'asdasdasdasd', 'answer'=>'asdasdassdadsasdasdas'],
            ['title'=>'Зміст', 'slug'=>'content', 'question'=>'asdasdasdasd', 'answer'=>'asdasdassdadsasdasdas'],
            ['title'=>'Правила', 'slug'=>'rules', 'question'=>'asdasdasdasd', 'answer'=>'asdasdassdadsasdasdas'],
            ['title'=>'Записатися', 'slug'=>'sign-up', 'question'=>'asdasdasdasd', 'answer'=>'asdasdassdadsasdasdas'],
            ['title'=>'Гаряча лінія', 'slug'=>'hotline', 'question'=>'Запишіться зараз', 'answer'=>'івфіфв'],

        ];

        foreach($bots as $bot){
            \App\Bot::create($bot);
        }
    }
}
