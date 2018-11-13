<?php

namespace App\Http\Controllers\Admin;

use App\Jobs\AddUser;
use App\Role;
use App\User;
use Illuminate\Http\Request;
use Gate;

class UsersController extends AdminController
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->body_class = 'user-page';
        $this->title = 'Користувачі сайту';
        $roles = Role::all()->pluck('uk_name', 'id');

        $users = User::with('role')->paginate(20);

        $this->content = view('admin.contents.users')->with(compact('users', 'roles'))->render();
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
     * @return array
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'role_id' => 'numeric|between:1,1000',
        ]);

        $user = User::add($request->all());
        $user->generatePassword($request->get('password'));

        dispatch(new AddUser($user, $request->get('password')));

        return ['success'=>'Користувача створено'];
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
     * @return array
     */
    public function update(Request $request, User $user)
    {
        $this->validate($request, [
           'role_id' => 'required|numeric|between:1,10',
        ]);
//        return ['success'=>$request->get('role_id')];
        $result = $user->toggleRole($request);
        return $result;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $result = $user->remove();
        return $result;
    }

}
