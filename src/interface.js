bowling = new Bowling();

$(document).ready(function() {

  updateGame();
  
  $("#submit").click(function() {
    var pinsHit = parseInt($('input#pins-hit').val());

    if (pinsHit > bowling.pinsInLane) {
      alert('Invalid input. Number greater than pins in lane.');
    }
    if (bowling._gameOver) {
      alert('Game over!');
    }

    $('input#pins-hit').val('');
    bowling.bowl(pinsHit);
    updateGame();
  })

  function updateGame() {
    var displayScore;
    if (bowling._gameOver) {
      displayScore = 'Game over! Final score: ' + bowling.totalScore;
    } else {
      displayScore = 'Current score: ' + bowling.totalScore;
    }

    $('#display-score').text(displayScore);
    $('#frame').text(bowling.frame);
    $('#roll').text(bowling.roll);
  };
})