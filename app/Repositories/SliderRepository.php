<?php

namespace App\Repositories;

/**
 * Class SliderRepository
 * @package App\Repositories
 *
 * @property Screen $screen
 * @property Slider $slide
 * @property Request $request
 */

class SliderRepository
{
    public function handle($request, $screen)
    {
        $slider = $request->only('slider');

        if (count($slider['slider'])) {

            foreach ($slider['slider'] as $fields) {

                $slide = $screen->slider()->where('id', $fields['id'])->first();

                if ($slide) {
                    $slide->updateSlide($fields);
                } else {
                    $slide = $screen->slider()->create($fields);
                }

                if(!empty($fields[0])){
                    $slide->uploadImage($fields[0]);
                }

            }
        }
    }
}
