<?php

namespace App\Http\Controllers;

use App\Excursion;
use App\Frame;
use Illuminate\Http\Request;

class PhotosController extends Controller
{
    public function index($photo)
    {
        $excursion = Excursion::where('token', $photo)->first();

        if(!$excursion) {
            abort(404);
        }



        $title = 'Фото';

        $frames = Frame::all();
        return view('photo')->with(compact('photo', 'title', 'frames', 'excursion'))->render();
    }
}
