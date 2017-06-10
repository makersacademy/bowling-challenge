$(document).ready(function() {
	var bowling = new Bowling();
	var score = new Score(bowling.frames)

	$('#roll').click(function() {
		bowling.roll();
		var score = new Score(bowling.frames)
		updateScore(score);
	});
	
	function updateScore(score) {
		score.convertFrames();
		$('#frames').text(score.scoreBoard)
		score.checkAdditionalPoints();
		$('#points').text(score.points);
		console.log(score.points);
	};

});



