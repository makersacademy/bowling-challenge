$(function() {

	var game = new Bowling();

	$('#roll-0').on('submit', function () {
		game.roll(0);
		$('#totals').text(game.currentTotal());
	});
	
});
