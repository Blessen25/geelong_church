document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const steps = [
        document.getElementById("step1"),
        document.getElementById("step2"),
        document.getElementById("step3"),
        document.getElementById("step4")
    ];

    passwordInput.addEventListener("input", function () {
        const val = passwordInput.value;
        let strength = 0;

        if (val.length >= 8) strength++;
        if (/[A-Z]/.test(val) && /[a-z]/.test(val)) strength++;
        if (/\d/.test(val)) strength++;
        if (/[\W_]/.test(val)) strength++;

        steps.forEach((step, index) => {
            step.className = 'step'; // reset
            if (index < strength) {
                step.classList.add('active');
                if (strength >= 3) step.classList.add('medium');
                if (strength === 4) step.classList.add('strong');
            }
        });
    });
});
