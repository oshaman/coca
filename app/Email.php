<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Email extends Model
{
    protected $fillable = ['subject', 'content'];

    protected $casts = [
        'copy' => 'array',
    ];

    public function getCopiesAttribute(): string
    {
        return implode(',', $this->copy ?? []);
    }

    public function attachCopies($str): void
    {
        $this->copy = explode(',', preg_replace('/[\s]/', '', $str));
        $this->save();
    }
}
