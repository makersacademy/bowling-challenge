bowling = new Bowling();

$(document).ready(function() {

  updateGame();

  $(document).bind('keypress', function(event) {
    if(event.keyCode==13){
      $('#submit').trigger('click');
    }
  });
  
  $("#submit").click(function() {
    var pinsHit = parseInt($('input#pins-hit').val());

    if (pinsHit > bowling.pinsInLane) {
      alert('Invalid input. Number greater than pins in lane.');
    }
    if (bowling._gameOver) {
      alert('Game over!');
    }

    updateTable(pinsHit);

    $('input#pins-hit').val('');
    bowling.bowl(pinsHit);
    updateGame();
  })

  function updateTable(pinsHit) {
    $(`#frame-${bowling.frame}-roll-${bowling.roll}`).text(pinsHit);
    if (bowling.isStrike(pinsHit)) {
      $(`#note-${bowling.frame}-strike`).text("Strike");
    }
    if (bowling.isSpare(pinsHit)) {
      $(`#note-${bowling.frame}-spare`).text("Spare");
    }
  }

  function updateGame() {
    displayScore();
    updateStatus();
  };

  function displayScore() {
    var displayScore;
    if (bowling._gameOver) {
      displayScore = 'Game over! Final score: ' + bowling.totalScore;
    } else {
      displayScore = 'Current score: ' + bowling.totalScore;
    }
    $('#display-score').text(displayScore);
  }

  function updateStatus() {
    $('#frame').text(bowling.frame);
    $('#roll').text(bowling.roll);
  }
})