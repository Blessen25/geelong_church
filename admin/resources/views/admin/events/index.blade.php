@extends('layout.layoutmain')
@section('page-title','Events')
@section('content')
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
                        <button type="submit" class="btn btn-danger btncstmtag" onclick="openDeleteModal({{ $event->id }})">Delete</button>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    @endif
</div>
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
                    <input type="date" class="inputcstmclass" name="event_date" id="eventDate" placeholder="Enter Event Date" min="{{ date('Y-m-d') }}" required>
                    <button class="submitbuttonmodal viewmorebutt">Submit</button>
                </div>
            </form>
        </div>
     </div>

    <!-- Delete Event -->
     <div class="deleteedoverlay" id="deleteModalOverlay">
        <div id="deleteModal" class="delete-modal">
            <div class="editaddmodalheader">
                <h1 class="headingh1tag" id="eventModalTitle">Delete Event</h1>
                <i id="ClosedeleteModal" class="fa-solid fa-xmark icontagcstm" onclick="CloseEventModaldelete()"></i>
            </div>
            <form id="deleteForm" method="POST">
                @csrf
                @method('DELETE')
                <p class="deletetext">Are you sure you want to delete this event?</p>
                <div class="deletefooterdiv">
                    <button class='viewmorebutt submitbuttonmodal' type='button' onclick="CloseEventModaldelete()">No</button>
                    <button class='viewmorebutt' type='submit'>Yes</button>
                </div>
            </form>
        </div>
     </div>
@endsection