// Add any JavaScript functionality you need here.
console.log("Script loaded successfully!");

// Example: Animate a welcome message
const welcomeMessage = document.querySelector("header h1");

welcomeMessage.addEventListener("mouseover", () => {
    welcomeMessage.style.color = "#007bff";
});

welcomeMessage.addEventListener("mouseout", () => {
    welcomeMessage.style.color = "#fff";
});