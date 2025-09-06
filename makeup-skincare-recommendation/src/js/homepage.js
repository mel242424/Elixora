document.addEventListener("DOMContentLoaded", () => {
  const quizModal = document.getElementById("quizModal");
  const closeModalBtn = document.getElementById("closeModal");
  const skipBtn = document.getElementById("skipQuizBtn");
  const openQuizBtn = document.getElementById("openQuizModal"); 
  const logo = document.getElementById("logo");
  const dropdown = document.getElementById("logoDropdown");

  //  Show quiz modal on homepage load
  quizModal.style.display = "flex";

  //  Open quiz modal when clicking navbar "Take Quiz"
  if (openQuizBtn) {
    openQuizBtn.addEventListener("click", (e) => {
      e.preventDefault();
      quizModal.style.display = "flex";
    });
  }

  //  Close modal (X button)
  closeModalBtn.addEventListener("click", () => {
    quizModal.style.display = "none";
  });

  //  Skip closes modal
  skipBtn.addEventListener("click", () => {
    quizModal.style.display = "none";
  });

  //  Close modal if clicking outside modal content
  window.addEventListener("click", (e) => {
    if (e.target === quizModal) {
      quizModal.style.display = "none";
    }
  });

  //  Logo dropdown toggle
  logo.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent window click from closing immediately
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });

  //  Close dropdown if clicked outside
  window.addEventListener("click", (e) => {
    if (!logo.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });

  //  Start hero slideshow
  startHeroSlideshow();
});

//  Hero Slideshow function
function startHeroSlideshow() {
  const slides = document.querySelectorAll(".hero-slide");
  let index = 0;

  // Make sure first slide is visible
  slides[index].classList.add("active");

  setInterval(() => {
    slides[index].classList.remove("active"); // fade out current
    index = (index + 1) % slides.length;
    slides[index].classList.add("active"); // fade in next
  }, 10000); // every 10 seconds
}


