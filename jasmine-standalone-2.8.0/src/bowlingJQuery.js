$(document).ready(function() {

  var game = new Game();
  var audio = $("#strikesound")[0];

  function updateGame() {
    $('#current_score').text(game.displayScore())
    $('#current_frame').text("Frame: " + game.frameNumber);
  };

  updateGame();

  $("#submit_score").click(function() {
    var rollScore = parseInt(document.getElementById("score").value);
    audioPlayer(rollScore)
    game.bowl(rollScore)
    updateGame();
  });

  function audioPlayer(rollScore) {
    if (game.currentFrame.scoreIsImpossible(rollScore)) {
      $("#womp")[0].play();
    } else if (rollScore == 10) {
      $("#strikesound")[0].play();
    } else if (rollScore == 0) {
      $("#gutterball")[0].play();
    }
  }

});