$(document).ready(function() {
  var score = new Score;
  var bowling = new Bowling(score);

  $('#1').click(function() {
    bowling.pinsHit(1);
  });

  $('#2').click(function() {
    bowling.pinsHit(2);

  });

  $('#3').click(function() {
    bowling.pinsHit(3);
  });

  $('#4').click(function() {
    bowling.pinsHit(4);
  });

  $('#5').click(function() {
    bowling.pinsHit(5);
  });

  $('#6').click(function() {
    bowling.pinsHit(6);
  });

  $('#7').click(function() {
    bowling.pinsHit(7);
  });

  $('#8').click(function() {
    bowling.pinsHit(8);
  });

  $('#9').click(function() {
    bowling.pinsHit(9);
  });

  $('#10').click(function() {
    bowling.pinsHit(10);
  });

  $('*').click(function() {
    $('#score').text(bowling.calculateScore());
  });

  $('#score').text(bowling.calculateScore());

});
