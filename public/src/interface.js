$(document).ready(function() {

  bowling = new Bowling();

  $('#1').click(function() {
    bowling.pinsInCurrentBall(1);
    console.log(bowling.getScore());
    updateScore();
  });

  $('#2').click(function() {
    bowling.pinsInCurrentBall(2);
    updateScore();
  });

  $('#3').click(function() {
    bowling.pinsInCurrentBall(3);
    updateScore();
  });

  $('#4').click(function() {
    bowling.pinsInCurrentBall(4);
    updateScore();
  });

  $('#5').click(function() {
    bowling.pinsInCurrentBall(5);
    updateScore();
  });

  $('#6').click(function() {
    bowling.pinsInCurrentBall(6);
    updateScore();
  });

  $('#7').click(function() {
    bowling.pinsInCurrentBall(7);
    updateScore();
  });

  $('#8').click(function() {
    bowling.pinsInCurrentBall(8);
    updateScore();
  });

  $('#9').click(function() {
    bowling.pinsInCurrentBall(9);
    updateScore();
  });

  $('#10').click(function() {
    bowling.pinsInCurrentBall(10);
    updateScore();
  });

  function updateScore() {
    $('#current-score').text(bowling.getScore());
  }
});
