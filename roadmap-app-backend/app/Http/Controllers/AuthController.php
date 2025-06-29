<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //Register Method
    public function register(Request $request){
    $request->validate([
        'name' => 'required',
        'email' => 'required|unique:users',
        'password' => 'required|confirmed',
    ]);

    try {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response([
            'message' => "Registration Successful",
            'user' => $user,
        ], 200);
    } 
    catch (\Exception $exp) {
        return response([
            'message' => $exp->getMessage()
        ], 400);
    }
}


        //Login Method
  public function login(Request $request)
{
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    if (!Auth::attempt($request->only('email', 'password'))) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    $user = Auth::user();

    // For Laravel Sanctum token
    $token = $user->createToken('app')->plainTextToken;

    return response()->json([
        'user' => $user,
        'token' => $token,
    ]);
 }
 public function logout(Request $request) {
    $request->user()->currentAccessToken()->delete();  // Deletes the current token

    return response()->json(['message' => 'Logged out successfully']);
}
 
}