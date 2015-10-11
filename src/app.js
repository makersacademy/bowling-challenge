var scorecard = new ScoreCard();

$(document).ready(function() {

  $("#reload").click(function() {
    $("#game_over").hide();
    location.reload();
  });

  $("pins").click(function(event) {
    if (scorecard.frame >= 11) {
      gameOver();
    }
    var score = scorecard.scoreBowl($(this).pin.data("pin"));
    var frame = scorecard.frame;
    $("td#" + frame + 0).append("td#" + frame + " " + score);
  });

  function gameOver() {
    $("#game_over").show();
  }

});
//Sum Total
// var sum = 0;
// for (var i = 1; i <= this.frame; i++) {
//   sum += this.frameScore(i);
// }
// return sum;
