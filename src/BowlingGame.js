var BowlingGame = function() {

  this.currentGame = {1: [null,null], 
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
  currentGame = this.currentGame;
  scoreGrid = this.scoreGrid;
  for (i = 1; i <= 9; i ++) {
    nextFrame = i + 1;
    nextNextFrame = i + 2;
    if (game.isNotSpareOrStrike(i) && game.currentGame[i][1] != null ) {
      this.scoreGrid[i] = game.currentGame[i][0] + game.currentGame[i][1];
    };
    if (game.isSpare(i) && game.currentGame[nextFrame][0] != null) {
      this.scoreGrid[i] = game.currentGame[i][0] + game.currentGame[i][1] + game.currentGame[nextFrame][0];
    };
    if (game.isSingleStrike(i) && game.currentGame[nextFrame][0] != null && game.currentGame[nextFrame][1] != null) {
      this.scoreGrid[i] = game.currentGame[i][0] + game.currentGame[nextFrame][0] + game.currentGame[nextFrame][1];
    };

    if (i === 9) {
        if (game.isDoubleStrike(i) && game.currentGame[nextFrame][1] != null) {
          this.scoreGrid[i] = game.currentGame[i][0] + game.currentGame[nextFrame][0] + game.currentGame[nextFrame][1];
        };
    } else {
        if (game.isDoubleStrike(i) && game.currentGame[nextNextFrame][0] != null) {
          this.scoreGrid[i] = game.currentGame[i][0] + game.currentGame[nextFrame][0] + game.currentGame[nextNextFrame][0];
        };
    };


    if (game.currentGame[10][0] != null && game.currentGame[10][1] != null && (game.currentGame[10][0] + game.currentGame[10][1]) < 10) {
      this.scoreGrid[10] = game.currentGame[10][0] + game.currentGame[10][1];
    };
    if (game.currentGame[10][0] != null && game.currentGame[10][1] != null && game.currentGame[10][2] != null ) {
      this.scoreGrid[10] = game.currentGame[10][0] + game.currentGame[10][1] + game.currentGame[10][2];
    };
  };

  this.score = 0;
  for (i = 1; i < 11; i ++) {
    this.score += this.scoreGrid[i];
  };
  return this.score;
};

BowlingGame.prototype.isNotSpareOrStrike = function(i) {
 if ((game.currentGame[i][0] + game.currentGame[i][1]) !== 10 && game.currentGame[i][0] !== 10) {
  return true;
 };
};

BowlingGame.prototype.isSpare = function(i) {
  if ((game.currentGame[i][0] + game.currentGame[i][1]) === 10 && game.currentGame[i][0] !== 10) {
    return true;
  };
};

BowlingGame.prototype.isSingleStrike = function(i) {
  if (game.currentGame[i][0] === 10 && game.currentGame[nextFrame][0] !== 10) {
    return true;
  };
};

BowlingGame.prototype.isDoubleStrike = function(i) {
  if (game.currentGame[i][0] === 10 && game.currentGame[nextFrame][0] === 10) {
    return true;
  };
};
