$(document).ready(function() {
  game = new Game();

  $('#roll').on('click', function() {
    var rollScoreInput = document.getElementById('rollScore');
    var score = parseInt(rollScoreInput.value, 10);
    var roll = game.roll(score);

    //Insert into table
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
  });
});
