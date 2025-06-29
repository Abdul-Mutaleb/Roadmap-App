<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AddIdeasController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\VoteController;
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

Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

 //totoal user 
Route::get('/admin/total-users', [AddIdeasController::class, 'totalUsers']);
 //totoal ideas
Route::get('/admin/total-ideas', [AddIdeasController::class, 'totalIdeas']);
//comment in ideas listetd
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/comments', [CommentController::class, 'AddComments']);
    Route::put('/comments/{id}', [CommentController::class, 'update']);
    Route::delete('/comments/{id}', [CommentController::class, 'destroy']);
});
Route::get('/comments/{id}', [CommentController::class, 'getByIdea']);
//voting user
Route::post('/vote', [VoteController::class, 'addVote'])->middleware('auth:sanctum');

