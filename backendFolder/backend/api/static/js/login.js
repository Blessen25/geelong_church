const togglePassword = document.getElementById('typePassswordid');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click',function(){

    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';

    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
})