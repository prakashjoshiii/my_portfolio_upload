// Menu toggle for mobile navigation
document.querySelector('.menu-icon').addEventListener('click', function() {
  document.getElementById('navbar').classList.toggle('open');
});

// Lightbox Gallery functionality
var slideIndex = 1;
showSlides(slideIndex);  // Initialize the first slide

function openModal() {
  document.getElementById('myModal').style.display = 'block';
}
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  // Show the selected slide
  slides[slideIndex - 1].style.display = 'block';
}
