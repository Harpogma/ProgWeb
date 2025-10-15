"use strict";

const getRandomNumber = () => {
    return Math.floor(Math.random() * (20 - 1) + 1);
}

let computerChoice = getRandomNumber();
const check = document.querySelector("#check");
const backgroundColor = document.querySelector("body");
const againButton = document.querySelector("#again");

let guess = document.querySelector("#guess").value;
let hint = document.querySelector("#hint");
let scoreElement = document.querySelector("#score");
let score = parseInt(scoreElement.textContent);
let highScoreElement = document.querySelector("#highscore");
let maxScore = parseInt(highScoreElement.textContent);

const compareResult = (user, computer) => {
    if (user < computer) {
        hint.textContent = "Too low!";
        score -= parseInt(1);
        scoreElement.textContent = score.toString();
    } else if (user > computer) {
        hint.textContent = "Too high!"
        score -= parseInt(1);
        scoreElement.textContent = score.toString();
    } else {
        hint.textContent ="Correct Number!"
        backgroundColor.style.backgroundColor = "Green";
        maxScore = score;
        highScoreElement.textContent = maxScore.toString();
    }
}

check.addEventListener("click", () => {
    guess = document.querySelector("#guess").value;

    if(guess < 0 || guess > 20) {
        hint.textContent = "Guess must be between 1 and 20";
        score -= parseInt(1);
        scoreElement.textContent = score.toString();
    } else {
        compareResult(guess, computerChoice);
    }
})

againButton.addEventListener("click", () => {
    score = parseInt(20);
    scoreElement.textContent = score.toString();
    computerChoice = getRandomNumber();
    backgroundColor.style.backgroundColor = "#222";
    hint.textContent = "Start guessing...";
})




