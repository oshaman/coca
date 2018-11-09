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
        'interval',
    ];

    public function add($request, $date)
    {
        $this->fill($request->all());

        $this->created_at = $date;

        $this->status = $request->get('status') ?? 2;

        if ($request->has('file')) {
            $this->uploadFile($request->file('file'));
        }

        $this->save();
    }

    /**
     * @param $request
     * @param Carbon $date
     */
    public function editExcursion($request, $date)
    {
        $this->fill($request->all());
        $this->created_at = $date;

        if ($request->has('file')) {
            $this->uploadFile($request->file('file'));
        }

        if ($request->has('photo')) {
            $this->uploadPhoto($request->file('photo'));
        }

        $this->updateStatus($request->get('status'));

        $this->save();

    }

    public function deleteExcursion(): array
    {
        $this->removeFile();
        $this->removePhoto();
        $this->delete();
        return ['status' => 'Екскурсію видалено.'];
    }

    public function updateStatus($status): void
    {
        if ($this->status != $status) {
            $this->status = $status;
            //TODO: send email

            if (3 === $this->status) {
                dispatch(new OrderCreated($this->email, Email::getEmail('second')));
            }

            if (4 === $this->status) {
                dispatch(new OrderCreated($this->email, Email::getEmail('fourth')));
            }

        }
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
        return config('settings.status_class.' . $this->status);
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

    public function uploadPhoto($file)
    {
        if (null == $file) {
            return;
        }

        $this->removePhoto();
        $filename = str_random(10) . time() . '.' . $file->extension();
        $file->storeAs('images/group-photos', $filename, 'public');
        $this->photo = $filename;
        $this->save();
    }

    public function removePhoto()
    {
        if (!empty($this->photo)) {
            Storage::disk('public')->delete('images/group-photos/' . $this->photo);
        }
    }

    public function isIntervalChanged($date)
    {
        return $date->format('Y-m-d') !== $this->created_at->format('Y-m-d');
    }
}
