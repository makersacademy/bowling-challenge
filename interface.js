$(document).ready(function() {
  var scoreboard = new Scoreboard();
  var score = scoreboard.rollScore();

  $('#roll').click(function() {
    scoreboard.firstRoll(document.getElementById('first').value);
    scoreboard.secondRoll(document.getElementById('second').value);
    $('#first-frame').text(score);
  });

});
