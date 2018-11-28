<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DisabledDay extends Model
{
    protected $fillable = ['val'];
    public $timestamps = false;


    protected $casts = [
        'val'=>'date'
    ];

    public static function updateDays($data): bool
    {
        $day = static::getDay($data['val']);

        if (null == $day) {
            if ((int)$data['status']) {
                static::create(['val'=>$data['val']]);
                return true;
            } else {
                return false;
            }
        } else{
            if ((int)$data['status']) {
                return false;
            } else {
                $day->delete();
                return true;
            }
        }

    }

    public static function getDay($val)
    {
        return static::whereVal($val)->first();
    }
}
