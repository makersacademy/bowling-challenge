$(document).ready(function() {

  bowling = new Bowling();

  $('#0').click(function() {
    bowling.pinsInCurrentBall(0);
    update();
  });

  $('#1').click(function() {
    bowling.pinsInCurrentBall(1);
    update();
  });

  $('#2').click(function() {
    bowling.pinsInCurrentBall(2);
    update();
  });

  $('#3').click(function() {
    bowling.pinsInCurrentBall(3);
    update();
  });

  $('#4').click(function() {
    bowling.pinsInCurrentBall(4);
    update();
  });

  $('#5').click(function() {
    bowling.pinsInCurrentBall(5);
    update();
  });

  $('#6').click(function() {
    bowling.pinsInCurrentBall(6);
    update();
  });

  $('#7').click(function() {
    bowling.pinsInCurrentBall(7);
    update();
  });

  $('#8').click(function() {
    bowling.pinsInCurrentBall(8);
    update();
  });

  $('#9').click(function() {
    bowling.pinsInCurrentBall(9);
    update();
  });

  $('#10').click(function() {
    bowling.pinsInCurrentBall(10);
    update();
  });

  // $('end-game').click(function() {
  //   $('#current-score').text(bowling.getScore());
  // });

  function update() {
    $('#current-score').text(bowling.testGetScore());
    $('#ball-number').text(bowling.getBallNumber());
  };
});
