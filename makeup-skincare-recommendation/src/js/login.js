document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Demo credentials (replace with backend later)
    const demoEmail = "user@gmail.com";
    const demoPassword = "1234567890";

    if (email === demoEmail && password === demoPassword) {
      alert("Login successful! Redirecting...");
      window.location.href = "homepage.html"; // Redirect to homepage
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
});
