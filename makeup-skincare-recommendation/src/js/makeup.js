document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    "What’s your go-to makeup style?",
    "How often do you wear makeup?",
    "Which product can’t you live without?",
    "Do you prefer bold or natural looks?",
    "What’s your favorite makeup brand?",
    "How important is long-lasting makeup?",
    "Do you enjoy experimenting with colors?",
    "Which do you prefer: matte or glossy finish?",
    "Do you follow makeup trends?",
    "How do you usually apply makeup?"
  ];

  const optionsArray = [
    ["Natural", "Glam", "Minimal", "Dramatic"],
    ["Everyday", "Few times a week", "Occasionally", "Rarely"],
    ["Lipstick", "Mascara", "Foundation", "Eyeshadow"],
    ["Bold", "Natural", "Depends on mood", "Mix both"],
    ["Maybelline", "MAC", "Fenty", "Others"],
    ["Very Important", "Somewhat", "Not Important", "I don’t mind"],
    ["Yes, love colors", "Sometimes", "Rarely", "Never"],
    ["Matte", "Glossy", "Mix", "Depends on look"],
    ["Yes", "Sometimes", "Rarely", "No"],
    ["Brush", "Fingers", "Beauty blender", "Combination"]
  ];

  const form = document.getElementById("makeupQuiz");
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
    h2.textContent = "Your Makeup Preferences:";
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






