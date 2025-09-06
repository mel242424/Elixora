document.addEventListener("DOMContentLoaded", () => {
  const quizData = [
    { q: "Which makeup product is used to even out skin tone?", options: ["Foundation", "Blush", "Lipstick", "Mascara"], answer: "Foundation" },
    { q: "What tool is commonly used to blend foundation?", options: ["Sponge", "Eyelash curler", "Powder puff", "Brow brush"], answer: "Sponge" },
    { q: "Which product is applied on eyelashes?", options: ["Eyeliner", "Mascara", "Concealer", "Lip gloss"], answer: "Mascara" },
    { q: "What does primer do?", options: ["Brightens lips", "Preps skin", "Thickens lashes", "Sets makeup"], answer: "Preps skin" },
    { q: "Which is a matte lip product?", options: ["Gloss", "Liquid lipstick", "Lip balm", "Highlighter"], answer: "Liquid lipstick" },
    { q: "What’s used to contour the face?", options: ["Bronzer", "Primer", "Powder", "Mascara"], answer: "Bronzer" },
    { q: "Which brush is used for blending eyeshadow?", options: ["Flat brush", "Fluffy brush", "Spoolie", "Angled brush"], answer: "Fluffy brush" },
    { q: "What sets makeup in place?", options: ["Setting spray", "Eyeliner", "Lip gloss", "Blush"], answer: "Setting spray" },
    { q: "Which color corrects dark circles?", options: ["Green", "Peach/Orange", "Purple", "Yellow"], answer: "Peach/Orange" },
    { q: "Which makeup product defines eyebrows?", options: ["Lip liner", "Brow pencil", "Primer", "Blush"], answer: "Brow pencil" },
  ];

  startQuiz(quizData);
});

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
