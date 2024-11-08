const counterElement = document.getElementById("counter");
const clickerButton = document.getElementById("button-clicker");
const resetButton = document.getElementById("button-reset");

let score = 0;

clickerButton.addEventListener("click", function() {
  score++;
  counterElement.textContent = score;
});


resetButton.addEventListener("click", function() {
  score = 0;
  counterElement.textContent = score; 
});