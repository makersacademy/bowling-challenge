$(document).ready(function() {
  var game = new Game();
  gameFunctionality();

  $('#bowl').click(function() {
    game.bowl();
    gameFunctionality();
  });

  $('#play').click(function(){
    $('embed').remove();
    $('body').append();
});

  $('#new_game').click(function() {
    game.newGame();
    gameFunctionality();
  });


  function gameFunctionality() {
    $('#total_score').text(game._totalScore);
    $('#current_frame').text(game._frame);
    $('#roll_1').text(game._firstRollScore);
    $('#roll_2').text(game._secondRollScore);
    $('#current_roll').text(game._roll);
    $('#bonus').text(game._bonus);
    $('#error').text(game._standingPins);
    $('#test').text(game._gameOver);
  }
});
