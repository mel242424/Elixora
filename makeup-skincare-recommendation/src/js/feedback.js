document.addEventListener("DOMContentLoaded", () => {
  const questionsList = [
    "How easy was it to navigate the website?",
    "How do you feel about the website’s design?",
    "How satisfied are you with the loading speed?",
    "How clear and helpful was the content?",
    "How easy was it to find what you were looking for?",
    "How do you feel about the color scheme?",
    "How likely are you to recommend this site?",
    "How satisfied are you with the overall layout?",
    "How engaging do you find the features?",
    "How do you feel about your overall experience?"
  ];

  const emojiOptions = [
    { value: "1", emoji: "😡" },
    { value: "2", emoji: "😞" },
    { value: "3", emoji: "😐" },
    { value: "4", emoji: "😊" },
    { value: "5", emoji: "😍" },
  ];

  let currentIndex = 0;
  const answers = {};

  const questionText = document.getElementById("questionText");
  const emojiContainer = document.getElementById("emojiOptions");
  const nextBtn = document.getElementById("nextBtn");
  const progress = document.getElementById("progress");
  const progressText = document.getElementById("progressText");
  const feedbackCard = document.getElementById("feedbackCard");

  // Load question
  function loadQuestion(index) {
    questionText.textContent = `${index + 1}. ${questionsList[index]}`;
    emojiContainer.innerHTML = "";
    nextBtn.disabled = true;

    emojiOptions.forEach(opt => {
      const label = document.createElement("label");

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${index + 1}`;
      input.value = opt.value;

      input.addEventListener("change", () => {
        answers[`q${index + 1}`] = opt.emoji;
        nextBtn.disabled = false;
      });

      const span = document.createElement("span");
      span.textContent = opt.emoji;

      label.appendChild(input);
      label.appendChild(span);
      emojiContainer.appendChild(label);
    });

    // Progress bar update
    progress.style.width = `${((index + 1) / questionsList.length) * 100}%`;
    progressText.textContent = `Question ${index + 1} of ${questionsList.length}`;
  }

  // Next button logic
  nextBtn.addEventListener("click", () => {
    feedbackCard.classList.add("hide");

    setTimeout(() => {
      feedbackCard.classList.remove("hide");
      feedbackCard.classList.add("show");

      currentIndex++;
      if (currentIndex < questionsList.length) {
        loadQuestion(currentIndex);
      } else {
        showSummary();
      }
    }, 600);
  });

    // Show summary
  function showSummary() {
    questionText.textContent = "🎉 Thank you for your feedback!";
    emojiContainer.innerHTML = "";
    progress.style.width = "100%";
    progressText.textContent = "Completed";

    const summary = document.createElement("div");
    summary.classList.add("summary");
    summary.innerHTML = "<h3>Your Answers:</h3>";

    Object.keys(answers).forEach((key, i) => {
      summary.innerHTML += `<p>${i + 1}. ${questionsList[i]} - ${answers[key]}</p>`;
    });

    emojiContainer.appendChild(summary);
    nextBtn.style.display = "none";

    // Show home button
    const homeBtn = document.getElementById("homeBtn");
    homeBtn.style.display = "inline-block";
    homeBtn.addEventListener("click", () => {
      window.location.href = "homepage.html";
    });

    // Confetti animation 🎉
    launchConfetti();
  }


  // Simple confetti
  function launchConfetti() {
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement("div");
      confetti.textContent = "🎉";
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDuration = (Math.random() * 2 + 3) + "s";
      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 5000);
    }
  }

  loadQuestion(currentIndex);
});

