<?php

namespace App\Repositories;

use App\Excursion;
use App\Jobs\OrderCreated;
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
                $currentDay->addMonthNoOverflow();
                $today->addMonthNoOverflow();
            } else {
                $currentDay->subMonthsNoOverflow(1);
                $today->subMonthsNoOverflow(1);
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

    public function addExcursion($request):array
    {
        $received_date = $this->getReceivedDate($request);

        if (!$this->validateDate($received_date)) {
            return ['status' => 'Реєстрація на даний день закрита'];
        }

        if (null !== $this->validateExcursion($received_date, $request->get('interval'))) {
            return ['status' => 'Даний час вже заброньований'];
        }

        $excursion = new Excursion();

        $excursion->add($request, $received_date);

        dispatch(new OrderCreated($excursion->email));

        return ['status' => 'Екскурсію збережено.'];
    }

    public function updateExcursion($request, $excursion):array
    {

        $received_date = $this->getReceivedDate($request);

        if (!$this->validateDate($received_date)) {
            return ['status' => 'Реєстрація на даний день закрита'];
        }

        if ($excursion->isIntervalChanged($received_date) && (null !== $this->validateExcursion($received_date, $request->get('interval')))) {
            return ['status' => 'Даний час вже заброньований'];
        }

        $excursion->editExcursion($request, $received_date);
        return ['status' => 'Екскурсію збережено.'];
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
    public function getReceivedDate($request)
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

    public function getAvailableExcursionIntervals(): array
    {
        $result = [];

        foreach ($this->getExcursions(Carbon::now(), $this->getMaximalAllowedDay()->addDay()) as $excursion) {
            $result[$excursion->created_at->format('Y-m-j')][] = $excursion->interval;
        }

        return $result;
    }

    public static function getExcursionByDate($date):array
    {
        $excursions = Excursion::whereDate('created_at', '=', $date)->get();

        $result = [];

        for ($i=1;$i<7;$i++) {
            $result[$i] = $excursions->where('interval','=', $i)->first();
        }

        return $result;

    }

    public function getArrayForCreateValidation():array
    {
        return [
            "trip-month" => 'required|numeric|between:1,12',
            "trip-day" => "required|numeric|between:1,31",
            "interval" => "required|numeric|between:1,6",
            "name" => "required|string|max:256",
            "phone" => "required|string|max:256",
            "email" => "required|string|max:256",
            "status" => "nullable|numeric|between:2,4",
            "position" => "required|string|max:256",
            "people" => "required|numeric|between:4,32",
            "institution" => "required|string|max:256",
            "file" => "nullable|mimes:pdf|max:5120",
            "comment" => "nullable|string|max:256",
        ];
    }

    public function getArrayForUpdateValidation():array
    {
        return [
            "trip-month" => 'required|numeric|between:1,12',
            "trip-day" => "required|numeric|between:1,31",
            "interval" => "required|numeric|between:1,6",
            "status" => "required|numeric|between:2,4",
            "name" => "required|string|max:256",
            "phone" => "required|string|max:256",
            "email" => "required|string|max:256",
            "position" => "required|string|max:256",
            "people" => "required|numeric|between:4,32",
            "institution" => "required|string|max:256",
            "file" => "nullable|mimes:pdf|max:5120",
        ];
    }

    public function currentMonthHasAvailableDays():bool
    {
        $today = Carbon::now();
        $lastDay = Carbon::now()->endOfMonth();

        if ($today->isLastOfMonth()) {
            return false;
        }

        $count = $today->day+1;

        for ($i=$count;$i<=$lastDay->day;$i++) {
            $today->addDay();

            if (!$today->isWeekend() && !$today->isLastOfMonth()) {
                return true;
            }
        }

        return false;
    }
}
