function Game() {
  this.gameArray = [];
  this.frameScore = [];
  this.totalScore = 0;
};

Game.prototype.scoreCalculator = function() {
  this.totalScore = 0;
  for (var x = 0, y = this.gameArray.length; x < y; x++) {
    for (var i = 0, n = this.gameArray[x].length; i < n; i++)
    {
      this.totalScore += this.gameArray[x][i];
    }
  }
};

Game.prototype.isStrike = function() {
  if (this.previousFrame()[0] === 10) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.isSpare = function() {
  if (this.previousFrame()[0] + this.previousFrame()[1] === 10) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.previousFrame = function() {
  return this.gameArray[this.gameArray.length - 1];
};

Game.prototype.twoFramesAgo = function() {
  return this.gameArray[this.gameArray.length - 2];
};
