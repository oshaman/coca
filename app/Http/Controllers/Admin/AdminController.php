<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Gate;
use Menu;

abstract class AdminController extends Controller
{
    protected $template = 'admin.index';
    protected $content = false;
    protected $title;
    protected $jss;
    protected $vars;
    protected $body_class;

    public function renderOutput()
    {
        $this->vars = array_add($this->vars, 'title', $this->title);
        $this->vars = array_add($this->vars, 'jss', $this->jss);
        $this->vars = array_add($this->vars, 'body_class', $this->body_class);

        $this->vars = array_add($this->vars, 'content', $this->content);

        return view($this->template)->with($this->vars);
    }

    /**
     * @return string
     * @throws \Throwable
     */
    public static function getMenu()
    {
        $menu =  Menu::make('adminMenu', function ($menu) {

            if (Gate::allows('VIEW_ADMIN')) {
                $menu->add("Редагування контенту", array('route' => 'admin.index'))
                    ->link->attr(['class' => 'nav img-content']);


                $menu->add("Календар екскурсій", array('route' => 'admin.calendar.index'))
                    ->link->attr(['class' => 'nav img-calendar'])
                    /*->divide( ['class' => 'hr-menu'] )*/;
                $menu->divide( ['class' => 'hr-menu'] );
                $menu->add("SEO текст", array('route' => 'admin.seo.index'))->link->attr(['class' => 'nav img-seo']);
                $menu->add("Нагадування клієнтам", array('route' => 'admin.emails.index'))->link->attr(['class' => 'nav img-bell']);
                $menu->add("Чат бот", array('route' => 'admin.bot.index'))->link->attr(['class' => 'nav img-robotic']);
                $menu->add("Рамки для фото", array('route' => 'admin.photo-frame.index'))->link->attr(['class' => 'nav img-frame']);
            }

            if (Gate::allows('EDIT_USERS')) {
                $menu->add("Користувачі сайту", array('route' => 'admin.users.index'))->link->attr(['class' => 'nav img-users']);
            }
        });

        return view('admin.navigation')->with('menu', $menu)->render();
    }
}
