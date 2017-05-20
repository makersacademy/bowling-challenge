$(document).ready(function() {
  var game = new Game();
  gameFunctionality();

  $('#bowl').click(function() {
    game.bowl();
    gameFunctionality();
  });

  $('#play').click(function(){
    $('embed').remove();
    $('body').append('<embed src="/path/to/your/sound.wav" autostart="true" hidden="true" loop="false">');
});

  $('#new_game').click(function() {
    game.newGame();
    gameFunctionality();
  });


  function gameFunctionality() {
    $('#total_score').text(game._totalScore);
    $('#current_frame').text(game._frame);
    $('#roll_1').text(game._rollScore1);
    $('#roll_2').text(game._rollScore2);
    $('#current_roll').text(game._roll);
    $('#sKsP').text(game._sKsP);
    $('#error').text(game._standingPins);
    $('#test').text(game._gameOver);
  }
});
