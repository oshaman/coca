<?php

namespace App\Http\Controllers\Admin;

use App\Frame;
use Illuminate\Http\Request;

class PhotosController extends AdminController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->body_class = 'frame-page';

        $frames = Frame::all();

        $this->content = view('admin.photos.index')->with(compact('frames'))->render();

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
        $this->validate($request,[
            'title'=>'required|string|max:256',
            "filename" => "required|mimes:jpeg,jpg,png|max:5120",
        ]);

        $frame = Frame::add($request->all());

        $frame->loadImage($request->file('filename'));

        return redirect()->back()->with(['status'=>'Рамку додано.']);
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id):array
    {
        $frame = Frame::where('id', $id)->first();

        if (!$frame) {
            abort(404);
        }

        $frame->deleteFrame();

        return ['status'=>'Рамку видалено'];
    }
}
