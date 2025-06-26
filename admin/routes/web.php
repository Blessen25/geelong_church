<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/',function() {

    return view('dashboard');
});

Route::get('/contact',function() {

    return view('contact');
});