<?php

namespace App\Repositories;

use App\Excursion;
use Carbon\Carbon;
use Illuminate\Http\Request;

/**
 * Class CalendarRepository
 * @package App\Repositories
 * @property Request $request
 */
class CalendarRepository
{
    public function getCalendar(Request $request): array
    {
        $currentDay = Carbon::now()->startOfMonth();
        $today = Carbon::today();
        if ($request->has('step')) {
            if ('next' == $request->get('step')) {
                $currentDay->addMonth();
                $today->addMonth();
            } else {
                $currentDay->subMonth();
                $today->subMonth();
            }
        }

        $lastDay = $currentDay->copy()->endOfMonth();
        $excursions = $this->getExcursions($currentDay, $lastDay);

        $dayOfWeek = $currentDay->dayOfWeekIso;
        if ($dayOfWeek <= 5) {
            for ($i = 0; $i < $dayOfWeek; $i++) {
                $currentDay->subDay();
            }
        }

        return compact('today', 'currentDay', 'excursions');
    }

    public function getExcursions($startDay, $stopDay)
    {
        return Excursion::whereBetween('created_at', [$startDay, $stopDay])->get();
    }

    /**
     * @param Carbon $received_date
     * @return boolean
     */
    public function validateDate($received_date)
    {
        $nearest_allowed_day = Carbon::today()->addDay();
        $maximal_allowed_day = $this->getMaximalAllowedDay();

        if (!$received_date->between($nearest_allowed_day, $maximal_allowed_day)) {
            return false;
        }
        if ($received_date->isWeekend()) {
            return false;
        }
        return true;
    }

    /**
     * @param Carbon $received_date
     * @param int $interval
     * @return boolean|Excursion
     */
    public function validateExcursion($received_date, $interval)
    {
        return Excursion::whereDate('created_at', $received_date->format('Y-m-d'))
            ->where('interval', $interval)->first();
    }

    /**
     * @param Request $request
     * @return Carbon
     */
    public function getRecivedDate($request)
    {
        $received_day = $request->get('trip-day');
        $received_month = $request->get('trip-month');
        $received_year = $request->get('trip-month') >= Carbon::today()->month ? Carbon::today()->year : Carbon::today()->addYear()->year;

        return Carbon::create($received_year, $received_month, $received_day);
    }

    public function getMaximalAllowedDay()
    {
        return Carbon::today()->addMonth()->endOfMonth();
    }

    public function getDisabledDays(): array
    {

        $today = Carbon::now();
        $all_excursion = Excursion::where('created_at', '>', $today->format('Y-m-d'))
            ->where('created_at', '<', $this->getMaximalAllowedDay()->addDay()->format('Y-m-d'))->get();

        $range = $this->dateRange();
        $disabled_days = [];

        for ($i = 1; $i <= $range; $i++) {

            if ($today->isWeekend()) {
                $today->addDay();
                continue;
            }


            $current_day_excursion = $all_excursion->where('date', $today->format('Y-m-d'))->pluck(['interval'])->toArray();


            if ($this->hasFreeIntervals($current_day_excursion)) {
                $disabled_days[] = $today->format('Y-m-d');
            }


            $today->addDay();
        }

        return $disabled_days;
    }

    public function dateRange()
    {
        $to = Carbon::today();
        $from = $this->getMaximalAllowedDay()->addDay();

        return $to->diffInDays($from);
    }

    public function getTimeIntervals(): array
    {
        $intervals = array_keys(config('settings.time_intervals'));

        $shift = array_shift($intervals);
        sort($intervals);
        return $intervals;

    }

    public function hasFreeIntervals($current_day_excursion): bool
    {
        if (count(array_diff($this->getTimeIntervals(), $current_day_excursion))) {
            return false;
        }

        return true;
    }

    public function getAvailableExcursions()
    {
        $result = [];

        foreach ($this->getExcursions(Carbon::now(), $this->getMaximalAllowedDay()->addDay()) as $excursion) {
            $result[$excursion->created_at->format('Y-m-d')][] = $excursion->interval;
        }

        return $result;
    }
}
