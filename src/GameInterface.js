$(document).ready(function() {
  var game = new Game();
  gameFunctionality();

  $('#one').click(function() {
    pins = 1
    game.bowl();
    gameFunctionality();
  });
  $('#two').click(function() {
    pins = 2
    game.bowl();
    gameFunctionality();
  });
  $('#three').click(function() {
    pins = 3
    game.bowl();
    gameFunctionality();
  });
  $('#four').click(function() {
    pins = 4
    game.bowl();
    gameFunctionality();
  });
  $('#five').click(function() {
    pins = 5
    game.bowl();
    gameFunctionality();
  });
  $('#six').click(function() {
    pins = 6
    game.bowl();
    gameFunctionality();
  });
  $('#seven').click(function() {
    pins = 7
    game.bowl();
    gameFunctionality();
  });
  $('#eight').click(function() {
    pins = 8
    game.bowl();
    gameFunctionality();
  });
  $('#nine').click(function() {
    pins = 9
    game.bowl();
    gameFunctionality();
  });
  $('#ten').click(function() {
    pins = 10
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
