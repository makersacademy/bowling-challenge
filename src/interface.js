$(document).ready(function() {
  var game = new BowlingGame();

  updateFrame();
  updateScore();

  // $("#first-roll").submit(function(event) {
  //   event.preventDefault();
  //   var score = $("#first-score").val();
  //   game.firstRoll(score)
  // });

  $("#next-round").click(function() {
    game.nextRound();
    updateFrame();
  });

  function updateFrame()  {
    $('#frame').html(game._frameNumber);
  };
  function updateScore() {
    $("#score").html(game._totalScore);
  }
});
