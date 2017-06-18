$(document).ready(function() {
	var bowling = new Bowling();
	var score = new Score(bowling.framesNumbers)

	$('#roll').click(function() {
		bowling.roll();
		var score = new Score(bowling.framesNumbers)
		$('#throw').text("You threw: " + bowling.rollPoints);
			updateScore(score);
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
			/*			
						"<p> [" +  score.scoreBoard[score.scoreBoard.length - 1] + "] </br> " + score.points[score.points.length - 1] + " </p>")
			*/
	};

});



