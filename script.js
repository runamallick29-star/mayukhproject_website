function showMessage() {
  const msg = document.getElementById("msg");
  msg.innerText = "Thank you for reaching out! We'll get back to you soon.";
}

// Handle registration form
document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const course = document.getElementById("course").value;

  const formMsg = document.getElementById("formMsg");
  formMsg.innerText = `Registration successful! Welcome, ${name}. You have registered for ${course}.`;

  // Clear form
  document.getElementById("registrationForm").reset();
});
