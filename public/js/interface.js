$(document).ready(function() {
	var game = new Game();

	$('#zero').click(function() {
		game.rollBall(0);
	});

	$('#one').click(function() {
		game.rollBall(1);
	});

	$('#two').click(function() {
		game.rollBall(2);
	});

	$('#three').click(function() {
		game.rollBall(3);
	});

	$('#four').click(function() {
		game.rollBall(4);
	});

	$('#five').click(function() {
		game.rollBall(5);
	});

	$('#six').click(function() {
		game.rollBall(6);
	});

  $('#seven').click(function() {
		game.rollBall(7);
	});

	$('#eigth').click(function() {
		game.rollBall(8);
	});

	$('#nine').click(function() {
		game.rollBall(9);
	});

	$('#ten').click(function() {
		game.rollBall(10);
	});

	$('#frame1').text(game.rollsArray[0,1]);
	$('#frame2').text(game.rollsArray[2,3]);
});