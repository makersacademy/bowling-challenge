$(document).ready(function() {

  var bowlingScorer = new BowlingScorer();

  $("#score").text(bowlingScorer.returnScore());
  // $("#frame_" + )

  $("#add_score_0").click(function() {
    if(bowlingScorer.roll === 2) {
      $("#frame_" + (frame - 1) + "_score").text(bowlingScorer.totalScore)
    };
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(0);
    $("#frame").text(bowlingScorer.returnFrame());
    $("#frame_" + frame + "_bowl_" + bowl).text('-')
  });

  $("#add_score_1").click(function() {
    if(bowlingScorer.roll === 2) {
      $("#frame_" + (frame - 1) + "_score").text(bowlingScorer.totalScore)
    }
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(1);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(1)
  });

  $("#add_score_2").click(function() {
    if(bowlingScorer.roll === 2) {
      $("#frame_" + (frame - 1) + "_score").text(bowlingScorer.totalScore)
    }
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(2);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(2)
  });

  $("#add_score_3").click(function() {
    if(bowlingScorer.roll === 2) {
      $("#frame_" + (frame - 1) + "_score").text(bowlingScorer.totalScore)
    }
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(3);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(3)
  });

  $("#add_score_4").click(function() {
    if(bowlingScorer.roll === 2) {
      $("#frame_" + (frame - 1) + "_score").text(bowlingScorer.totalScore)
    }
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(4);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(4)
  });

  $("#add_score_5").click(function() {
    if(bowlingScorer.roll === 2) {
      $("#frame_" + (frame - 1) + "_score").text(bowlingScorer.totalScore)
    }
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(5);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(5)
  });

  $("#add_score_6").click(function() {
    if(bowlingScorer.roll === 2) {
      $("#frame_" + (frame - 1) + "_score").text(bowlingScorer.totalScore)
    }
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(6);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(6)
  });

  $("#add_score_7").click(function() {
    if(bowlingScorer.roll === 2) {
      $("#frame_" + (frame - 1) + "_score").text(bowlingScorer.totalScore)
    }
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(7);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(7)
  });

  $("#add_score_8").click(function() {
    if(bowlingScorer.roll === 2) {
      $("#frame_" + (frame - 1) + "_score").text(bowlingScorer.totalScore)
    }
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(8);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(8)
  });

  $("#add_score_9").click(function() {
    if(bowlingScorer.roll === 2) {
      $("#frame_" + (frame - 1) + "_score").text(bowlingScorer.totalScore)
    }
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(9);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text(9)
  });

  $("#add_score_10").click(function() {
    if(bowlingScorer.roll === 2) {
      $("#frame_" + (frame - 1) + "_score").text(bowlingScorer.totalScore)
    }
    frame = bowlingScorer.frame
    bowl = bowlingScorer.roll
    bowlingScorer.bowl(10);
    $("#score").text(bowlingScorer.returnScore());
    $("#frame_" + frame + "_bowl_" + bowl).text('X')
  });

  $("#frame_1_bowl_1").text(bowlingScorer.frameScore[0]);
  $("#frame_1_bowl_2").text(bowlingScorer.frameScore[1]);

});
