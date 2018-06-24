var ScoreDisplay, ScoreCalculator;

$(document).ready( function() {
	var scoreCalculator = new ScoreCalculator;
	var scoreDisplay;

	$(function values() {
		var $select = $(".0-10");
		for (var i = 0; i <= 10; i++) {
			$select.append($("<option></option>").val(i).html(i));
		}
	});

	function extractScores() {
		var frames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "bonus"];
		var extractedFrameScores = [];
		frames.forEach(function(i) {
			extractedFrameScores.push([parseInt($("#frame-" + i + "-roll-one").val(), 10), parseInt($("#frame-" + i + "-roll-two").val(), 10)]);
		});
		return extractedFrameScores;
	}

	$("#submit").click ( function(event) {
		event.preventDefault();
		var scores = extractScores();
		scoreCalculator.addScore(scores);
		scoreCalculator.calculateScore();
		var gameScore = scoreCalculator.getScore();
		scoreDisplay = new ScoreDisplay(gameScore);
		$("#total-score").text(scoreDisplay.getTotalScore());
	});

	$("#reset").click ( function() {
		scoreCalculator.clearScore();
		scoreCalculator.getScore();
		scoreDisplay.reset();
		$("#total-score").text(scoreDisplay.getTotalScore());
	});

});
