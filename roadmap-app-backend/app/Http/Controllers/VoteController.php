<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vote;

class VoteController extends Controller
{
    public function vote(Request $request)
    {
        $request->validate([
            'idea_id' => 'required|exists:add_ideas,id',
        ]);

        $user_id = auth()->id();

        $existing = Vote::where('idea_id', $request->idea_id)
                        ->where('user_id', $user_id)
                        ->first();

        if ($existing) {
            return response()->json(['message' => 'Already voted'], 200);
        }

        Vote::create([
            'idea_id' => $request->idea_id,
            'user_id' => $user_id,
            'vote' => true
        ]);

        return response()->json(['message' => 'Vote recorded'], 201);
    }
}
