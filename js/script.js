"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct number!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = document.querySelector(".highscore").textContent;

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);
	console.log(guess, typeof guess);

	//When there is no input
	if (!guess) {
		document.querySelector(".message").textContent = "⛔ No number!";

		//When player wins
	} else if (guess === secretNumber) {
		document.querySelector(".message").textContent = "🎉 Correct number!";
		document.querySelector(".number").textContent = secretNumber;
		document.querySelector(".number").style.color = "#1d7003";

		document.querySelector("body").style.backgroundColor = "#4ddd1f";
		document.querySelector(".number").style.width = "20rem";
		document.querySelector(".number").style.fontSize = "3.8rem";

		if (score > highscore) {
			highscore = score;
			document.querySelector(".highscore").textContent = highscore;
		}

		//when guess is too high
	} else if (guess > secretNumber) {
		if (score > 1) {
			document.querySelector(".message").textContent = "📈 Too high!";
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".message").textContent = "💥 You lost the game!";
			document.querySelector(".score").textContent = 0;
		}

		//When guess is too low
	} else if (guess < secretNumber) {
		if (score > 1) {
			document.querySelector(".message").textContent = "📉 Too low!";
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".message").textContent = "💥 You lost the game!";
			document.querySelector(".score").textContent = 0;
		}
	}
});

document.querySelector(".again").addEventListener("click", function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	document.querySelector(".score").textContent = score;
	document.querySelector(".message").textContent = "Start guessing...";
	document.querySelector(".guess").value = "";
	document.querySelector(".number").textContent = "?";
	document.querySelector(".number").style.fontSize = "3rem";
	document.querySelector(".number").style.width = "38%";
	document.querySelector(".number").style.color = "antiquewhite";
	document.querySelector("body").style.backgroundColor = "#000022";
});
