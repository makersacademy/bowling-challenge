$(document).ready(function() {

  var bowlingScorer = new BowlingScorer();

  $("#score").text(bowlingScorer.returnScore());
  // $("#frame_" + )

  $("#add_score_0").click(function() {
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(0);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(0)
    if(bowl === 2) {
      $("#frame_" + (frame) + "_score").text(bowlingScorer.totalScore)
    }
  });

  $("#add_score_1").click(function() {
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(1);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(1)
    if(bowl === 2) {
      $("#frame_" + (frame) + "_score").text(bowlingScorer.totalScore)
    }
  });

  $("#add_score_2").click(function() {
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(2);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(2)
    if(bowl === 2) {
      $("#frame_" + (frame) + "_score").text(bowlingScorer.totalScore)
    }
  });

  $("#add_score_3").click(function() {
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(3);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(3)
    if(bowl === 2) {
      $("#frame_" + (frame) + "_score").text(bowlingScorer.totalScore)
    }
  });

  $("#add_score_4").click(function() {
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(4);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(4)
    if(bowl === 2) {
      $("#frame_" + (frame) + "_score").text(bowlingScorer.totalScore)
    }
  });

  $("#add_score_5").click(function() {
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(5);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(5)
    if(bowl === 2) {
      $("#frame_" + (frame) + "_score").text(bowlingScorer.totalScore)
    }
  });

  $("#add_score_6").click(function() {
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(6);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(6)
    if(bowl === 2) {
      $("#frame_" + (frame) + "_score").text(bowlingScorer.totalScore)
    }
  });

  $("#add_score_7").click(function() {
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(7);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(7)
    if(bowl === 2) {
      $("#frame_" + (frame) + "_score").text(bowlingScorer.totalScore)
    }
  });

  $("#add_score_8").click(function() {
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(8);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(8)
    if(bowl === 2) {
      $("#frame_" + (frame) + "_score").text(bowlingScorer.totalScore)
    }
  });

  $("#add_score_9").click(function() {
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(9);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(9)
    if(bowl === 2) {
      $("#frame_" + (frame) + "_score").text(bowlingScorer.totalScore)
    }
  });

  $("#add_score_10").click(function() {
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(10);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(10)
    if(bowl === 2) {
      $("#frame_" + (frame) + "_score").text(bowlingScorer.totalScore)
    }
  });

  $("#frame_1_bowl_1").text(bowlingScorer.frameScore[0]);
  $("#frame_1_bowl_2").text(bowlingScorer.frameScore[1]);

});
