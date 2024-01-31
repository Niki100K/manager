<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UserData extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function register(Request $request)
    {
        $validator = validator($request->all(), [
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
        ]);
    
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }
    
        $user = User::create([
            'firstName' => $request->input('firstName'),
            'lastName' => $request->input('lastName'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'remember_token' => Str::random(10),
        ]);
    
        $token = $user->createToken('token')->plainTextToken;
    
        return response()->json(['token' => $token, 'user' => $user], 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('password');
        
        $users = User::all(); // Вземи всички потребители от базата данни
    
        foreach ($users as $user) {
            if (password_verify($credentials['password'], $user->password)) {
                // Ако паролата отговаря, направи необходимите действия
                $token = $user->createToken('token')->plainTextToken;
                return response()->json(['token' => $token, 'user' => $user], 200);
            }
        }
    
        // Ако не се намери потребител със съответната парола
        return response()->json(['error' => 'Invalid password'], 401);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
