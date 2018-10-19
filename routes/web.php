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

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('admin')
    ->name('admin.')
    ->middleware('admin')
    ->namespace('Admin')
    ->group(function () {
        Route::get('/', 'IndexController@show')->name('index');
        Route::resource('users', 'UsersController')->except(['create'])->middleware('users');
        Route::resource('seo', 'SeoController')->only(['update', 'index']);
    });

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
