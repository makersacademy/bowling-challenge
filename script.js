$(document).ready(function() {
  var bowlingGame = new BowlingGame();

  $(".totalScore").text("Total score: " + bowlingGame.runningTotal);

  $("button").click(function() {
    var input = $(this).val();
    bowlingGame.roll(parseInt(input));
    $(".totalScore").text("Total score: " + bowlingGame.runningTotal);
    // $(".item1").text(
    //   "roll 1: " +
    //     bowlingGame.scoreCard[0].pinsKnocked +
    //     " " +
    //     bowlingGame.scoreCard[1].pinsKnocked
    // );
  });
});
