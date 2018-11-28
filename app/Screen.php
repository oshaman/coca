<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Screen extends Model
{
    protected $fillable = ['content', 'additionally', 'headings', 'description'];

    protected $casts = [
        'headings' => 'array',
    ];

    public function slider()
    {
        return $this->hasMany(Slider::class)->orderBy('created_at', 'asc');
    }

    public function updateScreen($fields)
    {
        $this->update($fields);
        return $this;
    }

}
