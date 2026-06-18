// Welcome message
window.onload = function() {
  alert("Welcome to Digital Skills Academy!");
};

// Navigation click message
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", function() {
    console.log("You clicked: " + this.textContent);
  });
});const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you! Your message has been received.");
  });
}function showMessage() {
  alert("Digital Skills Academy helps students gain practical technology skills.");
}