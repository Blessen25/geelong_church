@extends('layout.layoutmain')

@section('page-title','Dashboard')

@section('content')
    <h1 class="headingh1tag">Contact</h1>
    <div class="table-scroll-wrapper">
       @if($contacts->isEmpty())
            <p class="text-center p-3 paratexttable">No contact messages to display.</p>
       @else
            <table class="table-cstm">
            <thead>
                <tr>
                    <th scope="col">Sl.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Country</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Message</th>
                </tr>
            </thead>
            <tbody>
                @foreach($contacts as $index => $contact)
                <tr>
                    <th scope="row">{{ $index + 1 }}</th>
                    <td>{{ $contact->name }}</td>
                    <td>{{ $contact->email }}</td>
                    <td>{{ $contact->phone_number }}</td>
                    <td>{{ $contact->country }}</td>
                    <td>{{ $contact->subject }}</td>
                    <td>{{ $contact->message }}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
       @endif
    </div>
    <div class="viewmorediv">
         <a href="/admin/contacts" class="viewmorebutt">View More</a>
    </div>
    <div class="eventsdiv">
        <h1 class="headingh1tag">Events</h1>
        <a href="#" class="viewmorebutt">Add Event</a>
    </div>
    <div class="table-scroll-wrapper">
         @if($events->isEmpty())
        <p class="text-center p-3 paratexttable">No events have been added recently.</p>
        @else
            <table class="table-cstm">
                <thead>
                    <tr>
                        <th scope="col">Sl.No</th>
                        <th scope="col">Event Name</th>
                        <th scope="col">Event Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($events as $index => $event)
                    <tr>
                        <th scope="row">{{ $index + 1 }}</th>
                        <td>{{ $event->event_name }}</td>
                        <td>{{ \Carbon\Carbon::parse($event->event_date)->format('d M Y') }}</td>
                        <td class="tdtableevent">
                            <a href="{{ route('events.edit', $event->id) }}">
                                <button type="button" class="btn btn-primary btncstmtag">Edit</button>
                            </a>
                            <form action="{{ route('events.destroy', $event->id) }}" method="POST" style="display:inline;">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger btncstmtag" onclick="return confirm('Are you sure?')">Delete</button>
                            </form>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        @endif
    </div>
    <div class="viewmorediv">
         <a href="/admin/events" class="viewmorebutt">View More</a>
    </div>
@endsection
