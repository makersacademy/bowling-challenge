$(document).ready(function() {
	var bowling = new Bowling();
	var score = new Score(bowling.framesNumbers)

	$('#roll').click(function() {
		bowling.roll();
		var score = new Score(bowling.framesNumbers)
		updateScore(score);
	});
	
	function updateScore(score) {
		score.checkAdditionalPoints();
		$('#points').text(score.points);
	//	bowling.convertFrames();
		$('#frames').text(bowling.framesNumbers)
	};

});



