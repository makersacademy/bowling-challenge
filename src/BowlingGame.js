var BowlingGame = function() {

  this.newGame = {1: [null,null], 
                  2: [null,null],
                  3: [null,null],
                  4: [null,null],
                  5: [null,null],
                  6: [null,null],
                  7: [null,null],
                  8: [null,null], 
                  9: [null,null],
                  10: [null,null,null]};

    this.scoreGrid = {1: null, 
                      2: null,
                      3: null,
                      4: null,
                      5: null,
                      6: null,
                      7: null,
                      8: null, 
                      9: null,
                      10: null};

  this.score = 0;

};

BowlingGame.prototype.currentScore = function() {
  newGame = this.newGame;
  scoreGrid = this.scoreGrid;
  for (i = 1; i <= 9; i ++) {
    nextFrame = i + 1;
    nextNextFrame = i + 2;
    if ((game.newGame[i][0] + game.newGame[i][1]) !== 10 && game.newGame[i][0] !== 10 && game.newGame[i][1] != null ) {
      this.scoreGrid[i] = game.newGame[i][0] + game.newGame[i][1];
    };
    if ((game.newGame[i][0] + game.newGame[i][1]) === 10 && game.newGame[nextFrame][0] != null && game.newGame[i][0] !== 10) {
      this.scoreGrid[i] = game.newGame[i][0] + game.newGame[i][1] + game.newGame[nextFrame][0];
    };
    if (game.newGame[i][0] === 10 && game.newGame[nextFrame][0] !== 10 && game.newGame[nextFrame][0] != null && game.newGame[nextFrame][1] != null) {
      this.scoreGrid[i] = game.newGame[i][0] + game.newGame[nextFrame][0] + game.newGame[nextFrame][1];
    };
    if (game.newGame[i][0] === 10 && game.newGame[nextFrame][0] === 10 && game.newGame[nextNextFrame][0] !== 10 && game.newGame[nextNextFrame][0] != null) {
      this.scoreGrid[i] = game.newGame[i][0] + game.newGame[nextFrame][0] + game.newGame[nextNextFrame][0];
    }
    if (game.newGame[i][0] === 10 && game.newGame[nextFrame][0] === 10 && game.newGame[nextNextFrame][0] === 10) {
      this.scoreGrid[i] = game.newGame[i][0] + game.newGame[nextFrame][0] + game.newGame[nextNextFrame][0];
    }
  };

  this.score = 0;
  for (i = 1; i < 11; i ++) {
    this.score += this.scoreGrid[i];
  };
  return this.score;
};

BowlingGame.prototype.isSpare = function(i, a, b) {

};
