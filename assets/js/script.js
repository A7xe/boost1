'use strict';
// add event on multiple elements
const addEventOnElement = function(elements, eventType, callback){
    for (let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback);
    }
}



// navbar toggle for mobile
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function (){
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar);




// Parallax effect

const parallaxElements = document.querySelectorAll("[data-parallax]");

window.addEventListener("mousemove", event => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    parallaxElements.forEach(element => {
        const speed = Number(element.dataset.parallaxSpeed);
        const movementX = ((event.clientX - centerX) / centerX) * speed;
        const movementY = ((event.clientY - centerY) / centerY) * speed;

        element.style.transform = `translate(${movementX}px, ${movementY}px)`;
    });
});








// loading screen

document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById("loading-screen");
    const boost = document.getElementById("boost");
    const media = document.getElementById("media");

    // Show Boost text from left
    setTimeout(() => {
        boost.classList.add("show");
    }, 500); // Boost appears after 0.5 seconds

    // Show Media text from top shortly after Boost
    setTimeout(() => {
        media.classList.add("show");
    }, 1000); // Media appears after 1 second

    // Hide the loading screen after 2 seconds
    setTimeout(() => {
        loadingScreen.classList.add("hidden");
    }, 2000); // The screen will disappear after 2 seconds
});



document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: section.offsetTop - 50, // لتعديل المسافة من الأعلى
        behavior: 'smooth'
      });
    });
  });
  





 