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
    @if($contacts->isNotEmpty())
        <div class="viewmorediv">
         <a href="/admin/contacts" class="viewmorebutt">View More</a>
        </div>
    @endif
    <div class="eventsdiv">
        <h1 class="headingh1tag">Events</h1>
        <button class="viewmorebutt" onclick="openAddModal()">Add Event</button>
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
                            <button type="button" class="btn btn-primary btncstmtag"
                                onclick="openEditModal({{ $event->id }}, '{{ $event->event_name }}', '{{ $event->event_date }}')">
                                Edit
                            </button>
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
    @if($events->isNotEmpty())
        <div class="viewmorediv">
         <a href="/admin/events" class="viewmorebutt">View More</a>
        </div>
    @endif

    <!-- Add/ Edit Event Modal -->
     <div class="addeditoverlay" id="eventModalOverlay">
        <div id="eventModal" class="editaddmodal" >
            <div class="editaddmodalheader">
                <h1 class="headingh1tag" id="eventModalTitle">Edit Event</h1>
                <i id="CloseEventModal" class="fa-solid fa-xmark icontagcstm" onclick="CloseEventModal()"></i>
            </div>
            <form action="#" method="POST" id="eventForm">
                @csrf
                <input type="hidden" name="_method" value="POST" id="formMethod">
                <div class="formmodalcstm">
                    <label class="labelcstm" for="event_name">Event Name</label>
                    <input class="inputcstmclass" type="text" name="event_name" id="eventName" placeholder="Enter Event Name" required/>
                    <label class="labelcstm" for="event_date">Event Date</label>
                    <input type="date" class="inputcstmclass" name="event_date" id="eventDate" placeholder="Enter Event Date" required>
                    <button class="submitbuttonmodal viewmorebutt">Submit</button>
                </div>
            </form>
        </div>
     </div>
@endsection
