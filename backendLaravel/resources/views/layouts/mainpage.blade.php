<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title','Admin Panel')</title>
    @vite(['resources/sass/app.scss', 'resources/js/app.js','resources/sass/mainpage.scss'])
</head>
<body>
    <div class="w-100 d-flex mainpage-cstmstyle">
        <div class="sidebar-layoutcstm">
            <img src="{{asset('images/Logo.png')}}" alt="Logo-Image" class="image_div">
        </div>
        <div class="main-layoutcstm">

        </div>
    </div>
</body>
</html>