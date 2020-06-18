//Animated SLiding Menu Indicator
let marker = document.querySelector('#marker');
let item = document.querySelectorAll('#menuLink');

function indicator (e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

item.forEach(function (link) {
  link.addEventListener('click', (e) => {
    indicator (e.target);
  })
})
//==================

//animated menu button 
let slider = document.querySelector('.menuMobile');

const menuBtn = document.querySelector('.menuBtn');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    slider.style.right = '0px';
    slider.style.top = '40vh';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    slider.style.right = '-40%';
    menuOpen = false;
  }
})  


//Nav Bar Color Scroll
window.onscroll = () => scrollFunction();
let navBar = document.querySelector('.navBar');
let logo = document.querySelector('h1 a img');

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navBar.style.backgroundColor = '#f7faff';
    menuBtn.style.width = '40px';
    menuBtn.style.height = '40px';
    logo.style.width = '80%'
  } else {
    navBar.style.backgroundColor = 'transparent';
    logo.style.width = '90%'
    menuBtn.style.width = '45px';
    menuBtn.style.height = '45px';
  }
}
//=============

let heightNavBar = navBar.offsetHeight;
let headerBanner = document.querySelector('.headerBanner');
let marginTopBanner = heightNavBar + 100 + 'px';
headerBanner.style.marginTop = marginTopBanner;

// MANUAL SLIDE
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("testimonialCard");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
} 
//==================


//AUTOMATIC SLIDE
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("testimonialCard");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 4000); // Change image every 2 seconds
// } 

