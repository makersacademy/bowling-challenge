$(document).ready(function() {

var scorecard = new ScoreCard();
  $("#reload").click(function() {
    $("#game_over").hide();
    location.reload();
  });

  $("button").click(function(event) {
    if (scorecard.frame >= 11) {
      gameOver();
    }
    $(scorecard.scoreBowl($(this).prop('value')));
    console.log($(this).prop('value'));
    var frame = scorecard.frame;
    var score = scorecard.frameScore(frame);
    console.log(score);
    $("td#" + frame).append(score);
  });
  // $("button").click(function() {
  //   if (scorecard.frame >= 11) {
  //     gameOver();
  //   }
  //   // var bowl =
  //   var score = $(this.data);
  //   console.log(score);
  //   var frame = scorecard.frame;
  //   $("td#"+frame).replaceWith("td "+score);
  // });

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
