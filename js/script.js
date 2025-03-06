// Email validation function
function validateEmail(email) {
    // Regular expression for validating an email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Test the email against the regular expression
    return emailRegex.test(email);
}

// Attach form validation to the submit event
document.querySelector('form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

// Test the email validation function
 console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("example.com")); // false
console.log(validateEmail("test@example")); // false
console.log(validateEmail("testexample.com")); // false
console.log(validateEmail("test@example.")); // false
console.log(validateEmail("test@example.c")); // false
console.log(validateEmail("test@example.co.uk")); // true
console.log(validateEmail("test@.com")); // false

// Array that stores a list of projects and their details
const projects = [
    {
        title: 'HTML & CSS Event Center',
        description: 'A simple website layout using HTML and CSS',
        link: 'https://github.com/jarr8217/Wepa-event-center'
    },
    {
        title: 'Portfolio project',
        description: 'A portfolio website using HTML, Bootstrap, CSS, and JavaScript',
        link: 'https://github.com/jarr8217/Bootstrap-project'
    },
    {
        title: 'Coming soon',
        description: 'More projects coming soon...',
        link: '#'
    }
];

// Enables smooth scrolling to different sections of the page when navigation links are clicked
function smoothScroll(target) {
    // Select the target element and scroll into view with smooth behavior
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add event listeners to navigation links for smooth scrolling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior
        smoothScroll(this.getAttribute('href')); // Call smoothScroll with the target selector
    });
});

// Displays a modal popup with dynamic content when a project is clicked
function showModal(title, description, link) {
    // Get the modal title element by its ID
    const modalTitle = document.getElementById('modalTitle');
    // Get the modal body element by its ID
    const modalBody = document.getElementById('modalBody');
    
    // Set the text content of the modal title
    modalTitle.textContent = title;
    
    // Set the inner HTML of the modal body with the description and link
    modalBody.innerHTML = `
        <p>${description}</p>
        <a class="btn btn-primary" href="${link}" role="button">View Project</a>
    `;
    
    // Create a new Bootstrap modal instance and show it
    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    modal.show();
}

// Add event listeners to project cards for showing modal popups
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('.card-title').textContent;
        const description = this.querySelector('.card-text').textContent;
        const link = this.querySelector('.btn').getAttribute('href');
        showModal(title, description, link);
    }
    );
    });