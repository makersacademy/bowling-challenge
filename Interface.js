document.addEventListener("DOMContentLoaded", () => {
	const game = new Game();
	document.querySelector("#game").innerText = game.frameNo;

	document.querySelector("#balls").addEventListener("click", () => {
		let ballOne = document.getElementById("ballOne").value;
		let rollOne = parseInt(ballOne, 10);
		// let ballTwo = document.getElementById("ballTwo").value;
		// let rollTwo = parseInt(ballTwo, 10);
		game.rollBall(rollOne);
		// game.rollBall(rollTwo);
		// if (game.frameNo > 10) {
		// 	document.querySelector("#game").innerText = "Game Over";
		// } else {
			document.querySelector("#game").innerText = game.frameNo;
		// }
	});

	document.querySelector("#score").addEventListener("click", () => {
		game.score();
		document.querySelector("#current-score").innerText = game.currentscore;
	});
});
