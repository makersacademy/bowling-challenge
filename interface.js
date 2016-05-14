$(document).ready(function() {
  var bowling = new Bowling();
  $('#current-turn').text(bowling.currentTurn());
  $('#current-ball').text(bowling.currentBall()+1);
  $('#score').text(bowling.score());

});
