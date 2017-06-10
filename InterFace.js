$(document).ready(function() {
	var bowling = new Bowling();
	var score = new Score(bowling.frames)
	$('#frames').text(bowling.frame)

	$('#roll').click(function() {
		bowling.roll();
		var score = new Score(bowling.frames)
		updateScore();
		console.log(score.points);
	});
	
	function updateScore() {
		bowling.convertFrames();
		$('#frames').text(bowling.framesSymbols)
		score.checkAdditionalPoints
		$('#points').text(score.points)
};

});



