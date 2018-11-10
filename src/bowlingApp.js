$(document).ready(function() {

  var bowlingScorer = new BowlingScorer();

  $("#score").text(bowlingScorer.returnScore());
  $("#frame").text(bowlingScorer.returnFrame());
  // $("#frame_1_score").text(bowlingScorer.returnTotalScore());
  // $("#frame_2_score").text(bowlingScorer.returnFrameScore(2));
  // $("#frame_3_score").text(bowlingScorer.returnFrameScore(3));
  // $("#frame_4_score").text(bowlingScorer.returnFrameScore(4));
  // $("#frame_5_score").text(bowlingScorer.returnFrameScore(5));
  // $("#frame_6_score").text(bowlingScorer.returnFrameScore(6));
  // $("#frame_7_score").text(bowlingScorer.returnFrameScore(7));
  // $("#frame_8_score").text(bowlingScorer.returnFrameScore(8));
  // $("#frame_9_score").text(bowlingScorer.returnFrameScore(9));
  // $("#frame_10_score").text(bowlingScorer.returnFrameScore(10));
  // var scoreTable = getElementById("score_chart");
  // for(var x = 0; x < scoreTable.rows[2].length; x++) {
  //   scoreTable.rows[2].cells[x].innerHTML = scoreChart[x]
  // }

  $("#add_score_0").click(function() {
    bowlingScorer.bowl(0);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame").text(bowlingScorer.returnFrame());
  });

  $("#add_score_1").click(function() {
    bowlingScorer.bowl(1);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame").text(bowlingScorer.returnFrame());
  });

  $("#add_score_2").click(function() {
    bowlingScorer.bowl(2);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame").text(bowlingScorer.returnFrame());
  });

  $("#add_score_3").click(function() {
    bowlingScorer.bowl(3);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame").text(bowlingScorer.returnFrame());
  });

  $("#add_score_4").click(function() {
    bowlingScorer.bowl(4);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame").text(bowlingScorer.returnFrame());
  });

  $("#add_score_5").click(function() {
    bowlingScorer.bowl(5);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame").text(bowlingScorer.returnFrame());
  });

  $("#add_score_6").click(function() {
    bowlingScorer.bowl(6);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame").text(bowlingScorer.returnFrame());
  });

  $("#add_score_7").click(function() {
    bowlingScorer.bowl(7);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame").text(bowlingScorer.returnFrame());
  });

  $("#add_score_8").click(function() {
    bowlingScorer.bowl(8);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame").text(bowlingScorer.returnFrame());
  });

  $("#add_score_9").click(function() {
    bowlingScorer.bowl(9);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame").text(bowlingScorer.returnFrame());
  });

  $("#add_score_10").click(function() {
    bowlingScorer.bowl(10);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame").text(bowlingScorer.returnFrame());
  });


});
