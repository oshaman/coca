<?php

namespace App\Repositories;


use App\Email;
use App\Excursion;
use App\Jobs\OrderCreated;
use Carbon\Carbon;

class EmailRepository
{
    protected $excursion;

    public function __construct(Excursion $excursion)
    {
        $this->excursion = $excursion;
    }

    public function requestList()
    {
        $xday = Carbon::now()->addDay(3);

        $where = [['status', 4], ['created_at', '>', $xday->copy()->startOfDay()], ['created_at', '<', $xday->endOfDay()]];

        $closest_excursions = Excursion::where($where)->get();

        if ($closest_excursions->isNotEmpty()) {
            $email = Email::getEmail('fifth');

            foreach ($closest_excursions as $excursion) {
                dispatch(new OrderCreated($excursion->email, $email));
            }
            \Log::info('test remaining -' . date('d-m-Y'));

        }
    }


    public static function test()
    {
//        $xday = Carbon::now()->addDay(3);
//
//        $where = [['status', 4], ['created_at', '>', $xday->copy()->startOfDay()], ['created_at', '<', $xday->endOfDay()]];
//
//        $closest_excursions = Excursion::where($where)->get();
//
//        if ($closest_excursions->isNotEmpty()) {
//            foreach ($closest_excursions as $excursion) {
//                $email = Email::getEmail('fifth');
//                dispatch(new OrderCreated($excursion->email, $email));
//            }
//            \Log::info('test remaining -' . date('d-m-Y'));
//
//        }

        return 'test';
    }
}
