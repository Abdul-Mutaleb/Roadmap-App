<?php

namespace App\Http\Controllers;

use App\Models\AddIdeas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;


class AddIdeasController extends Controller
{
    public function addIdeas(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $idea = AddIdeas::create([
                'title' => $request->title,
                'description' => $request->description,
                'added_by' => 'Admin'
            ]);

            return response()->json([
                'message' => 'Idea added successfully',
                'idea' => $idea
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Insert failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function IdeasList()
    {
        return response()->json(DB::table('add_ideas')->get());
    }

    public function deleteIdea($id) {
    $idea = AddIdeas::find($id);
    if ($idea) {
        $idea->delete();
        return response()->json(['message' => 'Deleted']);
    }
    return response()->json(['message' => 'Not found'], 404);
    }
}
