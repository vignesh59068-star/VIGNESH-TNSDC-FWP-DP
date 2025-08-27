// Simple form validation

document.querySelector('.contact-form').addEventListener('submit', function(e) {

    e.preventDefault();

    

    const name = document.getElementById('name').value.trim();

    const email = document.getElementById('email').value.trim();

    const message = document.getElementById('message').value.trim();

    

    if (name && email && message) {

        alert('Thank you for your message! I will get back to you soon.');

        this.reset();

    } else {

        alert('Please fill in all fields.');

    }

});

// Highlight active nav link on scroll

const sections = document.querySelectorAll('section');

const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {

    let current = '';

    

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;

        

        if (pageYOffset >= (sectionTop - 200)) {

            current = section.getAttribute('id');

        }

    });

    

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.get