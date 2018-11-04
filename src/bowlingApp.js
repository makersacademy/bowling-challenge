$(document).ready(function() {

  var bowlingScorer = new BowlingScorer();

  $("#score").text(bowlingScorer.returnScore());
  $("#frame").text(bowlingScorer.returnFrame());
  $("#frame_1_score").text(bowlingScorer.returnFrameScore(1);


  $("#add_score_0").click(function() {
    bowlingScorer.bowl(0);
    $("#score").text(bowlingScorer.returnScore());
  });

  $("#add_score_1").click(function() {
    bowlingScorer.bowl(1);
    $("#score").text(bowlingScorer.returnScore());
  });

  $("#add_score_2").click(function() {
    bowlingScorer.bowl(2);
    $("#score").text(bowlingScorer.returnScore());
  });

  $("#add_score_3").click(function() {
    bowlingScorer.bowl(3);
    $("#score").text(bowlingScorer.returnScore());
  });

  $("#add_score_4").click(function() {
    bowlingScorer.bowl(4);
    $("#score").text(bowlingScorer.returnScore());
  });

  $("#add_score_5").click(function() {
    bowlingScorer.bowl(5);
    $("#score").text(bowlingScorer.returnScore());
  });

  $("#add_score_6").click(function() {
    bowlingScorer.bowl(6);
    $("#score").text(bowlingScorer.returnScore());
  });

  $("#add_score_7").click(function() {
    bowlingScorer.bowl(7);
    $("#score").text(bowlingScorer.returnScore());
  });

  $("#add_score_8").click(function() {
    bowlingScorer.bowl(8);
    $("#score").text(bowlingScorer.returnScore());
  });

  $("#add_score_9").click(function() {
    bowlingScorer.bowl(9);
    $("#score").text(bowlingScorer.returnScore());
  });

  $("#add_score_10").click(function() {
    bowlingScorer.bowl(10);
    $("#score").text(bowlingScorer.returnScore());
  });


  })
});
