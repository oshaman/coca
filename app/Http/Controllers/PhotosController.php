<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PhotosController extends Controller
{
    public function index()
    {
        $title = 'Фото';

        $photo = '';
         return view('photo')->with(compact('photo', 'title'))->render();
    }
}
