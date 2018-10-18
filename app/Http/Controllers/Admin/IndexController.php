<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Gate;

class IndexController extends AdminController
{
    public function show()
    {
        $this->title = "Календар екскурсій";

        $this->content = view('admin.contents.calendar')->with(compact('users'))->render();
        return $this->renderOutput();
    }
}
