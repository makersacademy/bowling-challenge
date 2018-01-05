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
    if (rollScore == 10) { audio.play() }
    game.bowl(rollScore)
    updateGame();
  });

  // function audioPlayer() {
  //   if (rollscore == 10) {
  //     audio =
  //   }
  // }

});
