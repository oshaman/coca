<?php

namespace App\Http\Controllers\Admin;

use App\DisabledDay;
use App\Excursion;
use App\Repositories\CalendarRepository;
use Illuminate\Http\Request;

class CalendarController extends AdminController
{
    protected $repository;
    protected $excursion;

    public function __construct(CalendarRepository $repository, Excursion $excursion)
    {
        $this->repository = $repository;
        $this->body_class = 'calendar-page';
        $this->excursion = $excursion;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     * @throws \Throwable
     */
    public function index(Request $request)
    {
        $calendar = $this->repository->getCalendar($request);

        $currentMonthHasAvailableDays = $this->repository->currentMonthHasAvailableDays();

        $disabledDays = DisabledDay::current()->get();

        $this->content = view('admin.contents.calendar.calendar')
            ->with([
                'today' => $calendar['today'],
                'currentDay' => $calendar['currentDay'],
                'excursions' => $calendar['excursions'],
                'currentMonthHasAvailableDays' => $currentMonthHasAvailableDays,
                'disabledDays' => $disabledDays
            ])
            ->render();
        return $this->renderOutput();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $this->validate($request, $this->repository->getArrayForCreateValidation());

        $result = $this->repository->addExcursion($request);

        return redirect()->back()->with($result);

    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, $id)
    {
        $excursion = Excursion::where('id', $id)->first();

        if (!$excursion) {
            abort(404);
        }

        $this->validate($request, $this->repository->getArrayForUpdateValidation());

        $result = $this->repository->updateExcursion($request, $excursion);

        return redirect()->back()->with($result);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        /**
         * @var Excursion $excursion
         */
        $excursion = Excursion::where('id', $id)->first();

        if (!$excursion) {
            abort(404);
        }

        return redirect()->back()->with($excursion->deleteExcursion());
    }
}
