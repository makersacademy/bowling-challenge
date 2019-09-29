bowling = new Bowling();
const ENTER_KEY_CODE = 13;

$(document).ready(function() {
  constructTable();
  updateGame();

  $(document).bind('keypress', function(event) {
    if(event.keyCode === ENTER_KEY_CODE){
      $('#submit').trigger('click');
    }
  });
  
  $("#submit").click(function() {
    var pinsHit = parseInt($('input#pins-hit').val());

    try {
      bowling.validateInput(pinsHit);
    } catch(error) {
      alert(error);
      $('input#pins-hit').val('');
      return;
    }

    updateTable(pinsHit);

    $('input#pins-hit').val('');
    bowling.bowl(pinsHit);
    updateGame();
  })

  function updateTable(pinsHit) {
    $(`#frame-${bowling.frame}-roll-${bowling.roll}`).text(pinsHit);
    
    // Record strike/spare for normal frame
    if (bowling.isStrike(pinsHit)) {
      $(`#note-${bowling.frame}-strike`).text("Strike");
    }
    if (bowling.isSpare(pinsHit)) {
      $(`#note-${bowling.frame}-spare`).text("Spare");
    }
    
    // record strike/spare for final frame
    if (bowling.frame === 10 && bowling.isStrike(pinsHit)) {
      $('#bonus-1').text("Bonus")
      $('#bonus-2').text("Bonus")
    }
    if (bowling.isFinalFrameSecondStrike(pinsHit)) {
      $(`#note-${bowling.frame}-2`).text("Strike");
    }
    if (bowling.frame === 10 && bowling.isSpare(pinsHit)) {
      $('#bonus-2').text("Bonus")
      $(`#note-${bowling.frame}-2`).text("Spare");
    }
  }

  function updateGame() {
    displayScore();
    updateStatus();
  };

  function displayScore() {
    var displayScore;
    if (bowling.isGameOver) {
      if (bowling.totalScore === 300) {
        displayScore = 'Perfect game! Final score: ' + bowling.totalScore;
      } else {
      displayScore = 'Game over! Final score: ' + bowling.totalScore;
      }
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

function constructTable() {
  var tableData = '';
  for (i = 1; i <= 9; i++) {
    tableData += '<tr>'
                + `<td rowspan='2'>${i}</td>`
                + '<td>1</td>'
                + `<td id=frame-${i}-roll-1></td>`
                + `<td id=note-${i}-strike></td>`
                + '</tr>'
                + '<tr>'
                + '<td>2</td>'
                + `<td id=frame-${i}-roll-2></td>`
                + `<td id=note-${i}-spare></td>`
                + '</tr>'
  }
  $('#constructTable').html(tableData);
}