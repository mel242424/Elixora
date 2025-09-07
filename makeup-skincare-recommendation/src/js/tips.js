// Fun Facts
const facts = [
  "Cleopatra used honey as a natural moisturizer 🍯",
  "Caffeine in skincare can reduce puffiness under eyes ☕",
  "Rinsing hair with cold water makes it shinier ❄️",
  "Lipstick sales historically increase during economic downturns 💄",
  "Aloe vera gel has been used for 6,000 years for skincare 🌿",
  "Coconut oil can work as a natural makeup remover 🥥",
  "Rice water has been used in Asia for centuries for hair growth 🌾"
];

const factText = document.getElementById("fact-text");

// Function to get random fact
function getRandomFact() {
  return facts[Math.floor(Math.random() * facts.length)];
}

// Set initial fact
factText.textContent = getRandomFact();

// Change fact on click
factText.addEventListener("click", () => {
  factText.textContent = getRandomFact();
});
