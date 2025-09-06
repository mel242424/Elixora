document.addEventListener("DOMContentLoaded", () => {
  const quizData = [
    { q: "What is the first step in a skincare routine?", options: ["Moisturizer", "Cleanser", "Sunscreen", "Serum"], answer: "Cleanser" },
    { q: "Which ingredient is best for acne?", options: ["Hyaluronic Acid", "Salicylic Acid", "Vitamin C", "Shea Butter"], answer: "Salicylic Acid" },
    { q: "What does SPF protect against?", options: ["Pollution", "Sun damage", "Wrinkles", "Acne"], answer: "Sun damage" },
    { q: "How often should you exfoliate?", options: ["Every day", "2-3 times a week", "Once a month", "Never"], answer: "2-3 times a week" },
    { q: "Which ingredient hydrates skin?", options: ["Hyaluronic Acid", "Retinol", "Benzoyl Peroxide", "Clay"], answer: "Hyaluronic Acid" },
    { q: "What does toner do?", options: ["Cleanses oil", "Balances pH", "Moisturizes", "Exfoliates"], answer: "Balances pH" },
    { q: "Which vitamin brightens skin?", options: ["Vitamin D", "Vitamin C", "Vitamin B12", "Vitamin A"], answer: "Vitamin C" },
    { q: "What should you always apply in the morning?", options: ["Night cream", "Sunscreen", "Exfoliator", "Face mask"], answer: "Sunscreen" },
    { q: "Which ingredient helps with aging?", options: ["Retinol", "Salicylic Acid", "Clay", "Coconut oil"], answer: "Retinol" },
    { q: "What’s a sheet mask primarily used for?", options: ["Hydration", "Exfoliation", "Sun protection", "Acne treatment"], answer: "Hydration" },
  ];

  startQuiz(quizData);
});

// Reuse same startQuiz() function as makeupQuiz.js
function startQuiz(quizData) {
  let currentQuestion = 0;
  let score = 0;

  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const resultEl = document.getElementById("result");
  const progressBar = document.getElementById("progressBar");

  function loadQuestion() {
    const data = quizData[currentQuestion];
    questionEl.textContent = data.q;
    optionsEl.innerHTML = "";
    data.options.forEach(opt => {
      const li = document.createElement("li");
      li.innerHTML = `<input type="radio" name="option" value="${opt}" id="${opt}">
                      <label for="${opt}">${opt}</label>`;
      optionsEl.appendChild(li);
    });

    progressBar.style.width = ((currentQuestion + 1) / quizData.length) * 100 + "%";
    prevBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
    nextBtn.textContent = currentQuestion === quizData.length - 1 ? "Submit" : "Next";
  }

  nextBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) return alert("Please select an answer!");

    if (selected.value === quizData[currentQuestion].answer) score++;

    if (currentQuestion < quizData.length - 1) {
      currentQuestion++;
      loadQuestion();
    } else {
      showResult();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
      currentQuestion--;
      loadQuestion();
    }
  });

  function showResult() {
    document.getElementById("quiz").style.display = "none";
    resultEl.classList.remove("hidden");
    resultEl.textContent = `🎉 You scored ${score} / ${quizData.length}`;
  }

  loadQuestion();
}
