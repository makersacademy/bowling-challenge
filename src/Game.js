function Game() {
  this.currentGame = null;
  this.currentStage = 1;
  this.scores =  {
  1: {
    "try1": null,
    "try2": null,
    "score": null
    },
  2: {
    "try1": null,
    "try2": null,
    "score": null
    },
  3: {
    "try1": null,
    "try2": null,
    "score": null
    },
  4: {
    "try1": null,
    "try2": null,
    "score": null
    },
  5: {
    "try1": null,
    "try2": null,
    "score": null
    },
  6: {
    "try1": null,
    "try2": null,
    "score": null
    },
  7: {
    "try1": null,
    "try2": null,
    "score": null
    },
  8: {
    "try1": null,
    "try2": null,
    "score": null
    },
  9: {
    "try1": null,
    "try2": null,
    "score": null
    },
  "10": {
    "try1": null,
    "try2": null,
    "score": null
    }
  }
};

Game.prototype

Game.prototype.newGame = function() {
  localStorage.setItem('Scores', JSON.stringify(this.scores));
};

Game.prototype.getCurrentGame = function() {
  this.currentGame = JSON.parse(localStorage.getItem('Scores'));
}

Game.prototype.updateCurrentGame = function() {
  localStorage.setItem('Scores', JSON.stringify(this.currentGame));
}

Game.prototype.setScore = function(val1,val2){
  this.currentGame[this.currentStage].try1 = val1;
  this.currentGame[this.currentStage].try2 = val2;
  this.currentGame[this.currentStage].score = val1 + val2;
  this.currentStage += 1;
  this.updateCurrentGame();
  this.getCurrentGame();
}

var game = new Game;

game.newGame();
game.getCurrentGame();
game.setScore(1,2)
