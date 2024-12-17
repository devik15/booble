const bubbleContainer = document.getElementById("bubble-container");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("start-button");

let score = 0;
let gameInterval;

function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  // Randomize bubble position and animation duration
  const size = Math.random() * 30 + 30; // Bubble size between 30px and 60px
  const left = Math.random() * (bubbleContainer.offsetWidth - size);
  const duration = Math.random() * 3 + 2; // Duration between 2s and 5s

  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${left}px`;
  bubble.style.animationDuration = `${duration}s`;

  // Remove bubble if it reaches the top without being popped
  bubble.addEventListener("animationend", () => {
    bubble.remove();
  });

  // Pop the bubble
  bubble.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    bubble.remove();
  });

  bubbleContainer.appendChild(bubble);
}

function startGame() {
  score = 0;
  scoreDisplay.textContent = score;
  bubbleContainer.innerHTML = ""; // Clear previous bubbles

  // Generate bubbles every 500ms
  gameInterval = setInterval(createBubble, 500);

  // End game after 30 seconds
  setTimeout(() => {
    clearInterval(gameInterval);
    alert(`Game Over! Your final score is ${score}.`);
  }, 30000);
}

startButton.addEventListener("click", startGame);
