<?php

namespace App\Http\Controllers\Admin;

use App\Email;
use App\Rules\EmailRules;
use Illuminate\Http\Request;

class EmailsController extends AdminController
{

    protected $jss = '<script src="/admn/js/tinymce/tinymce.min.js"></script>';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->title = "Нагадування клієнтам";
        $this->body_class = 'content-page';
        $emails = Email::all();

        $this->content = view('admin.contents.emails')
            ->with(compact('emails'))
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

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Email $email)
    {
        $this->validate($request, [
            'subject' => 'required|string|max:256',
            'content' => 'required|string|max:10000',
            'copy' => [
                'nullable',
                'string',
                new EmailRules(),
            ],
        ]);

        $email->fill($request->all())->save();

        if($request->filled('copy')){
            $email->attachCopies($request->get('copy'));
        }

        return redirect()->back()->with(['status'=>'Контент збережено.']);

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
