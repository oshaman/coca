<?php

namespace App;

use App\Traits\Dates;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class DisabledDay extends Model
{
    use Dates;

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

    public function scopeCurrent($query)
    {
        return $query->where([['val', '>', Carbon::now()->subMonth()->startOfMonth()], ['val', '<', $this->getMaximalAllowedDay()]]);
    }
}
