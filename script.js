$(document).ready(function() {
  var bowlingGame = new BowlingGame();
  var scoreCard;

  update();

  $(".button").click(function() {
    var input = $(this).val();
    bowlingGame.roll(parseInt(input));
    update();
  });

  function update() {
    updateTotalScore();
    updateScoreCard();
  }

  function updateTotalScore() {
    $(".totalScore").text("Total score: " + bowlingGame.runningTotal);
  }

  function updateScoreCard() {
    scoreCard = bowlingGame.scoreCard;
    jQuery.each(scoreCard, function(i, roll) {
      $("#" + String(i)).text(
        "Frame: " +
          roll.frame +
          "  Roll number: " +
          roll.rollNum +
          "  Knocked pins: " +
          roll.pinsKnocked +
          "  Score: " +
          roll.score
      );
    });
  }

  $("#reset").click(function(event) {
    bowlingGame = new BowlingGame();
    for (i = 0; i < 22; i++) {
      $("#" + String(i)).text("");
    }
    update();
  });
});
