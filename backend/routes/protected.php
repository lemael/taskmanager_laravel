<?php
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\api\TaskController;
use App\Http\Controllers\Admin\UserController;

Route::middleware(['auth', 'is_admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
    Route::get('/tasks', [PageController::class, 'index'])->name('tasks.tasks');
    Route::get('/users', [UserController::class, 'index'])->name('admin.users');
});
