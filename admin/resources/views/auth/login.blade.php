<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    @vite(['resources/css/auth.css','resources/js/auth.js','resources/css/main.css'])
</head>
<body>
    <div class="loginparent">
        <div class="loginchild">
            <img src="{{ Vite::asset('resources/images/Logo_new.png') }}" alt="" class="loginimg">
            <form method="POST" action="{{ route('login') }}" class="loginform">
                @csrf
                <label for="Login" class="labelcstm">Username or Email Address</label>
                <input type="text" name="login" placeholder="Email or Username" class="inputcstmclass" maxlength="50" required />
                
                <label for="Password" class="labelcstm">Password</label>
                <input type="password" class="inputcstmclass" name="password" placeholder="Password" maxlength="20" required />
                
                <button type="submit" class="submitbuttonmodal viewmorebutt">Login</button>
                <div class="alreadyhave">
                    <p class="deletetext">Do not have an account? <a href="/signup" class="signupclrcstm">Signup</a></p>
                </div>
            </form>
        </div>
    </div>
</body>
</html>

