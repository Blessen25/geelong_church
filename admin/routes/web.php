<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EventController;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/',function() {

    return view('dashboard');
});

Route::get('/contact',function() {

    return view('contact');
});

Route::get('/event',function(){

    return view('event');
});

Route::get('/admin/contacts',[ContactController::class,'index'])->name('contacts.index');

Route::resource('/admin/events',EventController::class)->except(['show']);


