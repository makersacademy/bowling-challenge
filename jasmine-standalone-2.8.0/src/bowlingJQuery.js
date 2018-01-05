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
    audioPlayer(rollScore);
    game.bowl(rollScore);
    updateGame();
    if (game.gameIsOver()) { setTimeout(function() {completedGameAudio()}, 3000) }
  });

  function audioPlayer(rollScore) {
    if (game.currentFrame.scoreIsImpossible(rollScore) || game.gameIsOver()) {
      $("#womp")[0].play();
    } else if (rollScore == 10) {
      $("#strike_sound")[0].play();
    } else if (rollScore == 0) {
      $("#gutterball")[0].play();
    }
  }

  function completedGameAudio() {
    if (game.score === 0) {
        $("#iqzero")[0].play();
      } else if (game.score === 300) {
        $("#holy_cow")[0].play();
      } else {
        $("#game_over")[0].play();
      }
  }
});
