var Game = function() {
  this.currentRoll = 0;
  this.currentFrame = 1;
  this.allRolls = []
  this.allFrame = {}
};

Game.prototype.roll = function(pins) {
  if ((this.currentFrameScore() + pins) > 10) {
    alert('Not Possible')
  } else {
    this.allRolls[this.currentRoll++] = pins;
    this.calcFrame();
    this.addToFrame(pins);
  };
};

Game.prototype.calcFrame = function() {
  this.currentFrame = (Math.ceil(this.currentRoll / 2));
}

Game.prototype.addToFrame = function(pins) {
  if (this.allFrame[this.currentFrame] === undefined) {
    this.allFrame[this.currentFrame] = [pins];
  } else {
    this.allFrame[this.currentFrame].push(pins);
  };
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

Game.prototype.isStrike = function () {

};
