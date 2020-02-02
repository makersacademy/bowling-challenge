$(document).ready(function() {
  var bowling = new Bowling();

  $('#current-frame-tab').text('Current frame is: ' + bowling.currentFrame());
  $('#current-roll-tab').text('Roll to be played: ' + bowling.rollNum);

  $('#roll1').on('click', function() {
    bowling.roll1();
    $('.frame-' + bowling.currentFrame()).find('#current-roll-score1').text(bowling._currentRoll);
    bowling.updateScoreFirst();
    if(bowling._currentRoll === 10) {
      $('.frame-' + bowling.currentFrame()).find('#notes1').text("Strike");
    }
    $('#current-roll-tab').text('Roll to be played: ' + bowling.rollNum);
  })

  $('#roll2').on('click', function() {
    bowling.roll2();
    $('.frame-' + bowling.currentFrame()).find('#current-roll-score2').text(bowling._currentRoll);
    bowling.updateScoreSecond();
    $('.frame-' + bowling.currentFrame()).find('#total-score' + bowling.currentFrame()).text(bowling.totalScore);
    if(bowling.frames[(bowling.currentFrame()-1)].score === 10 && bowling.frames[(bowling.currentFrame()-1)].rollOne !== 10) {
      $('.frame-' + bowling.currentFrame()).find('#notes2').text("Spare");
    }
    bowling.updateGame();
    $('#current-frame-tab').text('Current frame is: ' + bowling.currentFrame());
    $('#current-roll-tab').text('Roll to be played: ' + bowling.rollNum);
  })
})
