

$( document ).ready(function(){
  var bowling = new Bowling();
  $('#currentscore').text(bowling.showScore());
  $('#currentframe').text(bowling.showFrame());

  $('#one').click(function (event) {
    bowling.enterScore(1);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
      });

  $('#two').click(function (event) {
    bowling.enterScore(2);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
  });

  $('#two').click(function (event) {
    bowling.enterScore(2);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
  });

  $('#three').click(function (event) {
    bowling.enterScore(3);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
  });

  $('#four').click(function (event) {
    bowling.enterScore(4);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
  });

  $('#five').click(function (event) {
    bowling.enterScore(5);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
  });

  $('#six').click(function (event) {
    bowling.enterScore(6);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
  });

  $('#seven').click(function (event) {
    bowling.enterScore(7);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
  });

  $('#eight').click(function (event) {
    bowling.enterScore(8);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
  });

  $('#nine').click(function (event) {
    bowling.enterScore(9);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
  });

  $('#ten').click(function (event) {
    bowling.enterScore(10);
    $('#currentscore').text(bowling.showScore());
    $('#currentframe').text(bowling.showFrame());
  });



});
