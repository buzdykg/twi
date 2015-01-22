<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

//Route::group(['before' => 'auth'], function() {

	Route::get('/', ['uses' => 'HomeController@getIndex']);

	Route::get('/phone', ['uses' => 'PhoneHelper@items']);
	Route::get('/message', ['uses' => 'MessageHelper@items']);
	Route::post('/message', ['uses' => 'MessageHelper@add']);
//});

Route::get('/login', ['uses' => 'AuthController@getLogin']);
Route::get('/logout',['uses' => 'AuthController@getLogout']);
Route::post('login', ['uses' => 'AuthController@postLogin']);