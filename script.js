window.addEventListener("DOMContentLoaded", () => {
  // Fade in wishes
  const wishes = document.querySelectorAll(".wishes p");
  wishes.forEach((wish, index) => {
    setTimeout(() => {
      wish.style.opacity = 1;
      wish.style.transform = "translateY(0)";
    }, index * 1200);
  });

  // Romantic Slider Logic
  let currentSlide = 0;
  const slides = document.querySelectorAll(".romantic-slider .slide");

  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 5000); // Change slide every 5 seconds
});
