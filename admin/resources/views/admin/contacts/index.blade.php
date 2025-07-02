@extends ('layout.layoutmain')
@section('page-title','Contacts')
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
@endsection