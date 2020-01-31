$(document).ready(function() {
  var bowling = new Bowling();

  $('#current-frame-tab').text('Current frame is: ' + bowling.currentFrame());
  $('#current-roll-tab').text('Current roll is: ');

  $('#total-score').text(bowling.totalScore);

  $('#roll').on('click', function() {
    bowling.roll();
    bowling.updateScoreFirst();
    $('#current-roll-score').text(bowling.currentFrameRollOne());
    $('#total-score').text(bowling.totalScore);
  })
})
