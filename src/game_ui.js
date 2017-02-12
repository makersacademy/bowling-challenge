var GameUI = {
  displayNext: function() {
    if(game.isComplete()) {
      this.displayScore();
    } else {
      this.displayGrid();
    }
  },

  displayScore: function() {
    let gameOverHTML = "<h1>Game Over</h1>";
    gameOverHTML += "<h2>You scored: " + game.currentScore + "</h2>";
    this.populateIdWithHTML("welcome", gameOverHTML);
  },

  displayGrid: function() {

  },

  scoreHandler: function(id) {
    var value = document.getElementById(id);
    button.onclick = function() {
      game.bowl(value);
    }
  }
};
