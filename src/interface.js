$(function() {
	var newGame = new Bowling();

	$('#roll-1').on('submit', function () {
		newGame.roll(1);
		$('#current-total').text(newGame.rolls);
	})

	$('#roll-1').on('click', function() {
		newGame.roll(1);
		
	})

	
});
