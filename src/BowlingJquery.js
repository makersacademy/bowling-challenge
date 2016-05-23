var game = new Game();

$(document).ready(function(){

	function updateStats(){
		$("#score").text('Current score: ' + game.scoreBoard.totalScore);
		$("#frame").text('Current frame: ' + game.currentFrame());
		setRoll();
	};
	
	function setRoll(){
		if (game.isOnFirstRoll()) {
			$("#roll").text('First roll');
		} else {
			$("#roll").text('Second roll');
		};
	};

	function endGame(){
		$("#score").text('The game is over and your score was: ' + game.scoreBoard.totalScore);
		$("#frame").text('');
		$("#roll").text('');
	};

	function hidePins(){
		if (game.isOnFirstRoll()) {
			for (i = 0; i < 11; i++) {
				$('#roll'+i).show();
			};
		} else {
			var firstScore = game.scoreBoard.frameScore;
			for (i = 1; i <= firstScore; i++) {
				$('#roll'+(11-i)).hide();
			};
		};
	};

	updateStats();

	$("button[id^='roll']").click(function(event){
		var pins = event.target.id.match(/\d+/)[0];
		game.roll(Number(pins));
		if (game.isOver) {
			endGame();
		} else {
			updateStats();
			hidePins();
		};
	});
	
});