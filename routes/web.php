<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index')->name('home');
Route::match(['post', 'get'], '/get-calendar', 'HomeController@getCalendar');
Route::post('/add-excursions', 'HomeController@addExcursions');

Route::prefix('admin')
    ->name('admin.')
    ->middleware('admin')
    ->namespace('Admin')
    ->group(function () {
        Route::get('/', 'IndexController@show')->name('index');
        Route::resource('users', 'UsersController')->except(['create'])->middleware('users');
        Route::resource('seo', 'SeoController')->only(['update', 'index']);
        Route::resource('screen', 'ScreensController')->only(['update']);
        Route::resource('bot', 'BotController')->only(['update', 'index']);
        Route::resource('emails', 'EmailsController')->only(['update', 'index']);
        Route::delete('slider/{slider}', 'SliderController@destroy')->name('slide.delete');

        Route::resource('calendar', 'CalendarController')->only(['index', 'store', 'destroy', 'update']);
        Route::post('get-excursions', 'AjaxController@getExcursions');

    });

Auth::routes();
