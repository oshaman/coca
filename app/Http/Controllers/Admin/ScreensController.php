<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\SliderRepository;
use App\Screen;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ScreensController extends Controller
{
    protected $sliderRepository;

    public function __construct(SliderRepository $sliderRepository)
    {
        $this->sliderRepository = $sliderRepository;
    }

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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

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

        if ($request->has('slider')) $this->sliderRepository->handle($request, $screen);


        return redirect()->back()->with(['status' => 'Екран збережено.']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
