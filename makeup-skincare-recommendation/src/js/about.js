document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("quizModal");
  const openQuizBtn = document.getElementById("openQuizBtn");
  const closeModal = document.getElementById("closeModal");

  // Open modal
  openQuizBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal on outside click
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("quizModal");
  const openQuizBtn = document.getElementById("openQuizBtn");
  const closeModal = document.getElementById("closeModal");

  // Open modal
  openQuizBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal on outside click
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
