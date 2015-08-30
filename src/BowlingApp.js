$(document).ready(function() {
  var scorecard = new ScoreCard();

  $("button").click(function(event) {
    var score = scorecard.scoreForRoll($(this).data("pins"));
    var frame = scorecard.frame;
    $("td[id='" + frame + "']").append('<td>' + score +'</td>');
    hideButtons(scorecard.pinsLeft(score));

    if (score === "X") {
      $("#totals").append('<td id="strike"></td>');
      scorecard.nextFrame();
      $("button").show();
    }

    if (score !== "X") {
      $("#total").text(scorecard.grandTotal());
    }

    if (scorecard.roll === 2 && score !== "X") {
      $("#totals").append('<td>' + scorecard.scoreForFrame(frame) + '</td>');

    if (scorecard.scoreForFrame(frame) === 10 && score !== "X") {
      $("td[id='" + frame + "'] td:last").text("/");
    }

      if (frame > 1 && scorecard.isPreviousFrameSpare()) {
        scorecard.bonusForSpare();
      }

      if (frame > 1 && scorecard.isPreviousFrameStrike()) {
        scorecard.bonusForStrike();
        console.log(scorecard.scores);
        $("#totals td:last").prev("td[id=strike]").text(scorecard.scoreForFrame(frame - 1));
        $("#total").text(scorecard.grandTotal());
      }
      scorecard.nextFrame();
      $("button").show();
    }

    scorecard.nextRoll();
  })

  function hideButtons(n) {
    for (var i = n + 1; i < 11; i++) {
      $("button[data-pins='" + i + "']").hide();
    }
  }

});