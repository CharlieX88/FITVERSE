
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


function bookDemo(className) {
    const user = localStorage.getItem('user');

    if (user) {
        alert(`You have successfully booked a demo class for ${className}!`);
    } else {
        alert('You need to create an account first to book a demo class. Please create your account.');
        window.location.href = 'SignUp.html'; 
    }
}
// Demo Classes Section Ends
// Blog Section Starts
document.addEventListener("DOMContentLoaded", function() {
  const viewMoreBtn = document.querySelector(".articles-view-btn");
  const additionalBlogs = document.querySelector(".additional-blogs");

  viewMoreBtn.addEventListener("click", function() {
      if (additionalBlogs.style.display === "none" || additionalBlogs.style.display === "") {
          additionalBlogs.style.display = "flex"; 
          viewMoreBtn.textContent = "View Less"; 
      } else {
          additionalBlogs.style.display = "none"; 
          viewMoreBtn.textContent = "View More"; 
      }
  });
});
// Blog Section Ends



// Services Section Starts
const servicesSection = document.querySelector('.services');
const servicesHeader = document.querySelector('.section-header');

const box1 = document.querySelector('.box1'); 
box1.addEventListener('mouseenter', () => {
    servicesSection.style.background = "url('./images/services/zumba-classes-bg.jpg')  no-repeat center center";
    servicesSection.style.backgroundSize = "cover";
    servicesHeader.querySelector('h1').style.color = 'white';
    servicesHeader.querySelector('p').style.color = 'white';
});
box1.addEventListener('mouseleave', () => {
    servicesSection.style.background = ""; 
    servicesSection.style.backgroundSize = "cover";
    servicesHeader.querySelector('h1').style.color = '';
    servicesHeader.querySelector('p').style.color = '';
});

const box2 = document.querySelector('.box2');
box2.addEventListener('mouseenter', () => {
    servicesSection.style.background = "url('./images/services/personal-training-bg.jpg')  no-repeat center center";
    servicesSection.style.backgroundSize = "cover"; 
    servicesHeader.querySelector('h1').style.color = 'white';
    servicesHeader.querySelector('p').style.color = 'white';
});
box2.addEventListener('mouseleave', () => {
    servicesSection.style.background = '';
    servicesHeader.querySelector('h1').style.color = '';
    servicesHeader.querySelector('p').style.color = '';
});

const box3 = document.querySelector('.box3');
box3.addEventListener('mouseenter', () => {
    servicesSection.style.background = "url('./images/services/cardio-fitness-bg.jpg')  no-repeat center center";
    servicesSection.style.backgroundSize = "cover";
    servicesHeader.querySelector('h1').style.color = 'white';
    servicesHeader.querySelector('p').style.color = 'white';
});
box3.addEventListener('mouseleave', () => {
    servicesSection.style.background = ''
    servicesHeader.querySelector('h1').style.color = '';
    servicesHeader.querySelector('p').style.color = '';
});


const box4 = document.querySelector('.box4');
box4.addEventListener('mouseenter', () => {
    servicesSection.style.background ="url('./images/services/group-fitness-classes-bg.jpg')  no-repeat center center";
    servicesSection.style.backgroundSize = "cover";
    servicesHeader.querySelector('h1').style.color = 'white';
    servicesHeader.querySelector('p').style.color = 'white';
});
box4.addEventListener('mouseleave', () => {
    servicesSection.style.background = ''
    servicesHeader.querySelector('h1').style.color = '';
    servicesHeader.querySelector('p').style.color = '';
});
// Services Section Ends


// Footer Section Starts ...
const feedbackForm = document.querySelector('.footer-col-3 .newsletter');
const feedbackTextarea = feedbackForm.querySelector('textarea');
const submitButton = feedbackForm.querySelector('.newsletter-btn');

submitButton.addEventListener('click', function(event) {
    event.preventDefault(); 

    const feedback = feedbackTextarea.value.trim();

    if (feedback) {
        alert('Thank you for your feedback. Your  feedback has been recorded successfully.');


        feedbackTextarea.value = '';
    } else {
        alert('Please enter your feedback before submitting.');
    }
});

// ... Footer Section Ends ...

var selectPlanButtons = document.querySelectorAll('.btn price-plan-btn-3');
selectPlanButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); 
        togglePricingForm();
    });
});
