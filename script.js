// script.js

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting via HTTP

    // Get form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form inputs
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.'); // Show alert if any field is empty
        return;
    }

    // Prepare data to be sent (in this example, just log the data)
    const formData = {
        name: name,
        email: email,
        message: message
    };

    console.log('Form data:', formData);

    // Show confirmation message to the user
    alert('Your message has been submitted!');

    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

// Add event listener to the form for submission
document.querySelector('form').addEventListener('submit', handleSubmit);

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        window.scrollTo({
            top: target.offsetTop - 50, // Adjusted for header height
            behavior: 'smooth'
        });
    });
});

// Image Slider for Projects Section
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.project-slide');
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides(); // Start the slideshow
