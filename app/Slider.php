<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Slider extends Model
{
    protected $fillable = ['video', 'alt', 'title', 'description'];

    public function getImage()
    {
        if (!empty($this->path)) {
            return asset('/assets/images/sliders/'.$this->path);
        } else {
            return asset('/assets/images/no-image.png');
        }
    }

    public function updateSlide($fields)
    {
        return $this->update($fields);
    }

    public function removeImage()
    {
        if (!empty($this->path)) {
            Storage::disk('public')->delete('images/sliders/' . $this->path);
        }
    }

    public function uploadImage($image)
    {
        if (null == $image) {
            return;
        }

        $this->removeImage();
        $filename = str_random(10) . time() . '.' . $image->extension();
        $image->storeAs('images/sliders', $filename, 'public');
        $this->path = $filename;
        $this->save();
    }

    public function remove()
    {
        $this->removeImage();
        $this->delete();
    }
}
