/* Script.js */
console.log("script-loaded");

function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const validationMessage = document.getElementById("validationMessage");

    if (username.trim() === "") {
        validationMessage.textContent = "Username is required";
        return false;
    }

    if (password.trim() === "") {
        validationMessage.textContent = "Password is required";
        return false;
    }

    if (!isStrongPassword(password)) {
        validationMessage.textContent = "Password must be strong. It should have at least 8 characters, including uppercase, lowercase, and special characters.";
        return false;
    }

    validationMessage.textContent = ""; // Clear any previous error messages.
    return true; // Form is submitted if all validations pass.
}

function isStrongPassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
}

// Add an event listener to the form for form submission.
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission.
    validateForm(); // Call the validation function.
});

