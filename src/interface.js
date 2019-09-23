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

function constructTable() {
  var tableData = '';
  var finalRow = '';
  for (i = 1; i <= 10; i++) {
    tableData += '<tr>'
                + '<td>' + i + '</td>'
                + '<td>' + 1 + '</td>'
                + `<td id=frame-${i}-roll-1>` + '</td>'
                + `<td id=note-${i}-strike>` + '</td>'
                + '</tr>'
                + '<tr>'
                + '<td>' + i + '</td>'
                + '<td>' + 2 + '</td>'
                + `<td id=frame-${i}-roll-2>` + '</td>'
                + `<td id=note-${i}-spare>` + '</td>'
                + '</tr>'
    finalRow = '<tr>'
                + '<td>' + 10 + '</td>'
                + '<td>' + 3 + '</td>'
                + `<td id=frame-10-roll-3>` + '</td>'
                + '<td></td>'
                + '</tr>'
  }
  $('#constructTable').html(tableData + finalRow);
}