document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const passwordInput = document.getElementById("password");
  const errorMsg = document.getElementById("errorMsg");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");

  // Password rules
  const rules = {
    length: document.getElementById("rule-length"),
    uppercase: document.getElementById("rule-uppercase"),
    lowercase: document.getElementById("rule-lowercase"),
    number: document.getElementById("rule-number"),
    special: document.getElementById("rule-special"),
  };

  // Live password validation
  passwordInput.addEventListener("input", () => {
    const value = passwordInput.value;
    toggleRule(rules.length, value.length >= 8 );
    toggleRule(rules.uppercase, /[A-Z]/.test(value));
    toggleRule(rules.lowercase, /[a-z]/.test(value));
    toggleRule(rules.number, /[0-9]/.test(value));
    toggleRule(rules.special, /[!@#$%^&*]/.test(value));
  });

  function toggleRule(element, isValid) {
    if (isValid) element.classList.add("valid");
    else element.classList.remove("valid");
  }

  // Live Gmail validation
  emailInput.addEventListener("input", () => {
    if (emailInput.value.endsWith("@gmail.com")) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "flex";
    }
  });

  // Form submission
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Check Gmail
    if (!email.endsWith("@gmail.com")) {
      emailError.style.display = "flex";
      return;
    } else {
      emailError.style.display = "none";
    }

    // Check password rules
    if (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      alert("Signup successful! Redirecting to login...");
      window.location.href = "login.html";
    } else {
      errorMsg.textContent = "Password does not meet all requirements.Please check the requirements below.";
    }
  });

  // Google Signup (Demo)
  document.getElementById("googleSignup").addEventListener("click", () => {
    alert("Google Signup not implemented yet.");
    window.location.href = "login.html";
  });
});
