<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Storage;

class Frame extends Model
{
    protected $fillable = ['title'];


    public static function add($fields)
    {
        $frame = static::create($fields);
        return $frame;
    }

    public function loadImage($file)
    {
        if (null == $file) {
            return;
        }

        $this->removeImage();
        $filename = str_random(10) . time() . '.' . $file->extension();
        $file->storeAs('images/frames', $filename, 'public');
        $this->filename = $filename;
        $this->save();
    }

    public function removeImage()
    {
        if (!empty($this->filename)) {
            Storage::disk('public')->delete('images/frames/' . $this->filename);
        }
    }

    public function deleteFrame():void
    {
        $this->removeImage();
        $this->delete();
    }

    public function getFrame()
    {
        if (!empty($this->filename)) {
            return asset('/assets/images/frames/'.$this->filename);
        } else {
            return asset('/assets/images/no-image.png');
        }
    }
}
