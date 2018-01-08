$(document).ready(function() {

	var scoreSheet = new ScoreSheet();
	// var frame = new Frame();

	for(var i = 0; i < 11; i++) {
		clickButton(i)
	}

	function displayRoll(rollDisplay) {
		$("#score-table tr:eq(1) td:eq(0)").html(rollDisplay)
	}

	function clickButton(i) {
		$("#bt" + i).on("click", function(){
			$("#buttons button:eq(i)").html(i);
			displayRoll(i)
		});
	}
});
