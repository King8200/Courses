// scripts.js
// Example: Validate a form
document.getElementById('signup-form').addEventListener('submit', function(event) {
  var email = document.getElementById('email').value;

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    event.preventDefault(); // Prevent form submission
  }
});

function isValidEmail(email) {
  // Add your email validation logic here
  // Example: Simple email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
