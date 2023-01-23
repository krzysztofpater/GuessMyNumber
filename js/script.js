"use strict";

let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = document.querySelector(".highscore").textContent;

const displayMessage = (message) => {
	document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);
	console.log(guess, typeof guess); // just checking - leave for production version

	//When there is no input
	if (!guess) {
		displayMessage("⛔ No number!");

		//When player wins
	} else if (guess === secretNumber) {
		displayMessage("🎉 Correct number!");
		document.querySelector(".number").textContent = secretNumber;
		document.querySelector(".number").style.color = "#4ddd1f";

		document.querySelector("body").style.backgroundColor = "#1d7003";
		document.querySelector(".number").style.width = "20rem";
		document.querySelector(".number").style.fontSize = "3.8rem";

		if (score > highscore) {
			highscore = score;
			document.querySelector(".highscore").textContent = highscore;
		}

		//When guess is wrong
	} else if (guess !== secretNumber) {
		//when guess is too high or too low
		if (score > 1) {
			displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			displayMessage("💥 You lost the game!");
			document.querySelector(".score").textContent = 0;
		}
	}
});

//Reset button
document.querySelector(".again").addEventListener("click", function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 50) + 1;
	document.querySelector(".score").textContent = score;
	displayMessage("Start guessing...");
	document.querySelector(".guess").value = "";
	document.querySelector(".number").textContent = "?";
	document.querySelector(".number").style.fontSize = "3rem";
	document.querySelector(".number").style.width = "38%";
	document.querySelector(".number").style.color = "antiquewhite";
	document.querySelector("body").style.backgroundColor = "#000022";
});
