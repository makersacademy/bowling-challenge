$(document).ready(function() {

	var game = new Game();
	var inputroll = $("#rollIn").val();

	var tFrameFields = ["F1Frame", "F2Frame", "F3Frame", "F4Frame", "F5Frame",
		"F6Frame", "F7Frame", "F8Frame", "F9Frame", "F10Frame"		
	];
	var tScoreFields = ["F1Score", "F2Score", "F3Score", "F4Score", 
		"F5Score","F6Score", "F7Score", "F8Score", "F9Score", "F10Score"		
	];
	var	tNoteFields = ["F1note", "F2note", "F3note", "F4note", "F5note",
		"F6note", "F7note", "F8note", "F9note", "F10note"		
	];

	function updateTable() {
		$("#" + tFrameFields[game.visualFrame - 1]).text(game.scoreHistory[game.currentFrame -2 ]);
		$("#" + tScoreFields[game.visualFrame - 1]).text(game.currentScore);
		$("#" + tNoteFields[game.visualFrame -1]).text(game.bonusMessage);
	}

	$("#rollSelectVal").text(inputroll);

	$("#rollIn").on("change", function() {
		inputroll = $("#rollIn").val();
		$("#rollSelectVal").text(inputroll);
	});

	$("#RollSubmit").on("click", function() {
		game.roll(parseInt(inputroll));
		updateTable();
		
		console.log(game.currentScore);
		if(game.gameOver == true) {
			alert("Game over!\nYou scored " + game.currentScore);
		}
	});

	
	

	
});