<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use App\Models\Event;

class DashboardController extends Controller
{

    public function index()
    {

        $contacts = Contact::latest()->take(5)->get();
        $events = Event::latest()->take(5)->get();

        return view('dashboard', compact('contacts','events'));
    }
    
}
