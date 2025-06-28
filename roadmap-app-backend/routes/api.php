<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AddIdeasController;
use Illuminate\Support\Facades\DB;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Route to add ideas
Route::post('/admin/add-ideas', [AddIdeasController::class, 'addIdeas']);
// Route to get the list of ideas
Route::get('/admin/manage-ideas', [AddIdeasController::class, 'IdeasList']);
// Route to delete an idea
Route::delete('/admin/delete-idea/{id}', [AddIdeasController::class, 'deleteIdea']);
// Route to update an idea
Route::put('/admin/update-idea/{id}', [AddIdeasController::class, 'updateIdea']);


