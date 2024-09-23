const container = document.querySelector("#container");
const heart = document.querySelector("i");

// Add a double-click event listener to the container
container.addEventListener("dblclick", () => {
  heart.style.transform = "translate(-50%, -50%) scale(1)";
  heart.style.opacity = 0.8;

  // After 1 second, start fading the heart out
  setTimeout(() => {
    heart.style.opacity = 0;
  }, 1000);

  // After 2 second, the heart back to its original
  setTimeout(() => {
    heart.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2000);
});
