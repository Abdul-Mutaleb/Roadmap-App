<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AddIdeas extends Model
{
    use HasFactory;
    protected $table = 'add_ideas';
   protected $fillable = ['title', 'description', 'added_by'];
}
