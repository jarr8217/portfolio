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

// Displays project details using template literals
// filepath: c:\Users\joser\OneDrive\Documents\Jbox946\OneDrive\Desktop\school work\Website using Bootstrap and JavaScript\js\script.js
projects.forEach(project => {
    console.log(`Title: ${project.title}`);
    console.log(`Description: ${project.description}`);
    console.log(`URL: ${project.link}`);
});

// array that stores a list of projects and their details.
const projects = [
    {
        title: 'HTML & CSS wvwnt Center',
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

// enables smooth scrolling to different sections of the page when navigation links are clicked
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});

// displays a modal popup with dynamic contant when a project is clicked
function showModal(title, description, link) {
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    modalTitle.textContent = title;
    modalBody.innerHTML = `
        <p>${description}</p>
        <a class="btn btn-primary" href="${link}" role="button">View Project</a>
    `;
    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    modal.show();
}

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('.card-title').textContent;
        const description = this.querySelector('.card-text').textContent;
        const link = this.querySelector('.btn').getAttribute('href');
        showModal(title, description, link);
    });