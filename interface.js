$(document).ready(function() {
  var game = new Game();
  updateScore();

  $("#one-pin").click(function() {
    game.bowl(1)
    // frame.bowlOne(1);
    // frame.frameScore();
    // updateScore();
  });

  function updateScore() {
    $("#score").text(game.score);
  };
})
