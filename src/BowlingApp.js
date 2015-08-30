$(document).ready(function() {
  var scorecard = new ScoreCard();

  $("button").click(function(event) {
    var score = scorecard.scoreForRoll($(this).data("pins"));
    var frame = scorecard.frame;
    $("td[id='" + frame + "']").append('<td>' + score +'</td>');
    if (scorecard.roll === 2) {
      $("#totals").append('<td>' + scorecard.scoreForFrame(frame) + '</td>');
      scorecard.nextFrame();
    }
    scorecard.nextRoll();
  })
});