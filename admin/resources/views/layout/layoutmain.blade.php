<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    @vite(['resources/css/main.css'])
</head>
<body>
    <div class="main-wrapper">
        <div class="sidebar-cstm">
            <img src="{{ Vite::asset('resources/images/Logo_white.png') }}" alt="Logo_img">
            <a href="#">Dashboard</a>
        </div>
        <div class="main-cstm">
            @yield('content')
        </div>
    </div>
</body>
</html>