bowling = new Bowling();

$(document).ready(function() {
  constructTable();
  updateGame();

  $(document).bind('keypress', function(event) {
    if(event.keyCode==13){
      $('#submit').trigger('click');
    }
  });
  
  $("#submit").click(function() {
    var pinsHit = parseInt($('input#pins-hit').val());

    if (bowling._gameOver) {
      alert('Game over!');
    }
    if (pinsHit > bowling.pinsInLane) {
      alert('Invalid input. Number greater than pins in lane.');
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
    if (bowling.frame ===10 && bowling.isStrike(pinsHit)) {
      $('#bonus-1').text("Bonus")
      $('#bonus-2').text("Bonus")
      $(`#note-${bowling.frame}-strike`).text("Strike");
    }
    if (bowling.frame === 10 && bowling.isSpare(pinsHit)) {
      $('#bonus-2').text("Bonus")
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

function constructTable() {
  var tableData = '';
  var finalRow = '';
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