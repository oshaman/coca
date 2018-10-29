<?php

namespace App\Http\Controllers\Admin;

use App\Excursion;
use App\Jobs\OrderCreated;
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

        $this->content = view('admin.contents.calendar.calendar')
            ->with([
                'today' => $calendar['today'],
                'currentDay' => $calendar['currentDay'],
                'excursions' => $calendar['excursions'],
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
        $this->validate($request, [
            "trip-month" => 'required|numeric|between:1,12',
            "trip-day" => "required|numeric|between:1,31",
            "interval" => "required|numeric|between:1,6",
            "name" => "required|string|max:256",
            "phone" => "required|string|max:256",
            "email" => "required|string|max:256",
            "position" => "required|string|max:256",
            "people" => "required|numeric|between:4,32",
            "institution" => "required|string|max:256",
            "file" => "nullable|mimes:pdf|max:5120",
        ]);

        $received_date = $this->repository->getRecivedDate($request);

        if (!$this->repository->validateDate($received_date)) {
            return redirect()->back()
                ->withInput()
                ->withErrors(['error' => 'Реєстрація на даний день закрита']);
        }

        if (null !== $this->repository->validateExcursion($received_date, $request->get('interval'))) {
            return redirect()->back()->withInput()->withErrors(['error' => 'Даний час вже заброньований']);
        }

        $this->excursion->add($request, $received_date);

        dispatch(new OrderCreated($this->excursion->email));

        return redirect()->back()->with(['status' => 'Екскурсію збережено.']);

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
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
