$(document).ready(function() {
  var scorecard = new ScoreCard();

  $("#play_again").click(function() {
    $("#game_over").hide();
    location.reload();
  });

  $("button").click(function(event) {
    if (scorecard.frame === 11) {
      gameOver();
    }

    var score = scorecard.scoreForRoll($(this).data("pins"));
    var frame = scorecard.frame;
    $("td[id='" + frame + "']").append('<td>' + score +'</td>');
    hideButtons(scorecard.pinsLeft(score));

    //check for spare on previous frame
    if (frame > 1 && scorecard.isPreviousFrameSpare()) {
      scorecard.bonusForSpare();
      $("#totals td:nth-child(" + (frame - 1) + ")").text(scorecard.scoreForFrame(frame - 1));
      $("#total").text(scorecard.grandTotal());
    }

    //deal with strike - not tenth frame
    if (score === "X" && frame !== 10) {
      $("#totals").append('<td id="strike"></td>');
      scorecard.nextFrame();
      $("button").show();
    }

    //deal with strike - tenth frame - allows extra roll
    if (score === "X" && frame === 10) {
      if (scorecard.roll === 1) {
        $("#totals").append('<td id="strike"></td>');
      }
      if (scorecard.roll === 3) {
        $("#totals td:last").text(scorecard.scoreForFrame(frame));
        $("#total").text(scorecard.grandTotal());
        scorecard.nextFrame();
      }
      $("button").show();
    }

    //deal with a normal score - add to total
    if (score !== "X") {
      $("#total").text(scorecard.grandTotal());
    }

    //second roll - not strike
    if (scorecard.roll === 2 && score !== "X") {

      //check if previous frame was a strike
      if (frame > 1 && scorecard.isPreviousFrameStrike()) {
        scorecard.bonusForStrike();
        $("#totals td:nth-child(" + (frame - 1) + ")").text(scorecard.scoreForFrame(frame - 1));
        $("#total").text(scorecard.grandTotal());
      }

      //check if frame is a spare
      if (scorecard.scoreForFrame(frame) === 10 && score !== "X") {
        $("td[id='" + frame + "'] td:last").text("/");
        $("#totals").append('<td></td>');
        if (frame === 10) {
          scorecard.nextRoll();
          }
        else {
          scorecard.nextFrame();
        }
        $("button").show();
      }

      //tenth frame
      if (frame === 10) {
        if (score === "X") {
          $("button").show();
        }
      }

      //a normal score and moving on
      if (scorecard.scoreForFrame(frame) !== 10 && scorecard.frame !== 10) {
        $("#totals").append('<td>' + scorecard.scoreForFrame(frame) + '</td>');
        scorecard.nextFrame();
        $("button").show();
      }
    }

    //third roll in tenth frame - end game after this
    if (frame === 10 && scorecard.scores[10].length === 3) {
        $("#totals td:last").text(scorecard.scoreForFrame(frame));
        $("#total").text(scorecard.grandTotal());
      scorecard.nextFrame();
    }

    //next roll
    scorecard.nextRoll();
  });

  function hideButtons(n) {
    for (var i = n + 1; i < 11; i++) {
      $("button[data-pins='" + i + "']").hide();
    }
  }

  function gameOver() {
    $("#game_over").show();
  }

});