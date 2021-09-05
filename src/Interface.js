document.addEventListener("DOMContentLoaded", () => {
	const game = new Game();
	document.querySelector("#game").innerText = game.frameNo;
	document.querySelector("#ballno").innerText = game.currentFrame.currentroll;


	document.querySelector("#balls").addEventListener("click", () => {
		let ballOne = document.getElementById("ballOne").value;
		let rollOne = parseInt(ballOne, 10);

		game.rollBall(rollOne);

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
