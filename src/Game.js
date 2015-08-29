var Game = function() {
  this.currentRoll = 0;
  this.currentFrame = 1;
  this.allRolls = []
  this.allFrame = {}
  this.totalScore = 0
};

Game.prototype.roll = function(pins) {
    this.allRolls[this.currentRoll++] = pins;
    this.addToFrame(pins);
};

Game.prototype.addToFrame = function(pins) {
  if this.allFrame[this.currentFrame] === undefined 
  this.allFrame[this.currentFrame] = [pins]
};

Game.prototype.currentFrameScore = function() {
  if (this.allFrame[this.currentFrame] === undefined) {
    return 0
  } else {
    return this.allFrame[this.currentFrame].reduce(function(a, b) {
      return (a + b)
    });
  };
};

Game.prototype.isSpare = function() {
  return this.currentFrameScore() === 10 && this.allFrame[this.currentFrame].length === 2;
};

Game.prototype.isStrike = function() {
  return this.currentFrameScore() === 10;
};

Game.prototype.scoreWithBonus = function() {
  this.basicScore();
  this.strikeBonus();
};

Game.prototype.strikeBonus = function() {
  for (var i = 0; i < this.allFrame.length; i++) {
    if (this.allFrame[i] === 10) {
      return this.totalScore + this.allRolls[i + 1] + this.allRolls[i + 2];
    };
  };
};

Game.prototype.basicScore = function() {
  return this.totalScore + this.allRolls.reduce(function(a, b) {
    return (a + b);
  });
};
