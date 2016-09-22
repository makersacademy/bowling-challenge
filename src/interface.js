$(document).ready(function(){
  var bowling = new Bowling();

  updateScores();

  $("#bowl").click(function() {
    bowling.bowl();
    updateScores();
  });

  $("#new_game").click(function() {
    bowling.newGame();
    updateScores();
  });

  function updateScores() {
    $('#total_score').text(bowling._totalScore);
    $('#roll_1_score').text(bowling._rollScore1);
    $('#roll_2_score').text(bowling._rollScore2);
  }
});
