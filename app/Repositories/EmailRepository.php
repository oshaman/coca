<?php

namespace App\Repositories;


use App\Excursion;

class EmailRepository
{
    protected $excursion;
    
    public function __construct(Excursion $excursion)
    {
        $this->excursion = $excursion;
    }

    public function requestList()
    {
        \Log::info('test new -'.date('d-m-Y'));
    }
}
