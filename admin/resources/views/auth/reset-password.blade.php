<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Password</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    @vite(['resources/css/auth.css','resources/js/auth.js','resources/css/main.css'])
</head>
<body>
    <div class="loginparent">
        <div class="loginchild">
            <img src="{{ Vite::asset('resources/images/Logo_new.png') }}" alt="" class="loginimg">
            <form method="POST" action="{{ route('password.update') }}" class="loginform">
                @csrf
                <input type="hidden" name="token" value="{{ $token }}">

                <label for="email" class="labelcstm">Email Address</label>
                <input type="email" name="email" placeholder="Email" class="inputcstmclass" value="{{ old('email') }}" maxlength="50" required>

                <label for="password" class="labelcstm">New Password</label>
                <div class="password-wrapper">
                    <input type="password" name="password" class="inputcstmclass" placeholder="New Password" maxlength="20" required>
                </div>
                <div id="passwordHelp" class="text-danger small mt-1 deletetext">
                    Your password must be at least 8 characters long, contain at least one number, and have a mixture of uppercase and lowercase letters with a special character.
                </div>
                <div class="strength-bar mt-2">
                    <span class="step" id="step1"></span>
                    <span class="step" id="step2"></span>
                    <span class="step" id="step3"></span>
                    <span class="step" id="step4"></span>
                </div>

                <label for="password_confirmation" class="labelcstm">Confirm New Password</label>
                <input type="password" name="password_confirmation" placeholder="Confirm Password" class="inputcstmclass" maxlength="20" required>

                <button type="submit" class="submitbuttonmodal viewmorebutt">Reset Password</button>

                <div class="alreadyhave">
                    <p class="deletetext">Remembered your password? <a href="/login" class="signupclrcstm">Login</a></p>
                </div>
            </form>
        </div>
    </div>
</body>
</html>
