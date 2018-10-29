<?php

namespace App\Http\Controllers\Admin;

use App\Screen;

class IndexController extends AdminController
{
    protected $jss = '<script src="/admn/js/tinymce/tinymce.min.js"></script>';

    public function show()
    {
        $this->title = "Редагування контенту";
        $this->body_class = 'content-page';
        $screens = Screen::all();
        $screens->load('slider');

        $this->content = view('admin.contents.screens.index')
            ->with(compact('screens'))->render();
        return $this->renderOutput();
    }
}
