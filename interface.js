$(document).ready(function() {
  var bowling = new Bowling();

  $('#current-frame-tab').text('Current frame is: ' + bowling.currentFrame());
  $('#current-roll-tab').text('Current roll is: ' + bowling.rollNum);

  $('#total-score').text(bowling.totalScore);

  $('#roll1').on('click', function() {
    bowling.roll();
    bowling.updateScoreFirst();
    $('.frame-' + bowling.currentFrame(bowling.frameCounter)).find('#current-roll-score1').text(bowling.frameRollOne(bowling.frameCounter));
    // $('#total-score').text(bowling.totalScore);
  })

  $('#roll2').on('click', function() {
    bowling.roll();
    bowling.updateScoreSecond();
    $('.frame-' + bowling.currentFrame(bowling.frameCounter)).find('#current-roll-score2').text(bowling.currentFrameRollTwo(bowling.frameCounter));
    $('.frame-' + bowling.currentFrame(bowling.frameCounter)).find('#total-score' + bowling.currentFrame(bowling.frameCounter)).text(bowling.totalScore);
    bowling.updateGame();
  })
})
