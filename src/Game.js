var Game = function() {
  this.currentRoll = 0;
  this.currentFrame = 1;
  this.allRolls = []
  this.allFrame = {}
};

Game.prototype.roll = function(pins) {
  this.allRolls[this.currentRoll++] = pins;
  this.addToFrame(pins);
};

Game.prototype.addToFrame = function(pins) {
  if (this.allFrame[this.currentFrame] === undefined) {
    this.allFrame[this.currentFrame] = [pins];
  } else if (this.allFrame[this.currentFrame].length === 1 && !this.isStrike(this.currentFrame)) {
    this.allFrame[this.currentFrame].push(pins);
  } else {
    this.allFrame[this.currentFrame += 1] = [pins];
  };
};

Game.prototype.currentFrameScore = function(frame) {
  if (this.allFrame[frame] === undefined) {
    return 0
  } else {
    return this.allFrame[frame].reduce(function(a, b) {
      return (a + b)
    });
  };
};

Game.prototype.isSpare = function(frame) {
  return this.currentFrameScore(frame) === 10 && this.allFrame[frame].length === 2;
};

Game.prototype.isStrike = function(frame) {
  return this.currentFrameScore(frame) === 10;
};
