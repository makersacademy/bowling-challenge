$(document).ready(function() {
	var game = new Game();

	$('#zero').click(function() {
		game.rollBall(0);
		updateFrame();
	});

	$('#one').click(function() {
		game.rollBall(1);
		updateFrame();
	});

	$('#two').click(function() {
		game.rollBall(2);
		updateFrame();
	});

	$('#three').click(function() {
		game.rollBall(3);
		updateFrame();
	});

	$('#four').click(function() {
		game.rollBall(4);
		updateFrame();
	});

	$('#five').click(function() {
		game.rollBall(5);
		updateFrame();
	});

	$('#six').click(function() {
		game.rollBall(6);
		updateFrame();
	});

  $('#seven').click(function() {
		game.rollBall(7);
		updateFrame();
	});

	$('#eigth').click(function() {
		game.rollBall(8);
		updateFrame();
	});

	$('#nine').click(function() {
		game.rollBall(9);
		updateFrame();
	});

	$('#ten').click(function() {
		game.rollBall(10);
		updateFrame();
	});


  function updateFrame() {
    $('#roll1').text(game.rollsArray[0]);
    $('#roll2').text(game.rollsArray[1]);

		$('#roll3').text(game.rollsArray[2]);
    $('#roll4').text(game.rollsArray[3]);

    $('#roll5').text(game.rollsArray[4]);
    $('#roll6').text(game.rollsArray[5]);

		$('#roll7').text(game.rollsArray[6]);
    $('#roll8').text(game.rollsArray[7]);

    $('#roll9').text(game.rollsArray[8]);
    $('#roll10').text(game.rollsArray[9]);

    $('#roll11').text(game.rollsArray[10]);
    $('#roll12').text(game.rollsArray[11]);

		$('#roll13').text(game.rollsArray[12]);
    $('#roll14').text(game.rollsArray[13]);

    $('#roll15').text(game.rollsArray[14]);
    $('#roll16').text(game.rollsArray[15]);

		$('#roll17').text(game.rollsArray[16]);
    $('#roll18').text(game.rollsArray[17]);

    $('#roll19').text(game.rollsArray[18]);
    $('#roll20').text(game.rollsArray[19]);
    $('#roll21').text(game.rollsArray[20]);
  };
});