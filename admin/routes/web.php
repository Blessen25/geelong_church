<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PasswordResetController;


// Route::get('/', function () {
//     return view('welcome');
// });


Route::get('/', function () {
    return redirect(auth()->check() ? route('dashboard') : route('login'));
});

Route::fallback(function () {
    return redirect('/');
});

Route::get('/admin/contacts',[ContactController::class,'index'])->middleware('auth')->name('contacts.index');

Route::resource('/admin/events', EventController::class)->middleware('auth')->except(['show']);

Route::get('/admin/dashboard', [DashboardController::class, 'index'])
    ->middleware('auth')
    ->name('dashboard');


Route::get('/login',[AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login']);

Route::get('/signup', [AuthController::class, 'showSignupForm'])->name('signup');
Route::post('/signup', [AuthController::class, 'signup']);

Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

// 👇 Forget Password
Route::get('/forget-password', [PasswordResetController::class, 'showLinkRequestForm'])->name('password.request');
Route::post('/forget-password', [PasswordResetController::class, 'sendResetLinkEmail'])->name('password.email');
Route::get('/reset-password/{token}', [PasswordResetController::class, 'showResetForm'])->name('password.reset');
Route::post('/reset-password', [PasswordResetController::class, 'reset'])->name('password.update');