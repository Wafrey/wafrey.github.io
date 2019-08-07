// Nav Bar Variables
const navLogo = document.querySelector('.main-nav img');
const navButton = document.querySelector('.main-nav i');
const navBar = document.querySelector('.main-nav ul');
const navLinks = document.querySelectorAll('.main-nav li');
const x = window.matchMedia("(max-width: 599px)");

// Mobile Nav Bar JS
navButton.addEventListener('click', () => {
  if (navBar.style.display === 'none' || navBar.style.display === "") {
    navBar.style.display = 'block';
  } else if (navBar.style.display === 'block') {
    navBar.style.display = 'none';
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (x.matches) {
      navBar.style.display = 'none';
    }
  });
});

// media query event handler
if (matchMedia) {
  const mq = window.matchMedia("(min-width: 600px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    navBar.style.display = 'flex';// window width is at least 600px
  } else {
    navBar.style.display = 'none';// window width is less than 600px
  }
}

// Variables for The Testimonials Carousel
const testimonialCarouselContainer = document.querySelectorAll('.client-testimonial-item');
const carouselSwitch = document.querySelectorAll('.client-testimonial-switch');

console.log('Dimitrov send his regards :P');
