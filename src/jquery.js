$(document).ready(function() {
  var game = new Game();

  function updateRound() {
    $("#round").text("Round: " + game.round)
  }

  function updateRound() {
    $("#score").text("Score: " + game.score)
  }

  function updateGame() {
    updateRound()
    updateScore()
    isGameOver()
  }

  function isGameOver() {
    if(game.gameOver == 1) {
      $("#game-over").text("Game Over! You Scored " + this.score + " !")
    }
  }

  $("#user-input").click(function() {
    game.knockDown($("#pins").val())
    //$("#pins").empty()
    updateGame()
  })
})
