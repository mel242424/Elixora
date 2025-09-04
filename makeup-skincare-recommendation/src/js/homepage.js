document.addEventListener("DOMContentLoaded", () => {
  const quizModal = document.getElementById("quizModal");
  const startQuizBtn = document.getElementById("startQuizBtn");
  const skipQuizBtn = document.getElementById("skipQuizBtn");
  const closeModal = document.getElementById("closeModal");
  const openQuizBtn = document.getElementById("openQuizBtn");
  const quizForm = document.getElementById("quizForm");
  const progressBar = document.getElementById("progressBar");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  quizModal.style.display = "block";

  startQuizBtn.addEventListener("click", () => quizModal.style.display = "block");
  openQuizBtn.addEventListener("click", () => quizModal.style.display = "block");
  closeModal.addEventListener("click", () => quizModal.style.display = "none");
  skipQuizBtn.addEventListener("click", () => quizModal.style.display = "none");
  window.addEventListener("click", e => { if(e.target==quizModal) quizModal.style.display="none"; });

  // Adaptive Questions Array
  const quizData = [
    {id:1, q:"What is your skin type?", type:"skinType", options:["Oily","Dry","Combination","Normal"]},
    {id:2, q:"Primary skin concern?", type:"skinConcern", options:["Acne","Dark Spots","Wrinkles","Dullness","Sensitivity"]},
    {id:3, q:"Preferred product type?", type:"productType", options:["Serum","Cream","Makeup","All"]},
  ];

  let currentQuestion = 0;
  let answers = {};

  function loadQuestion(index){
    const data = quizData[index];
    let html = `<h3>${data.q}</h3>`;
    data.options.forEach(opt=>{
      html += `<label><input type="radio" name="answer" value="${opt}"> ${opt}</label><br>`;
    });
    quizForm.innerHTML = html;
    prevBtn.style.display = index>0 ? "inline-block":"none";
    progressBar.style.width = ((index)/quizData.length)*100 + "%";
  }

  loadQuestion(currentQuestion);

  nextBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    if(!selected){ alert("Please select an option"); return; }
    answers[quizData[currentQuestion].type] = selected.value;
    currentQuestion++;
    if(currentQuestion >= quizData.length){
      alert("Quiz Completed! Answers: "+JSON.stringify(answers));
      quizModal.style.display="none";
      return;
    }
    loadQuestion(currentQuestion);
  });

  prevBtn.addEventListener("click", () => {
    if(currentQuestion>0) currentQuestion--;
    loadQuestion(currentQuestion);
  });
});


