console.log('show')
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