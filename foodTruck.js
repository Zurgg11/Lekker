// JavaScript in your foodTruck.js file

// Move this line to the bottom of your HTML, just before the closing </body> tag to ensure all HTML elements are loaded before running the script.
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navigation');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show-menu');
  });

  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 3 seconds (adjust as needed)
  }
});

