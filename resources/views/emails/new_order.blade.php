@component('mail::message')
# Introduction

{!! $email->content??'' !!}

Дякуємо,<br>
{{ config('app.name') }}
@endcomponent
