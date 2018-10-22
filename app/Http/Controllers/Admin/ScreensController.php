<?php

namespace App\Http\Controllers\Admin;

use App\Screen;
use App\Slider;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ScreensController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function update(Request $request, Screen $screen)
    {

        $this->validate($request, [
            'content' => 'nullable|string|max:2000',
            'description' => 'nullable|string|max:2000',
            'headings' => 'nullable|array',
            'headings.*' => 'nullable|string|max:256',
            'slider' => 'nullable|array',
            'slider.*.video' => 'nullable|string|max:256',
            'slider.*.alt' => 'nullable|string|max:256',
            'slider.*.title' => 'nullable|string|max:256',
            'slider.*.description' => 'nullable|string|max:256',
            'slider.*.0' => 'nullable|mimes:jpg,png,jpeg|max:1024',

        ]);

        $screen->updateScreen($request->all());

        $slider = $request->only('slider');

        if (count($slider['slider'])) {

            foreach ($slider['slider'] as $fields) {

                $slide = $screen->slider()->where('id', $fields['id'])->first();

                if ($slide) {
                    $slide->updateSlide($fields);
                } else {
                    dd('create');
                }

                if(!empty($fields[0])){
                    $slide->uploadImage($fields[0]);
                }


            }
        }

        return redirect()->back()->with(['status'=>'Екран збережено.']);
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
