// Script File

// Home Section Starts
var hamburgerBtn = document.querySelector('.main-navbar .hamburger-btn');
var navList = document.querySelector('.main-navbar .nav-list');
var navListItems = document.querySelectorAll('.nav-list li a');

hamburgerBtn.addEventListener('click', activeClass);

function activeClass(){
	hamburgerBtn.classList.toggle('active');
	navList.classList.toggle('active');
}

for(var i = 0; i < navListItems.length; i++){
	navListItems[i].addEventListener('click', listItemClicked);
}

function listItemClicked(){
	hamburgerBtn.classList.remove('active');
	navList.classList.remove('active');
}

// Code For Navbar
var homeSection = document.querySelector('#home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 150){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}

// Home Section Ends

// Demo Classes Section Starts
function bookDemo(className) {
    // Check if the user is logged in
    const user = localStorage.getItem('user'); // Replace 'user' with the key used during signup/login

    if (user) {
        alert(`You have successfully booked a demo class for ${className}!`);
    } else {
        alert('You need to create an account first to book a demo class. Please create your account.');
        window.location.href = 'SignUp.html'; // Redirect to login page
    }
}
// Demo Classes Section Ends
// Blog Section Starts
document.addEventListener("DOMContentLoaded", function() {
  const viewMoreBtn = document.querySelector(".articles-view-btn");
  const additionalBlogs = document.querySelector(".additional-blogs");

  viewMoreBtn.addEventListener("click", function() {
      if (additionalBlogs.style.display === "none" || additionalBlogs.style.display === "") {
          additionalBlogs.style.display = "flex"; // Show the additional blogs
          viewMoreBtn.textContent = "View Less"; // Change button text to "View Less"
      } else {
          additionalBlogs.style.display = "none"; // Hide the additional blogs
          viewMoreBtn.textContent = "View More"; // Change button text back to "View More"
      }
  });
});
// Blog Section Ends



// Services Section Starts
const servicesSection = document.querySelector('.services');
const servicesHeader = document.querySelector('.section-header');

// Box 1 Mouseenter and Mouseleave
const box1 = document.querySelector('.box1'); // Assuming this is the selector for box 1
box1.addEventListener('mouseenter', () => {
    // Set background style for box 1 (for example, setting a background color)
    servicesSection.style.background = "url('./images/yogaao6.jpg')  no-repeat center center";
    servicesSection.style.backgroundSize = "cover";// You can set any style property here
    // Change h1 and p color to white
    servicesHeader.querySelector('h1').style.color = 'white';
    servicesHeader.querySelector('p').style.color = 'white';
});
box1.addEventListener('mouseleave', () => {
    // Remove background by resetting the style property
    servicesSection.style.background = ''; // Reset to default
    // Reset h1 and p color to default
    servicesHeader.querySelector('h1').style.color = '';
    servicesHeader.querySelector('p').style.color = '';
});

// Box 2 Mouseenter and Mouseleave
const box2 = document.querySelector('.box2'); // Assuming this is the selector for box 2
box2.addEventListener('mouseenter', () => {
    servicesSection.style.background = "url('./images/yogaoo2.webp')  no-repeat center center";
    servicesSection.style.backgroundSize = "cover"; // Background for box 2
    servicesHeader.querySelector('h1').style.color = 'white';
    servicesHeader.querySelector('p').style.color = 'white';
});
box2.addEventListener('mouseleave', () => {
    servicesSection.style.background = ''; // Reset background
    servicesHeader.querySelector('h1').style.color = '';
    servicesHeader.querySelector('p').style.color = '';
});

// Box 3 Mouseenter and Mouseleave
const box3 = document.querySelector('.box3'); // Assuming this is the selector for box 3
box3.addEventListener('mouseenter', () => {
    servicesSection.style.background = "url('./images/yogaoo4.jpg')  no-repeat center center";
    servicesSection.style.backgroundSize = "cover"; // Background for box 3
    servicesHeader.querySelector('h1').style.color = 'white';
    servicesHeader.querySelector('p').style.color = 'white';
});
box3.addEventListener('mouseleave', () => {
    servicesSection.style.background = ''; // Reset background
    servicesHeader.querySelector('h1').style.color = '';
    servicesHeader.querySelector('p').style.color = '';
});

// Box 4 Mouseenter and Mouseleave
const box4 = document.querySelector('.box4'); // Assuming this is the selector for box 4
box4.addEventListener('mouseenter', () => {
    servicesSection.style.background = "url('./images/yogaoo5.jpg')  no-repeat center center";
    servicesSection.style.backgroundSize = "cover"; // Background for box 4
    servicesHeader.querySelector('h1').style.color = 'white';
    servicesHeader.querySelector('p').style.color = 'white';
});
box4.addEventListener('mouseleave', () => {
    servicesSection.style.background = ''; // Reset background
    servicesHeader.querySelector('h1').style.color = '';
    servicesHeader.querySelector('p').style.color = '';
});

// Services Section Ends


// Footer Section Starts ...
// Select the feedback form and submit button
const feedbackForm = document.querySelector('.footer-col-3 .newsletter');
const feedbackTextarea = feedbackForm.querySelector('textarea');
const submitButton = feedbackForm.querySelector('.newsletter-btn');

// Add event listener to the submit button
submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission to the server

    // Get the value of the feedback text area
    const feedback = feedbackTextarea.value.trim();

    // Check if feedback is not empty
    if (feedback) {
        // Display an alert with the feedback (for demonstration)
        alert('Thank you for your feedback. Your  feedback has been recorded successfully.');


        // Clear the text area after submission
        feedbackTextarea.value = '';
    } else {
        // Alert if the feedback is empty
        alert('Please enter your feedback before submitting.');
    }
});


// Adding click events to buttons for Select Plan
var selectPlanButtons = document.querySelectorAll('.btn price-plan-btn-3');
selectPlanButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents page reload
        togglePricingForm();
    });
});
