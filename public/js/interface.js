$(document).ready(function() {
	var game = new Game();
	var pin = new Pin();
	$('#frame1').text(game.rollsArray[0,1]);
	$('#frame2').text(game.rollsArray[2,3]);

	$('#zero').click(function() {
		pin.pinsDown(game.rollBall(0));
	});

	$('#one').click(function() {
		pin.pinsDown(game.rollBall(1));
		$('#pins').text(game.rollsArray);
	});

	$('#two').click(function() {
		pin.pinsDown(game.rollBall(2));
		$('#pins').text(game.rollsArray);
	});

	$('#three').click(function() {
		pin.pinsDown(game.rollBall(3));
		$('#pins').text(game.rollsArray);
	});

	$('#four').click(function() {
		pin.pinsDown(game.rollBall(4));
		$('#pins').text(game.rollsArray);
	});

	$('#five').click(function() {
		pin.pinsDown(game.rollBall(5));
		$('#pins').text(game.rollsArray);
	});

	$('#six').click(function() {
		pin.pinsDown(game.rollBall(6));
		$('#pins').text(game.rollsArray);
	});

  $('#seven').click(function() {
		pin.pinsDown(game.rollBall(7));
		$('#pins').text(game.rollsArray);
	});

	$('#eigth').click(function() {
		pin.pinsDown(game.rollBall(8));
		$('#pins').text(game.rollsArray);
	});

	$('#nine').click(function() {
		pin.pinsDown(game.rollBall(9));
		$('#pins').text(game.rollsArray);
	});

	$('#ten').click(function() {
		pin.pinsDown(game.rollBall(10));
		$('#pins').text(game.rollsArray);
	});
});