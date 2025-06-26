@extends ('layout.layoutmain')

@section('page-title','Event')

@section('content')
<h1 class="headingh1tag">Events</h1>
    <div class="table-scroll-wrapper">
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
             <tr>
                <th scope="row">1</th>
                <td>Mark Abraham</td>
                <td>mark.abraham.superlongemailaddress@example.com</td>
                <td class="tdtableevent">
                    <button type="button" class="btn btn-primary">Edit</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                </td>
             </tr>
             <tr>
                <th scope="row">2</th>
                <td>Jacob Varghese</td>
                <td>jacob.varghese.contactmail@example.org</td>
                <td class="tdtableevent">
                    <button type="button" class="btn btn-primary">Edit</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                </td>
                
             </tr>
             <tr>
                <th scope="row">3</th>
                <td>John Doe</td>
                <td>john.doe.professional.email@longdomainmail.com</td>
                <td class="tdtableevent">
                    <button type="button" class="btn btn-primary">Edit</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                </td>
             </tr>
         </tbody>
        </table>
    </div>
@endsection