<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = ['name'];

    /**
     *  Get the user associated with the role.
     */
    public function users()
    {
        return $this->hasMany(User::class);
    }

}
