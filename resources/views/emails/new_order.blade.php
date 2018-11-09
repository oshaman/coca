@component('mail::message')
# Дані щодо бронювання

{!! $email->content??'' !!}

{{--Дякуємо,<br>--}}
{{--{{ config('app.name') }}--}}
@endcomponent
