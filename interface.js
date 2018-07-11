$(document).ready(function() {
  var game = new Bowling();

  var updateTable = function(roll) {
    var current_frame = document.getElementById('current_frame');
    var current_roll = document.getElementById('current_roll');
    var pinsStanding = document.getElementById('pins_standing');
    var table = document.getElementById('bowling_table');
    var rollRow = table.insertRow(-1);
    var frameColumn = rollRow.insertCell(0);
    var rollColumn = rollRow.insertCell(1);
    var frameScoreColumn = rollRow.insertCell(2);
    var totalScoreColumn = rollRow.insertCell(3);

    current_frame.innerHTML = `${game.current_frame}`;
    current_roll.innerHTML = `${game.current_roll}`;
    pinsStanding.innerHTML = `${game.pins}`;

    frameColumn.innerHTML = `${game.current_frame}`;
    rollColumn.innerHTML = `${game.current_roll}`;

    var totalFrameScore = game.frame_score.reduce((a, b) => a + b, 0);
    frameScoreColumn.innerHTML = `${totalFrameScore}`;

    var totalScore = (game.score_card.concat.apply([], game.score_card)).reduce((a, b) => a + b, 0);
    totalScoreColumn.innerHTML = `${totalScore}`;
  };

  $('#roll').on('click', function() {
    var scoreSelect = document.getElementById('scoreSelect');
    var score = parseInt(scoreSelect.value, 10);
    roll = game.knock_pins(score)
    updateTable(roll);
  });
});
