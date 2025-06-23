<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/main.css">
    @vite(['resources/css/main.css'])
    <style> 

        .sidebar-cstm {

            display: flex;
            justify-content: center;
            align-items: center;
            gap:20px
        }

        .main-cstm {

            width: calc(100% - 350px);
        }

    </style>
</head>
<body>
    <div class="main-wrapper">
        <div class="sidebar-cstm">
            <img src="" alt="">
            <a href="#">Dashboard</a>
        </div>
        <div class="main-cstm">
            @yield('content')
        </div>
    </div>
</body>
</html>