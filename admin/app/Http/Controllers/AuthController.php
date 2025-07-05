<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    // Show login form
    public function showLoginForm() {
        return view('auth.login');
    }

    // Show signup form
    public function showSignupForm() {
        return view('auth.signup');
    }

    // Handle signup
    public function signup(Request $request) {
        $request->validate([
            'username' => 'required|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed',
        ]);

        User::create([
            'name' => $request->username,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return redirect()->route('login')->with('success', 'Account created! Please login.');
    }

    // Handle login (username or email)
    public function login(Request $request) {
        $credentials = $request->only('login', 'password');
        $field = filter_var($credentials['login'], FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        if (Auth::attempt([$field => $credentials['login'], 'password' => $credentials['password']])) {
            return redirect()->route('dashboard');
        }

        return back()->withErrors(['login' => 'Invalid credentials']);
    }

    public function logout() {
        Auth::logout();
        return redirect()->route('login');
    }
}