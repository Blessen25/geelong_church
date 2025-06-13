/* SHOW PASSWORD */

document.addEventListener('DOMContentLoaded',function() {

    const togglePassword1 = document.getElementById('typePasswordid1');
    const passwordInput1 = document.getElementById('password1');

    const togglePassword2 = document.getElementById('typePasswordid2');
    const passwordInput2 = document.getElementById('password2');

    togglePassword1.addEventListener('click',function(){

    console.log("clicked")
    const isPassword = passwordInput1.type === 'password';
    passwordInput1.type = isPassword ? 'text' : 'password';

    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
    })


    togglePassword2.addEventListener('click',function(){

    const isPassword = passwordInput2.type === 'password';
    passwordInput2.type = isPassword ? 'text' : 'password';

    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
    })
})

/* Password COLOR DIV */

function ValidatePassword(){

    const password = document.getElementById('password1').value;
    const error = document.getElementById('password-error');
    const bars = document.querySelectorAll('.password-strength .bar');

    let strength = 0;
    error.textContent = '';

    const rules = [

        /.{8,}/,                 // at least 8 chars
        /[A-Z]/,                 // uppercase
        /[a-z]/,                 // lowercase
        /[0-9]/,                 // number
        /[^A-Za-z0-9]/           // special char
    ];

    rules.forEach(rule => {

        if(rule.test(password)) strength++;
    });

    if ( strength < 4 && password.length > 0){

        error.textContent = 'Your password must contain at least 8 characters, uppercase, lowercase, number and special character';
        error.style.display = 'block';
        error_true = true
    }

    bars.forEach(bar => {

        bar.className = 'bar';
    });

    for (let i = 0; i < strength && i < bars.length; i++) {

        if (strength <= 1) bars[i].classList.add('red');
        else if (strength === 2) bars[i].classList.add('orange');
        else if (strength === 3) bars[i].classList.add('yellow');
        else bars[i].classList.add('green');
    }

}