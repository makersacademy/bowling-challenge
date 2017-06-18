$(document).ready(function() {
	var bowling = new Bowling();
	var score = new Score(bowling.framesNumbers)

	$('#roll').click(function() {
		bowling.roll();
		var score = new Score(bowling.framesNumbers)
		
		$('#throw').text("You threw: " + bowling.rollPoints);
		updateScore(score);
		calculateTotal(score);
	});
	
	function updateScore(score) {
		score.checkAdditionalPoints();
		//$('#points').text(score.points);
		//score.convertFrames();

			if(bowling.isFullFrame) {
			$('#frames').text('')
			$('#points').text('')
				score.scoreBoard.forEach(function(frame, i) {
					$('#frames').append("<p> [" + frame + "] </br>" + score.points[i]+ "</p>") 
				});
			};
	};

	function calculateTotal(score) {
		score.calculateTotal();
		$('#total-points').text(score.total);
	};
});


