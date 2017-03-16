

$( document ).ready(function(){
  var bowling = new Bowling();
  $('#currentscore').text(bowling.showScore());
  $('#currentframe').text(bowling.showFrame());
  $('#gameover').text(bowling.showGameOver());

  $('#one').click(function (event) {
    bowling.enterScore(1);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
    $('#gameover').text(bowling.showGameOver());
      });

  $('#two').click(function (event) {
    bowling.enterScore(2);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
    $('#gameover').text(bowling.showGameOver());
  });

  $('#two').click(function (event) {
    bowling.enterScore(2);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
    $('#gameover').text(bowling.showGameOver());
  });

  $('#three').click(function (event) {
    bowling.enterScore(3);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
    $('#gameover').text(bowling.showGameOver());
  });

  $('#four').click(function (event) {
    bowling.enterScore(4);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
    $('#gameover').text(bowling.showGameOver());
  });

  $('#five').click(function (event) {
    bowling.enterScore(5);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
    $('#gameover').text(bowling.showGameOver());
  });

  $('#six').click(function (event) {
    bowling.enterScore(6);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
    $('#gameover').text(bowling.showGameOver());
  });

  $('#seven').click(function (event) {
    bowling.enterScore(7);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
    $('#gameover').text(bowling.showGameOver());
  });

  $('#eight').click(function (event) {
    bowling.enterScore(8);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
    $('#gameover').text(bowling.showGameOver());
  });

  $('#nine').click(function (event) {
    bowling.enterScore(9);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
    $('#gameover').text(bowling.showGameOver());
  });

  $('#ten').click(function (event) {
    bowling.enterScore(10);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
    $('#gameover').text(bowling.showGameOver());
  });



});
