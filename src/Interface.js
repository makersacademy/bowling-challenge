$(document).ready(function() {
	var game = new Game;
	updateScore();

  $('#roll_0').on('click', function() {
  	game.oneRoll(0);
  	updateScore();
  });

  $('#roll_1').on('click', function() {
  	game.oneRoll(1);
  	updateScore();
  });

  $('#roll_2').on('click', function() {
  	game.oneRoll(2); 
  	updateScore();
  });

  $('#roll_3').on('click', function() {
  	game.oneRoll(3);
  	updateScore();
  });

  $('#roll_4').on('click', function() {
  	game.oneRoll(4);
  	updateScore();
  });

  $('#roll_5').on('click', function() {
    game.oneRoll(5);
    updateScore();
  });

  $('#roll_6').on('click', function() {
    game.oneRoll(6);
    updateScore();
  });

  $('#roll_7').on('click', function() {
    game.oneRoll(7);
    updateScore();
  });

  $('#roll_8').on('click', function() {
    game.oneRoll(8);
    updateScore();
  });

  $('#roll_9').on('click', function() {
    game.oneRoll(9);
    updateScore();
  });

  $('#roll_10').on('click', function() {
    game.oneRoll(10);
    updateScore();
  });

  $('#reset_game').on('click', function() {
  	game.resetGame();
  	$('.eachroll').text('');
  	$('.eachframe').text('');
  	updateScore();
  }); 

  function updateScore() {
  	$('#totalscore').text(game.score);
  	thisRoll = game.roll;    
    $('#roll' + thisRoll).text(game.rollsScores[thisRoll - 1]);

  	thisFrame = game.frame - 1;
 	  $('#marker' + thisFrame).text(game.oneFrameScores[thisFrame - 1]);
  }
 
});