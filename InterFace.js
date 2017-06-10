$(document).ready(function() {
	var bowling = new Bowling();
	$('#frames').text(bowling.frame)

	$('#roll-one').click(function() {
		bowling.rollOne();
		updateScore();
	});
	
	$('#roll-two').click(function() {
		bowling.rollTwo();
		updateScore();
	});

	function updateScore() {
		$('#frames').text(bowling.frame)
	};

});



