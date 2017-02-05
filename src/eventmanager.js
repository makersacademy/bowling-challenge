$(document).ready(function() {

})

$('#submitname').on("click", function() {
  ('#name').text(scorecard.name());
});

$('#submitscore').on("click", function() {
  scorecard.addscore("#score1, #score2");
  $('#totalScore').text(scorecard.totalScore());
  var score1 = $("#score1").val();
  var score2 = $("#score2").val();
  $("table tbody").append(frameScore);
});

function updateScore() {
  $('#score1').text(scorecard.addScore(score1));
  $('#score2').text(scorecard.addScore(score2));
  $('#submitscore').on('click', scorecard.addScore(score1, score2));
}

function result() {
  if (scorecard.frame === 10) {
    $('#result').text(scorecard.result());
  }
}
