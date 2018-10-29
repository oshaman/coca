<?php

use Illuminate\Database\Seeder;

class ExcursionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Excursion::class, 10)->create();
    }
}
