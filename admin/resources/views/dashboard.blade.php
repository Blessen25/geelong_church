@extends('layout.layoutmain')

@section('page-title','Dashboard')

@section('content')
    <h1 class="headingh1tag">Contact</h1>
    <div class="table-scroll-wrapper">
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
             <tr>
                <th scope="row">1</th>
                <td>Mark Abraham</td>
                <td>mark.abraham.superlongemailaddress@example.com</td>
                <td>+1-202-555-0143</td>
                <td>United States</td>
                <td>Project Inquiry</td>
                <td>Hello, I would like to know more about your services in detail. Please get back to me soon. Thanks!</td>
             </tr>
             <tr>
                <th scope="row">2</th>
                <td>Jacob Varghese</td>
                <td>jacob.varghese.contactmail@example.org</td>
                <td>+91-98460-12345</td>
                <td>India</td>
                <td>Partnership</td>
                <td>We’re looking to collaborate on future events. Please schedule a meeting for further discussion.</td>
             </tr>
             <tr>
                <th scope="row">3</th>
                <td>John Doe</td>
                <td>john.doe.professional.email@longdomainmail.com</td>
                <td>+44-20-7946-0958</td>
                <td>United Kingdom</td>
                <td>Feedback</td>
                <td>I love your platform! Just wanted to give some feedback on how it could be even better with more integrations.</td>
             </tr>
         </tbody>
        </table>
    </div>
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
                    <button type="button" class="btn btn-primary btncstmtag">Edit</button>
                    <button type="button" class="btn btn-danger btncstmtag">Delete</button>
                </td>
             </tr>
             <tr>
                <th scope="row">2</th>
                <td>Jacob Varghese</td>
                <td>jacob.varghese.contactmail@example.org</td>
                <td class="tdtableevent">
                    <button type="button" class="btn btn-primary btncstmtag">Edit</button>
                    <button type="button" class="btn btn-danger btncstmtag">Delete</button>
                </td>
                
             </tr>
             <tr>
                <th scope="row">3</th>
                <td>John Doe</td>
                <td>john.doe.professional.email@longdomainmail.com</td>
                <td class="tdtableevent">
                    <button type="button" class="btn btn-primary btncstmtag">Edit</button>
                    <button type="button" class="btn btn-danger btncstmtag">Delete</button>
                </td>
                
             </tr>
         </tbody>
        </table>
    </div>

@endsection
