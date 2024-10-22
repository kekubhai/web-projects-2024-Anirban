let score = 0;
let timeLeft = 300; // 5 minutes
let currentClueIndex = 0;
let gameTimer;

const clues = [
    "I’m tall when I’m young, and I’m short when I’m old. What am I?",
    "I speak without a mouth and hear without ears. What am I?",
    "The more of this there is, the less you see. What is it?"
];

const answers = [
    "candle",
    "echo",
    "darkness"
];

// Start game
document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('current-clue').textContent = clues[currentClueIndex];
    startTimer();
});

// Submit Answer
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value.trim().toLowerCase();
    if (userAnswer === answers[currentClueIndex]) {
        score += 10;  // Increase score for the correct answer
        currentClueIndex++;
        if (currentClueIndex < clues.length) {
            document.getElementById('current-clue').textContent = clues[currentClueIndex];
            document.getElementById('user-answer').value = '';  // Clear input
        } else {
            endGame(true);
        }
    } else {
        alert("Wrong answer! Try again.");
    }
    document.getElementById('score').textContent = score;
}

function startTimer() {
    gameTimer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;

        if (timeLeft <= 0) {
            endGame(false);
        }
    }, 1000);
}

function endGame(won) {
    clearInterval(gameTimer);
    if (won) {
        alert("Congratulations! You've completed the scavenger hunt!");
    } else {
        alert("Time's up! Game over.");
    }
}

// Example for adding future puzzles or games
// You can dynamically load more complex puzzles here in the `puzzle-area`
