// email validation function
function validateEmail(email) {
    // regular expression for validating an email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // test the email against the regular expression
    return emailRegex.test(email);
}

// Attach form validation to the submit event
document.querySelector('form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

// test the function
 console.log(validateEmail("test@example.com")); // true
    console.log(validateEmail("example.com")); // false
    console.log(validateEmail("test@example")); // false
    console.log(validateEmail("testexample.com")); // false
    console.log(validateEmail("test@example.")); // false
    console.log(validateEmail("test@example.c")); // false
    console.log(validateEmail("test@example.co.uk")); // true
    console.log(validateEmail("test@.com")); // false

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Attach dark mode toggle to a button
document.querySelector('.dark-mode-toggle').addEventListener('click', toggleDarkMode);
