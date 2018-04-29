$(document).ready(function() {
  game = new Game();

  var clearScoreSelectDropdown = function() {
    document.getElementById('scoreSelect').options.length = 0;
  };

  var insertRollIntoTable = function(roll) {
    var table = document.getElementById('scoreTable');
    var rollRow = table.insertRow(-1);
    var frameNumberColumn = rollRow.insertCell(0);
    var rollNumberColumn = rollRow.insertCell(1);
    var scoreColumn = rollRow.insertCell(2);
    var totalScoreColumn = rollRow.insertCell(3);
    var notesColumn = rollRow.insertCell(4);
    frameNumberColumn.innerHTML = `${roll.frameNumber}`;
    rollNumberColumn.innerHTML = `${roll.rollNumber}`;
    scoreColumn.innerHTML = `${roll.score}`;
    totalScoreColumn.innerHTML = `${game.totalScore()}`;
    notesColumn.innerHTML = "";
  };

  var updateScoreSelectDropdown = function() {
    var selectDropdown = document.getElementById('scoreSelect');
    var rollLimit = game.nextRollScoreLimit();
    for (var i = 0; i <= rollLimit; i++) {
      var option = document.createElement('option');
      option.text = `${i}`;
      option.value = `${i}`;
      selectDropdown.add(option, selectDropdown[i]);
    }
  };

  $('#roll').on('click', function() {
    var rollScoreInput = document.getElementById('scoreSelect');
    var score = parseInt(rollScoreInput.value, 10);
    var roll = game.roll(score);

    insertRollIntoTable(roll);
    clearScoreSelectDropdown();
    updateScoreSelectDropdown();

    if (game.isGameOver()) {
      alert(`Game is over. Final score is ${game.totalScore()}`);
    }
  });
});
