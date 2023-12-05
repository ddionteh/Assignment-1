// JavaScript to add the class to trigger the animation
document.addEventListener("DOMContentLoaded", function() {
    const welcomeSection = document.querySelector(".welcome-section");
    welcomeSection.classList.add("show-text");
  });
  
const boat = document.getElementById('boat');
const lightning = document.getElementById('lightning');

const flashLightning = () => {
  // Show the lightning
  lightning.style.visibility = 'visible';

  // Hide the lightning after a short delay
  setTimeout(() => {
    lightning.style.visibility = 'hidden';
  }, 200); // Adjust the duration of the flash as needed

  // Repeat the flashing effect after a delay
  setTimeout(flashLightning, 2000); // Adjust the interval between flashes as needed
};

// Trigger the flashing animation
flashLightning();
