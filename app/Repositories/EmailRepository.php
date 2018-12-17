<?php

namespace App\Repositories;


use App\Email;
use App\Excursion;
use App\Jobs\ChangedStatus;
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
        $xday = Carbon::now()->addDay(1);

        $where = [['status', 4], ['created_at', '>', $xday->copy()->startOfDay()], ['created_at', '<', $xday->endOfDay()]];

        $closest_excursions = Excursion::where($where)->get();

        if ($closest_excursions->isNotEmpty()) {
            $email = Email::getEmail('fifth');

            foreach ($closest_excursions as $excursion) {
                dispatch(new ChangedStatus($excursion, $email));
            }
            \Log::info('test remaining -' . date('d-m-Y'));

        }
    }


    public static function test()
    {

        return 'test';
    }
}
