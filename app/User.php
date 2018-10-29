<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'role_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function hasRole($name)
    {
        if ($this->role->name == $name) {
            return true;
        }
    }

    public static function add($fields)
    {
        $user = new static;
        $user->fill($fields);
        $user->save();

        return $user;
    }

    public function edit($fields)
    {
        $this->fill($fields);

        $this->save();
    }

    public function remove()
    {

        if(auth()->user()->id === $this->id){
            return ['status' => trans('admin.self_delete')];
        }

        $this->delete();
        return ['status' => trans('admin.user_deleted')];
    }

    public function generatePassword($password)
    {
        if($password != null)
        {
            $this->password = Hash::make($password);
            $this->save();
        }
    }

    /**
     * @param User $user
     * @param Request $request
     */
    public function toggleRole($request)
    {
        if(auth()->user()->id === $this->id){
            return ['status' => trans('admin.self_delete')];
        }

        if($this->role_id == $request->get('role_id')){
            return ['status' => 'Роль змінено'];
        }

        $this->role_id = $request->get('role_id');
        $this->save();
        return ['status' => 'Роль змінено'];

    }

}
