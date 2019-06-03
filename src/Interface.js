$(document).ready(function() {
	var game = new Game();
	updateScore();

  $('#roll1').on('click', function() {
  	game.oneRoll(1);
  	updateScore();
  });

  $('#roll2').on('click', function() {
  	game.oneRoll(2);
  	updateScore();
  });

  $('#roll3').on('click', function() {
  	game.oneRoll(3);
  	updateScore();
  });



  $('#reset')on('click', function() {
  	game.reset();
  	$('.eachroll').text('');
  	$('.eachframe').text('');
  	updateScore();
  });

  function updateScore() {
  	$('#score').text(game.getScore());
  	rolls = game.roll;
    if ( rolls === 1 && rolls === 1) 	    
    $('#row1' + rolls).text(game.rollsScores[rolls - 1]);

  	frameNo = game.frame - 1;
 	$('#marker' + frame).text(game.oneFrameScores[frameNo - ]);
 }
});