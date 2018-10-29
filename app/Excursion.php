<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Excursion extends Model
{
    protected $fillable = [
        'name',
        'phone',
        'email',
        'position',
        'people',
        'institution',
        'file',
        'photo',
        'comment',
        'status',
        'interval',
    ];

    public function add($request, $date)
    {
        $this->fill($request->all());

        $this->created_at = $date;
        $this->status = 2;

        if ($request->has('file')) {
            $this->uploadFile($request->file('file'));
        }

        $this->save();
    }

    public function getCurrentDayAttribute()
    {
        return $this->created_at->day;
    }

    public function getCurrentMonthAttribute()
    {
        return $this->created_at->month;
    }

    public function isCurrentMonth()
    {
        return $this->created_at->month == Carbon::now()->month;
    }

    public function getDateAttribute()
    {
        return $this->created_at->format('Y-m-d');
    }

    public function getStatusClassAttribute()
    {
        return config('settings.status_class.'.$this->status);
    }

    public function removeFile()
    {
        if (!empty($this->file)) {
            Storage::disk('public')->delete('images/members/' . $this->file);
        }
    }

    public function uploadFile($file)
    {
        if (null == $file) {
            return;
        }

        $this->removeFile();
        $filename = str_random(10) . time() . '.' . $file->extension();
        $file->storeAs('images/members', $filename, 'public');
        $this->file = $filename;
        $this->save();
    }
}
