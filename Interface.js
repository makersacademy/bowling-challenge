document.addEventListener("DOMContentLoaded", () => {
	const game = new Game();
	document.querySelector("#game").innerText = game.frameNo;
	document.querySelector("#ballno").innerText = game.currentFrame.currentroll;
	// document.getElementById("ballThree").style.display = "none";

	document.querySelector("#balls").addEventListener("click", () => {
		let ballOne = document.getElementById("ballOne").value;
		let rollOne = parseInt(ballOne, 10);
		// let ballTwo = document.getElementById("ballTwo").value;
		// let rollTwo = parseInt(ballTwo, 10);
		// if (game.frameNo === 9) {
		// 	document.getElementById("ballThree").style.display = "block";
		// 	let ballThree = document.getElementById("ballThree").value;
		// 	let rollThree = parseInt(ballThree, 10);
		// 	game.rollBall(rollThree);
		// }
		game.rollBall(rollOne);
		// game.rollBall(rollTwo);
		if (game.frameNo > 10) {
			document.querySelector("#game").innerText = "10";
		} else {
			document.querySelector("#game").innerText = game.frameNo;
		}
		document.querySelector("#ballno").innerText = game.currentFrame.currentroll;
	});

	document.querySelector("#score").addEventListener("click", () => {
		game.score();
		document.querySelector("#current-score").innerText = game.currentscore;
	});
});
