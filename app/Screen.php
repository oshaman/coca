<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Screen extends Model
{
    protected $fillable = ['content', 'additionally', 'headings'];

    protected $casts = [
        'headings' => 'array',
    ];

    public function slider()
    {
        return $this->hasMany(Slider::class);
    }

    public function updateScreen($fields)
    {
        $this->update($fields);
        return $this;
    }

}