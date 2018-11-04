function BowlingGame() {
  this.frameRolls = [];
  this.totalScore = 0;
}

BowlingGame.prototype.lastFrame = function() {
  return this.frameRolls[this.frameRolls.length - 1];
};

BowlingGame.prototype.frameBeforeLast = function() {
  return this.frameRolls[this.frameRolls.length - 2];
};

BowlingGame.prototype.firstRoll = function(numberOfPins) {
  var frame = new Frame();
  this.currentFrame = frame;
  this.currentFrame.setFirstRollValue(numberOfPins);
  if (this.frameRolls.length > 1) {
    if (this.frameBeforeLast().isStrike === true) {
      if (this.lastFrame().isStrike === true) {
        this.frameBeforeLast().setScore(20 + this.currentFrame.firstRollValue);
        this.totalScore += this.frameBeforeLast().score;
      }
    }
  }
  if (this.currentFrame.isStrike === true) {
    this.frameRolls.push(this.currentFrame);
    if (this.frameRolls.length > 1) {
      if (this.frameBeforeLast().isSpare === true) {
        this.frameBeforeLast().setScore(20);
        this.totalScore += this.frameBeforeLast().score;
      }
    }
  }
  if (this.frameRolls.length > 0) {
    if (this.lastFrame().isSpare === true) {
      this.lastFrame().setScore(10 + this.currentFrame.firstRollValue);
      this.totalScore += this.lastFrame().score;
    }
  }
};

BowlingGame.prototype.secondRoll = function(numberOfPins) {
  this.currentFrame.setSecondRollValue(numberOfPins);
  if (this.currentFrame.isSpare === true) {
    this.frameRolls.push(this.currentFrame);
  } else {
    this.frameRolls.push(this.currentFrame);
    this.totalScore += this.currentFrame.score;
  }
  if (this.frameRolls.length > 1) {
    if (this.frameBeforeLast().isStrike === true) {
      if (this.lastFrame().isSpare === true) {
        this.frameBeforeLast().setScore(10 + this.lastFrame().firstRollValue + this.lastFrame().secondRollValue);
        this.totalScore += this.frameBeforeLast().score;
      } else if (this.lastFrame().isStrike === undefined) {
        this.frameBeforeLast().setScore(10 + this.lastFrame().score);
        this.totalScore += this.frameBeforeLast().score;
      }
    }
  }
};
