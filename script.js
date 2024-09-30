// Select the contact form and footer section
const contactForm = document.querySelector('form');
const footer = document.querySelector('footer');

// Handle form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can handle the form data, e.g., sending it to a server
    // For now, we'll just show a confirmation message
    alert(`Thank you, ${name}! Your message has been sent.\n\nEmail: ${email}\nMessage: ${message}`);

    // Optionally, you can reset the form after submission
    contactForm.reset();
});
