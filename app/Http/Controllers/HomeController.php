<?php

namespace App\Http\Controllers;

use App\Repositories\CalendarRepository;
use App\Screen;
use App\Seo;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    protected $repository;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(CalendarRepository $repository)
    {
//        $this->middleware('auth');
        $this->repository = $repository;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $screens = Screen::with('slider')->get();

        $seo = Seo::first();

        return view('main.index')->with(compact('screens', 'seo'));
    }

    public function getCalendar()
    {
        $maximal_allowed_day = $this->repository->getMaximalAllowedDay()->format('Y-m-d');

        $disabledDays = $this->repository->getDisabledDays();

        $available_excursions = $this->repository->getAvailableExcursionIntervals();

        $first_available_day = $this->repository->getFirstAvailableDay();

        return  [
            'max_day' => $maximal_allowed_day,
            'disabled' => $disabledDays,
            'excursions' => $available_excursions,
            'first_available_day' => $first_available_day
        ];

    }

    public function addExcursions(Request $request)
    {
        $this->validate($request, $this->repository->getArrayForCreateValidation());

        $result = $this->repository->addExcursion($request);

        return $result;
    }
}
