<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\DashboardController;

// Route::get('/', function () {
//     return view('welcome');
// });



Route::get('/admin/contacts',[ContactController::class,'index'])->name('contacts.index');

Route::resource('/admin/events', EventController::class)->except(['show']);

Route::get('/admin/dashboard',[DashboardController::class,'index'])->name('dashboard');


Route::get('/login',[AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login']);

Route::get('/signup', [AuthController::class, 'showSignupForm'])->name('signup');
Route::post('/signup', [AuthController::class, 'signup']);

Route::post('/logout', [AuthController::class, 'logout'])->name('logout');