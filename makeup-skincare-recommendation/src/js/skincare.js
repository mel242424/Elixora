document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    "What’s your skin type?",
    "How often do you follow a skincare routine?",
    "Do you use sunscreen daily?",
    "Which product is essential for you?",
    "Do you prefer natural or chemical products?",
    "How often do you exfoliate?",
    "Do you use serums?",
    "Do you follow skincare trends?",
    "How important is hydration?",
    "Do you consult dermatologists?"
  ];

  const optionsArray = [
    ["Oily", "Dry", "Combination", "Normal"],
    ["Daily", "Few times a week", "Occasionally", "Rarely"],
    ["Yes", "Sometimes", "Rarely", "Never"],
    ["Moisturizer", "Cleanser", "Sunscreen", "Serum"],
    ["Natural", "Chemical", "Both", "Depends on product"],
    ["Weekly", "Bi-weekly", "Monthly", "Rarely"],
    ["Yes", "No", "Sometimes", "Rarely"],
    ["Yes", "Occasionally", "No", "Sometimes"],
    ["Very Important", "Somewhat", "Not Important", "I don’t mind"],
    ["Always", "Sometimes", "Rarely", "Never"]
  ];

  const form = document.getElementById("skincareQuiz");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");

  let currentQuestion = 0;
  const answers = [];

  function loadQuestion(index) {
    form.innerHTML = "";
    const card = document.createElement("div");
    card.className = "question-card active";

    const q = document.createElement("h2");
    q.textContent = questions[index];
    card.appendChild(q);

    const optionsDiv = document.createElement("div");
    optionsDiv.className = "options";

    optionsArray[index].forEach(opt => {
      const label = document.createElement("label");
      label.textContent = opt;

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${index}`;
      input.value = opt;

      input.addEventListener("change", () => {
        optionsDiv.querySelectorAll("label").forEach(l => l.classList.remove("selected"));
        label.classList.add("selected");
      });

      label.prepend(input);
      optionsDiv.appendChild(label);
    });

    card.appendChild(optionsDiv);

    const nav = document.createElement("div");
    nav.className = "navigation";

    if (index > 0) {
      const backBtn = document.createElement("button");
      backBtn.type = "button";
      backBtn.textContent = "Back";
      backBtn.addEventListener("click", () => {
        currentQuestion--;
        loadQuestion(currentQuestion);
      });
      nav.appendChild(backBtn);
    }

    const skipBtn = document.createElement("button");
    skipBtn.type = "button";
    skipBtn.textContent = "Skip";
    skipBtn.addEventListener("click", () => {
      answers[index] = "Skipped";
      if (index < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
      } else {
        showResults();
      }
    });
    nav.appendChild(skipBtn);

    const nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.textContent = index === questions.length - 1 ? "Finish" : "Next";
    nextBtn.addEventListener("click", () => {
      const selected = form.querySelector(`input[name="q${index}"]:checked`);
      if (!selected) {
        alert("Please select an option or skip!");
        return;
      }
      answers[index] = selected.value;
      if (index < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
      } else {
        showResults();
      }
    });

    nav.appendChild(nextBtn);
    card.appendChild(nav);
    form.appendChild(card);

    const progress = ((index + 1) / questions.length) * 100;
    progressBar.style.width = progress + "%";
    progressText.textContent = `Question ${index + 1} of ${questions.length}`;
  }

  function showResults() {
    form.innerHTML = "";
    const resultsDiv = document.createElement("div");
    resultsDiv.className = "results";

    const h2 = document.createElement("h2");
    h2.textContent = "Your Skincare Preferences:";
    resultsDiv.appendChild(h2);

    answers.forEach((ans, i) => {
      const p = document.createElement("p");
      p.textContent = `${i + 1}. ${questions[i]} — ${ans}`;
      resultsDiv.appendChild(p);
    });

   

    form.appendChild(resultsDiv);
  }

  loadQuestion(currentQuestion);
});
document.getElementById("homeBtn").onclick = () => {
  window.location.href = "homepage.html";
};

document.getElementById("productsBtn").onclick = () => {
  window.location.href = "products.html";
};

document.getElementById("restartBtn").onclick = () => {
  location.reload();
};







