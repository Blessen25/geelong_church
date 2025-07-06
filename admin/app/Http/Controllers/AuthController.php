<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function showSignupForm()
    {
        return view('auth.signup');
    }

    public function signup(Request $request)
    {
        $request->validate([
            'username' => 'required|string|max:255|unique:users,username',
            'email' => 'required|email|unique:users,email',
            'password' => [
                'required',
                'confirmed',
                'min:8',
                'regex:/[a-z]/',      // lowercase
                'regex:/[A-Z]/',      // uppercase
                'regex:/[0-9]/',      // digit
                'regex:/[@$!%*?&]/'   // special character
            ],
        ]);

        // Save user to DB
        User::create([
            'username' => $request->username,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return redirect()->route('login')->with('success', 'Signup successful. Please login.');
    }

    public function showLoginForm()
    {
        return view('auth.login');
    }

   public function login(Request $request)
    {
        $credentials = $request->only('login', 'password');
        $fieldType = filter_var($credentials['login'], FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        // 🔍 Debug
        $user = \App\Models\User::where($fieldType, $credentials['login'])->first();
        if (!$user) {
            return back()->withErrors(['login' => 'User not found.']);
        }

        if (!\Hash::check($credentials['password'], $user->password)) {
            return back()->withErrors(['login' => 'Password is incorrect.']);
        }

        if (auth()->attempt([$fieldType => $credentials['login'], 'password' => $credentials['password']])) {
            $request->session()->regenerate();
            return redirect()->route('dashboard');
        }

        return back()->withErrors([
            'login' => 'Invalid credentials.',
        ]);
    }

    public function logout(Request $request)
    {
        auth()->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login');
    }
}