<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    @vite(['resources/css/main.css','resources/js/custom.js'])
</head>
<body>
    <div class="main-wrapper">
        <div class="sidebar-cstm">
            <img src="{{ Vite::asset('resources/images/Logo_new.png') }}" alt="Logo_img" class="Logo-imgclass">
            <hr class="line-cstm">
            <h1 class="sidebarh1tag">Pages</h1>
            <a href="/admin/dashboard" class="sidebaratag {{ Request::is('admin/dashboard') ? 'activesidebaratag' : '' }}"><i class="fa-solid fa-house icontagcstm"></i><span class="sidebartexttag">Dashboard</span></a>
            <a href="/admin/contacts" class="sidebaratag {{ Request::is('admin/contacts') ? 'activesidebaratag' : '' }}"><i class="fa-solid fa-address-card icontagcstm"></i><span class="sidebartexttag">Contact</span></a>
            <a href="/admin/events" class="sidebaratag {{ Request::is('admin/events') ? 'activesidebaratag' : '' }}"><i class="fa-solid fa-calendar-days icontagcstm"></i><span class="sidebartexttag">Events</span></a>
            <hr class="line-cstm">
            <h1 class="sidebarh1tag">Profile</h1>
            <a href="#" class="sidebaratag"><i class="fa-solid fa-user icontagcstm"></i><span class="sidebartexttag">Logout</span></a>
        </div>
        <div class="main-cstm">
            <div class="header_div">
                <div class="pages_div">
                    <span>Pages</span>
                    <span>/</span>
                    <span>@yield('page-title')</span>
                </div>
                <div class="profile_div">
                    <i id="OpenSideBar" class="fa-solid fa-bars icontagcstm"></i>
                    <i class="fa-regular fa-circle-user icontagcstm"></i>
                    <span>Blessen Vinoy Mathew</span>
                </div>
            </div>
            <div class="content-div">
                @yield('content')
            </div>
        </div>
    </div>
    <div id="outlayidman" class="outlaymainddiv">
    </div>
    <div id="sidebaridmain" class="sidebarrespdiv">
        <div class="sidebarhearder">
            <i id="CloseSideBar" class="fa-solid fa-xmark icontagcstm"></i>
        </div>
        <img src="{{ Vite::asset('resources/images/Logo_new.png') }}" alt="Logo_img" class="Logo-imgclass">
            <hr class="line-cstm">
            <h1 class="sidebarh1tag">Pages</h1>
            <a href="/admin/dashboard" class="sidebaratag {{ Request::is('admin/dashboard') ? 'activesidebaratag' : '' }}"><i class="fa-solid fa-house icontagcstm"></i><span class="sidebartexttag">Dashboard</span></a>
            <a href="/admin/contacts" class="sidebaratag {{ Request::is('admin/contacts') ? 'activesidebaratag' : '' }}"><i class="fa-solid fa-address-card icontagcstm"></i><span class="sidebartexttag">Contact</span></a>
            <a href="/admin/events" class="sidebaratag {{ Request::is('admin/events') ? 'activesidebaratag' : '' }}"><i class="fa-solid fa-calendar-days icontagcstm"></i><span class="sidebartexttag">Events</span></a>
            <hr class="line-cstm">
            <h1 class="sidebarh1tag">Profile</h1>
            <a href="#" class="sidebaratag"><i class="fa-solid fa-user icontagcstm"></i><span class="sidebartexttag">Logout</span></a>
    </div>
</body>
</html>