"use strict";

let again = document.querySelector(".again");
let check = document.querySelector(".check");
let guess = document.querySelector(".guess");
let highscore = document.querySelector(".highscore");
let message = document.querySelector(".message");
let number = document.querySelector(".number");
let score = document.querySelector(".score");
let secretInt = Math.trunc(Math.random() * 20) + 1;
// number.textContent = secretInt; // just test

const resetGuess = () => {
    guess.value = "";
    guess.focus();
}

const endGame = () => {
    guess.disabled = true;
    check.disabled = true;
}

const resetGame = () => {
    secretInt = Math.trunc(Math.random() * 20) + 1;
    number.textContent = "?";
    message.textContent = "Start guessing...";
    score.textContent = 20;
    guess.disabled = false;
    check.disabled = false;
}

const playGame = () => {
    let guessInt = parseInt(guess.value);
    let scoreInt = parseInt(score.textContent);
    let highInt = parseInt(highscore.textContent);
    if (typeof guessInt === "number" && guessInt > 0 && guessInt <= 20) {
        if (guessInt === secretInt) {
            message.textContent = "You win!";
            number.textContent = secretInt;
            scoreInt += 10;
            score.textContent = scoreInt;
            if (scoreInt > highInt) highInt = scoreInt;
            highscore.textContent = highInt;
            resetGuess();
            endGame();
        } else if (guessInt > secretInt) {
            message.textContent = "Too high";
            scoreInt--;
            score.textContent = scoreInt;
            resetGuess();
        } else if (guessInt < secretInt) {
            message.textContent = "Too low";
            scoreInt--;
            score.textContent = scoreInt;
            resetGuess();
        }
    } else {
        message.textContent = "Please enter number 1-20";
        resetGuess();
    }
}

check.addEventListener("click", playGame);
again.addEventListener("click", resetGame);