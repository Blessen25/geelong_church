<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" crossorigin="anonymous" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    @vite(['resources/css/auth.css','resources/js/auth.js','resources/css/main.css'])
</head>
<body>
    <div class="loginparent">
        <div class="loginchild">
            <img src="{{ Vite::asset('resources/images/Logo_new.png') }}" alt="" class="loginimg">
            <form method="POST" action="{{ route('password.email') }}" class="loginform">
                @csrf
                <label for="email" class="labelcstm">Enter your Email Address</label>
                <input type="email" name="email" class="inputcstmclass" placeholder="Email" required />

                @if (session('status'))
                    <div class="alert alert-success mt-2 deletetext">{{ session('status') }}</div>
                @endif

                @error('email')
                    <div class="text-danger mt-2 deletetext">{{ $message }}</div>
                @enderror

                <button type="submit" class="submitbuttonmodal viewmorebutt">Send Reset Link</button>

                <div class="alreadyhave">
                    <p class="deletetext">Back to <a href="{{ route('login') }}" class="signupclrcstm">Login</a></p>
                </div>
            </form>
        </div>
    </div>
</body>
</html>