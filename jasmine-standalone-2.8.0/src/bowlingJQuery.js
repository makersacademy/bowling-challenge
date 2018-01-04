$(document).ready(function() {

  var game = new Game();

  function updateGame() {
    $('#current_score').text(game.displayScore())
    $('#current_frame').text("Frame: " + game.frameNumber);
  };

  updateGame();

  $("#submit_score").click(function() {
    var rollScore = parseInt(document.getElementById("score").value);
    game.bowl(rollScore)
    updateGame();
  });
});