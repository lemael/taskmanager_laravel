<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TaskController;

Route::middleware('api')->group(function () {
  Route::get('/tasks', [TaskController::class, 'index']);   
  Route::post('/tasks', [TaskController::class, 'store']);  
});