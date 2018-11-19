<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Seo extends Model
{
    protected $fillable = ['seo_title', 'seo_keywords', 'seo_description',
        'seo_text', 'og_title', 'og_description', 'og_image'];


    public function updateSeo($fields)
    {
        $this->fill($fields)->save();
        return $this;
    }

    public function setSeoTextAttribute($value)
    {

        $re = '/(<p>(&nbsp;)|(\s)<\/p>)|(<p><\/p>)/m';
        $this->attributes['seo_text'] = preg_replace($re, '', $value);

    }
}
