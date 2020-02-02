$(document).ready(function() {
  var bowling = new Bowling();

  $('#current-frame-tab').text('Current frame is: ' + bowling.currentFrame());
  $('#current-roll-tab').text('Current roll is: ');

  $('#total-score').text(bowling.totalScore);

  $('#roll').on('click', function() {
    bowling.roll();
    bowling.updateScoreFirst();
    $('.frame-' + bowling.currentFrame()).find('#current-roll-score1').text(bowling.currentFrameRollOne());
    $('#total-score').text(bowling.totalScore);
  })
})
