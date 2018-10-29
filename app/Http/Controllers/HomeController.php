<?php

namespace App\Http\Controllers;

use App\Repositories\CalendarRepository;
use Illuminate\Http\Request;
use Carbon\Carbon;

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
        $this->middleware('auth');
        $this->repository = $repository;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('welcome');
    }

    public function getCalendar()
    {
        $maximal_allowed_day = $this->repository->getMaximalAllowedDay()->format('Y-m-d');

        $disabledDays = $this->repository->getDisabledDays();

        $available_excursions = $this->repository->getAvailableExcursions();


        return  [
            'max_day' => $maximal_allowed_day,
            'disabled' => $disabledDays,
            'excursions' => $available_excursions
        ];
    }
}
