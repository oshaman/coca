<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\CalendarRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AjaxController extends Controller
{
    public function getExcursions(Request $request)
    {
        $this->validate($request, [
            'days' => 'required|date_format:Y-m-d'
        ]);


        $date = $request->get('days');

        $result = CalendarRepository::getExcursionByDate($date);

        $view = view('admin.contents.calendar.info-window')->with(compact('result', 'date'))->render();

        return response($view, 200);

    }
}
