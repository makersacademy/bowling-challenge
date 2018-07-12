$(document).ready(function() {
  var game = new Bowling();

  var updateTable = function(score) {
    var current_frame = document.getElementById('current_frame');
    var current_roll = document.getElementById('current_roll');
    var pinsStanding = document.getElementById('pins_standing');
    var table = document.getElementById('bowling_table');
    var rollRow = table.insertRow(-1);
    var frameColumn = rollRow.insertCell(0);
    var rollColumn = rollRow.insertCell(1);
    var pinsKnockedColumn = rollRow.insertCell(2);
    var totalScoreColumn = rollRow.insertCell(3);

    frameColumn.innerHTML = `${game.current_frame}`;
    rollColumn.innerHTML = `${game.current_roll}`;
    pinsKnockedColumn.innerHTML = `${score}`;

    game.knock_pins(score)

    current_frame.innerHTML = `${game.current_frame}`;
    current_roll.innerHTML = `${game.current_roll}`;
    pinsStanding.innerHTML = `${game.pins}`;

    var totalScore = (game.score_card.concat.apply([], game.score_card)).reduce((a, b) => a + b, 0);
    totalScoreColumn.innerHTML = `${totalScore}`;
  };

  var updateScoreSelector = function(score) {
    scoreSelect.options.length = 0;
    var rollLimit = document.getElementById('pins_standing').innerHTML
    for (let i = 0; i <= rollLimit; i++) {
      var option = document.createElement('option');
      option.text = `${i}`;
      option.value = `${i}`;
      scoreSelect.add(option, scoreSelect[i]);
    };
  };

  $('#roll').on('click', function() {
    var scoreSelect = document.getElementById('scoreSelect');
    var score = parseInt(scoreSelect.value, 10);
    updateTable(score);
    updateScoreSelector(score);
  });
});
