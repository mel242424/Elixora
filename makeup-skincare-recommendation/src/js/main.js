document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");

  // Array of image URLs
  const images = [
    "images/logo.png",
    "images/logo2.png",
    "images/logo3.png"
  ];

  let current = 0;

  function changeImage() {
    current = (current + 1) % images.length; // loop through images
    logo.src = images[current];
  }

  // Change image every 5 seconds
  setInterval(changeImage, 5000);
});

