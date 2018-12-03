<?php
/**
 * Created by PhpStorm.
 * User: oleg
 * Date: 11/29/18
 * Time: 12:34 PM
 */

namespace App\Traits;

use Carbon\Carbon;

trait Dates
{
    public function getMaximalAllowedDay()
    {
        return Carbon::today()->addMonth()->endOfMonth();
    }
}
