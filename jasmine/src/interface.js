$(document).ready(function() {
  var score = new Score;
  var bowling = new Bowling(score);

  $('#0').click(function() {
    bowling.pinsHit(0);
    $('#score').text(bowling.calculateScore());
  });

  $('#1').click(function() {
    bowling.pinsHit(1);
    $('#score').text(bowling.calculateScore());
  });

  $('#2').click(function() {
    bowling.pinsHit(2);
    $('#score').text(bowling.calculateScore());
  });

  $('#3').click(function() {
    bowling.pinsHit(3);
    $('#score').text(bowling.calculateScore());
  });

  $('#4').click(function() {
    bowling.pinsHit(4);
    $('#score').text(bowling.calculateScore());
  });

  $('#5').click(function() {
    bowling.pinsHit(5);
    $('#score').text(bowling.calculateScore());
  });

  $('#6').click(function() {
    bowling.pinsHit(6);
    $('#score').text(bowling.calculateScore());
  });

  $('#7').click(function() {
    bowling.pinsHit(7);
    $('#score').text(bowling.calculateScore());
  });

  $('#8').click(function() {
    bowling.pinsHit(8);
    $('#score').text(bowling.calculateScore());
  });

  $('#9').click(function() {
    bowling.pinsHit(9);
    $('#score').text(bowling.calculateScore());
  });

  $('#10').click(function() {
    bowling.pinsHit(10);
    $('#score').text(bowling.calculateScore());
  });


  $('#score').text(bowling.calculateScore());

});
