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

Game.prototype.frameScore = function(frame) {
  if (this.allFrame[frame] === undefined) {
    return 0
  } else {
    return this.allFrame[frame].reduce(function(a, b) {
      return (a + b)
    });
  };
};

Game.prototype.isSpare = function(frame) {
  return this.frameScore(frame) === 10 && this.allFrame[frame].length === 2;
};

Game.prototype.isStrike = function(frame) {
  return this.frameScore(frame) === 10;
};

Game.prototype.spareBonus = function(frame) {
  return this.allFrame[frame + 1][0];
};

Game.prototype.strikeBonus = function(frame) {
  if (this.isStrike(frame + 1)) {
    if (this.isStrike(frame + 2)) {
      return this.frameScore(frame + 1) + this.frameScore(frame + 2);
    } else {
      return this.frameScore(frame + 1) + this.allFrame[frame + 2][0];
    };
  } else {
    return this.frameScore(frame + 1);
  };
};

Game.prototype.score = function() {
  var score = 0;
  for (var frame = 1; frame < 11; frame++) {
    if (this.isStrike(frame)) {
      score += 10 + this.strikeBonus(frame);
    } else if (this.isSpare(frame)) {
      score += 10 + this.spareBonus(frame);
    } else {
      score += this.frameScore(frame);
    };
  };
  return score;
};
