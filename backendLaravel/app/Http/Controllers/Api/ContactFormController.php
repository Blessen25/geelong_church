<?php

namespace App\Http\Controllers\Api;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactFormController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:30',
            'email' => 'required|email|max:50',
            'phone_number' => 'required|string|max:20',
            'country' => 'nullable|string|max:100',
            'subject' => 'nullable|string|max:200',
            'message' => 'required|string|max:500',
        ]);

       Contact::create($validated);

       return response()->json(['success'=> true,'message'=> 'Message sent successfully']);
    }
}