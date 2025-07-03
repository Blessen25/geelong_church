@extends('layout.layoutmain')
@section('page-title','Events')
@section('content')
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
@endsection