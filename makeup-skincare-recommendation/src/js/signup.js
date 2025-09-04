document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const passwordInput = document.getElementById("password");
  const errorMsg = document.getElementById("errorMsg");

  // Password rules
  const rules = {
    length: document.getElementById("rule-length"),
    uppercase: document.getElementById("rule-uppercase"),
    lowercase: document.getElementById("rule-lowercase"),
    number: document.getElementById("rule-number"),
    special: document.getElementById("rule-special"),
  };

  // Check password live
  passwordInput.addEventListener("input", () => {
    const value = passwordInput.value;

    toggleRule(rules.length, value.length >= 8 && value.length <= 16);
    toggleRule(rules.uppercase, /[A-Z]/.test(value));
    toggleRule(rules.lowercase, /[a-z]/.test(value));
    toggleRule(rules.number, /[0-9]/.test(value));
    toggleRule(rules.special, /[!@#$%^&*]/.test(value));
  });

  function toggleRule(element, isValid) {
    if (isValid) {
      element.classList.add("valid");
    } else {
      element.classList.remove("valid");
    }
  }

  // On form submit
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value.trim();

    // Validate password meets all rules
    if (
      password.length >= 8 &&
      password.length <= 16 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      alert("Signup successful! Redirecting to login...");
      window.location.href = "login.html";
    } else {
      errorMsg.textContent = "Password does not meet all requirements.";
    }
  });

  // Google Signup Button (Demo only)
  document.getElementById("googleSignup").addEventListener("click", () => {
    alert("Google Signup is not fully implemented yet.\n(Here you would connect Google OAuth API.)");
    // After successful Google signup -> redirect
    window.location.href = "login.html";
  });
});
