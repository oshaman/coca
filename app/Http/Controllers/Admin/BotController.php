<?php

namespace App\Http\Controllers\Admin;

use App\Bot;
use Illuminate\Http\Request;

class BotController extends AdminController
{
//    protected $jss = '<script src="/admn/js/tinymce/tinymce.min.js"></script>';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->title = "Редагувати чат-бот";
        $this->body_class = 'content-page';
        $bots = Bot::all();

        $this->content = view('admin.contents.bots')
            ->with(compact('bots'))
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bot $bot)
    {
        $this->validate($request, [
            'question'=>'required|string|max:512',
            'answer'=>'required|string|max:512',
        ]);

        $bot->fill($request->all())->save();
        return redirect()->back()->with(['status'=>'Контент збережено.']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
