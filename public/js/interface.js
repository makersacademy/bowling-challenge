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
    $('#score1').text(game.currentScore[0]);

		$('#roll3').text(game.rollsArray[2]);
    $('#roll4').text(game.rollsArray[3]);
    $('#score2').text(game.currentScore[1]);

    $('#roll5').text(game.rollsArray[4]);
    $('#roll6').text(game.rollsArray[5]);
    $('#score3').text(game.currentScore[2]);

		$('#roll7').text(game.rollsArray[6]);
    $('#roll8').text(game.rollsArray[7]);
    $('#score4').text(game.currentScore[3]);

    $('#roll9').text(game.rollsArray[8]);
    $('#roll10').text(game.rollsArray[9]);
    $('#score5').text(game.currentScore[4]);

    $('#roll11').text(game.rollsArray[10]);
    $('#roll12').text(game.rollsArray[11]);
    $('#score6').text(game.currentScore[5]);

		$('#roll13').text(game.rollsArray[12]);
    $('#roll14').text(game.rollsArray[13]);
    $('#score7').text(game.currentScore[6]);

    $('#roll15').text(game.rollsArray[14]);
    $('#roll16').text(game.rollsArray[15]);
    $('#score8').text(game.currentScore[7]);

		$('#roll17').text(game.rollsArray[16]);
    $('#roll18').text(game.rollsArray[17]);
    $('#score9').text(game.currentScore[8]);

    $('#roll19').text(game.rollsArray[18]);
    $('#roll20').text(game.rollsArray[19]);
    $('#roll21').text(game.rollsArray[20]);

    $('#score10').text(game.currentScore[9]);
  };
});