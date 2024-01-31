<?php

use App\Http\Controllers\UserData;
use Illuminate\Support\Facades\Route;

Route::post('register', [UserData::class, 'register']);
Route::post('login', [UserData::class, 'login']);