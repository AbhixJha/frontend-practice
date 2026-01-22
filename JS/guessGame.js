let secretNumber;
let attempts = 0;
let highScore = 0;

const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const message = document.getElementById("message");
const attemptsEl = document.getElementById("attempts");
const highScoreEl = document.getElementById("high-score");
const playAgainBtn = document.getElementById("play-again");

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  message.textContent = '';
  guessInput.value = '';
  attemptsEl.textContent = '0';
  guessInput.disabled = false;
  submitBtn.disabled = false;
  playAgainBtn.classList.add("hidden");
  console.log(`(Debug) Secret Number: ${secretNumber}`);
}

function checkGuess() {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "❗ Please enter a valid number between 1 and 100.";
    return;
  }

  attempts++;
  attemptsEl.textContent = attempts;

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    if (highScore === 0 || attempts < highScore) {
      highScore = attempts;
      highScoreEl.textContent = highScore;
    }
    endGame();
  } else if (guess > secretNumber) {
    message.textContent = "📈 Too high! Try a lower number.";
  } else {
    message.textContent = "📉 Too low! Try a higher number.";
  }

  guessInput.value = '';
}

function endGame() {
  guessInput.disabled = true;
  submitBtn.disabled = true;
  playAgainBtn.classList.remove("hidden");
}

submitBtn.addEventListener("click", checkGuess);
playAgainBtn.addEventListener("click", startGame);

// Allow pressing Enter to submit
guessInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkGuess();
  }
});

startGame();
