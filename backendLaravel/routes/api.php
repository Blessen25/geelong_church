<?php

use App\Http\Controllers\Api\ContactFormController;

Route::post('/contact',[ContactFormController::class,'store']);