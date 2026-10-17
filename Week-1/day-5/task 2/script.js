const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successBox = document.getElementById("successBox");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Reset errors
    nameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    successBox.style.display = "none";

    // Validate Name
    if (nameInput.value.trim() === "") {
        nameError.innerText = "Please enter your name";
        isValid = false;
    }

    // Validate Email
    if (emailInput.value.trim() === "") {
        emailError.innerText = "Please enter your email";
        isValid = false;
    }

    // Validate Password
    if (passwordInput.value.trim() === "") {
        passwordError.innerText = "Please enter your password";
        isValid = false;
    }

    // Success
    if (isValid) {
        successBox.style.display = "block";
        form.reset();
    }
});
