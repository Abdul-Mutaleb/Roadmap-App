<?php

namespace App\Http\Controllers;

use App\Models\Comment; 
use Illuminate\Http\Request;

class CommentController extends Controller
{
   
    public function AddComments(Request $request)
    {
        $request->validate([
            'idea_id' => 'required|exists:add_ideas,id',
            'comment' => 'required'
        ]);

     
        $comment = Comment::create([
            'idea_id' => $request->idea_id,
            'user_id' => auth()->id(),
            'comment' => $request->comment
        ]);

        return response()->json($comment->load('user'), 201);
    }

   
    public function getByIdea($id)
    {
        return Comment::with('user:id,name')
                      ->where('idea_id', $id)
                      ->latest()
                      ->get();
    }
    
    public function update(Request $request, $id)
    {
        $request->validate([
            'comment' => 'required|string|max:1000',
        ]);

        $comment = Comment::findOrFail($id);

        if ($comment->user_id !== auth()->id()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $comment->comment = $request->comment;
        $comment->save();

        return response()->json($comment->load('user'));
    }

    
    public function destroy($id)
    {
        $comment = Comment::findOrFail($id);

        if ($comment->user_id !== auth()->id()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $comment->delete();

        return response()->json(['message' => 'Comment deleted']);
    }
}
