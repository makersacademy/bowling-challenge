$(document).ready(function() {
	var bowling = new Bowling();
	$('#frames').text(bowling.frame)

	$('#roll').click(function() {
		bowling.roll();
		updateScore();
	});
	
	function updateScore() {
		bowling.convertFrames();
		$('#frames').text(bowling.framesSymbols)
	};

});



