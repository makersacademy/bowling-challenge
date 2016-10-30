var scorecard = new Scorecard();

$(
	function() {
		$('#update-score').submit(function(event) {
				event.preventDefault();
				scorecard.updateScorecard( parseInt($('#score-input').val() ) );
				updateInterface(scorecard);
			});

			function updateInterface(scorecard) {
				frames = scorecard.frames;
				$.each(frames, function(index,frame) {
					$('.first-result').eq(index).text(frame.bowlOneScore);
					$('.second-result').eq(index).text(frame.bowlTwoScore);
					$('.total-score').eq(index).text(frame.currentTotal);

				});
			};
	}

)