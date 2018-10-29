<?php

use Illuminate\Database\Seeder;

class EmailTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $emails = [
            ['title'=>'first', 'slug'=>'first', 'subject'=>'asdasdasd', 'content' => 'asdadasdasd'],
            ['title'=>'second', 'slug'=>'second', 'subject'=>'asdasdasd', 'content' => 'asdadasdasd'],
            ['title'=>'third', 'slug'=>'third', 'subject'=>'asdasdasd', 'content' => 'asdadasdasd'],
            ['title'=>'fourth', 'slug'=>'fourth', 'subject'=>'asdasdasd', 'content' => 'asdadasdasd'],
            ['title'=>'fifth', 'slug'=>'fifth', 'subject'=>'asdasdasd', 'content' => 'asdadasdasd'],
        ];

        foreach ($emails as $email) {
            \App\Email::create($email);
        }
    }
}
