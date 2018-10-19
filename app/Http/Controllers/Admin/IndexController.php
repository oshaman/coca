<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Gate;

class IndexController extends AdminController
{
    protected $jss = '<script src="/admn/js/tinymce/tinymce.min.js"></script>';

    public function show()
    {
        $this->title = "Календар екскурсій";

        $this->content = view('admin.contents.contents')->with(compact('users'))->render();
        return $this->renderOutput();
    }
}
