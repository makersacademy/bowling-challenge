$(document).ready(function() {
	var game = new Game();
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





  $('#reset')on('click', function() {
  	game.reset();
  	$('.eachroll').text('');
  	$('.eachframe').text('');
  	updateScore();
  });

  function updateScore() {
  	$('#totalscore').text('game.getScore()');
  	thisRoll = game.roll;    
    $('#roll' + thisRoll).text(game.rollsScores[thisRoll - 1]);

  	thisFrame = game.frame - 1;
 	$('#marker' + thisFrame).text(game.oneFrameScores[thisFrame - ]);
 }
 
});