<?php

namespace App\Http\Controllers\Admin;

use App\DisabledDay;
use App\Repositories\CalendarRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Gate;

class AjaxController extends Controller
{
    public function getExcursions(Request $request)
    {
        $this->validate($request, [
            'days' => 'required|date_format:Y-m-d'
        ]);


        $date = $request->get('days');

        $isDisabled = DisabledDay::getDay($date);

        $result = CalendarRepository::getExcursionByDate($date);

        $view = view('admin.contents.calendar.info-window')->with(compact('result', 'date', 'isDisabled'))->render();

        return response($view, 200);

    }

    public function toggleDayStatus(Request $request)
    {
        if (Gate::denies('VIEW_ADMIN')) {
            return false;
        }

        $this->validate($request, [
            'status' => ['required', 'boolean'],
            'val' => 'required|date_format:Y-m-d'
        ]);


        $result = DisabledDay::updateDays($request->all());

        if ($result) {
            return response()->json(['status'=>'success'], 200);
        }

        return response()->json(['errors'=>'error'], 500);
    }
}
