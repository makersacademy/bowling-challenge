$(document).ready(function() {
  var game = new Game();
  updateScore();

  $("#one-pin").click(function() {
    game.bowl(1)
    updateScore();
  });

  $("#two-pins").click(function() {
    game.bowl(2)
    updateScore();
  });

  $("#three-pins").click(function() {
    game.bowl(3)
    updateScore();
  });

  $("#four-pins").click(function() {
    game.bowl(4)
    updateScore();
  });

  $("#five-pins").click(function() {
    game.bowl(5)
    updateScore();
  });

  $("#six-pins").click(function() {
    game.bowl(6)
    updateScore();
  });

  $("#seven-pins").click(function() {
    game.bowl(7)
    updateScore();
  });

  $("#eight-pins").click(function() {
    game.bowl(8)
    updateScore();
  });

  $("#nine-pins").click(function() {
    game.bowl(9)
    updateScore();
  });

  $("#ten-pins").click(function() {
    game.bowl(10)
    updateScore();
  });

  $("#reset-game").click(function() {
    game = new Game();
    updateScore();
  });

  function updateScore() {
    $("#score").text(game.score());
    console.log(game)
  };
})
