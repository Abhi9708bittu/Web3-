// Select elements
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

// Create and insert a "Show Password" checkbox dynamically
const toggleContainer = document.createElement("div");
toggleContainer.style.marginBottom = "15px";
toggleContainer.innerHTML = `
  <input type="checkbox" id="showPassword" />
  <label for="showPassword">Show Password</label>
`;
passwordInput.parentElement.after(toggleContainer);

// Toggle password visibility
document.querySelector("#showPassword").addEventListener("change", (e) => {
  passwordInput.type = e.target.checked ? "text" : "password";
});

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Basic validation
  if (email === "" || password === "") {
    alert("Please fill in both fields.");
    return;
  }

  // Simple email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Example login logic
  if (email === "admin@example.com" && password === "admin123") {
    alert("Login successful!");
    // Redirect or perform next action
    window.location.href = "dashboard.html"; 
  } else {
    alert("Invalid email or password. Please try again.");
  }
});
