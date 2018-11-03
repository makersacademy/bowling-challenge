$(document).ready(function() {

  var bowlingScorer = new BowlingScorer();
  $("#score").text(bowlingScorer.returnScore());
  $("#add_score_0").click(function() {
    bowlingScorer.bowl(0);
    $("#score").text(bowlingScorer.returnScore());
  });
});
