function BowlingGame() {
  this.frames = [];
  this.rolls = [];
  this.totalScore = 0;
}

BowlingGame.prototype.lastFrame = function() {
  return this.frames[this.frames.length - 1];
};

BowlingGame.prototype.frameBeforeLast = function() {
  return this.frames[this.frames.length - 2];
};

BowlingGame.prototype.createFrame = function() {
  var frame = new Frame();
  this.currentFrame = frame;
}

BowlingGame.prototype.addFrame = function() {
  this.frames.push(this.currentFrame);
}

BowlingGame.prototype.updateTotalScore = function(frame) {
  this.totalScore += frame.score;
}

BowlingGame.prototype.scoreSpare = function() {
  if (this.frames.length > 0) {
    if (this.lastFrame().isSpare === true) {
      this.lastFrame().addBonus(this.currentFrame.firstRollValue);
      this.lastFrame().calculateFrameScore();
      this.updateTotalScore(this.lastFrame());
      // this.lastFrame().setScore(10 + this.currentFrame.firstRollValue);
      // this.updateTotalScore(this.lastFrame());
    }
  }
}

BowlingGame.prototype.firstRoll = function(numberOfPins) {
  this.createFrame();
  this.currentFrame.setFirstRollValue(numberOfPins);

  // update frame before last if it was a strike (and last frame was a strike)
  if (this.frames.length > 1) {
    if (this.frameBeforeLast().isStrike === true) {
      if (this.lastFrame().isStrike === true) {
        this.frameBeforeLast().setScore(20 + this.currentFrame.firstRollValue);
        this.updateTotalScore(this.frameBeforeLast());
      }
    }
  }

  // update frame before last if it was a strike (and this frame is a strike?)
  if (this.currentFrame.isStrike === true) {
    this.addFrame();
    if (this.frames.length > 1) {
      if (this.frameBeforeLast().isSpare === true) {
        this.frameBeforeLast().setScore(20);
        this.updateTotalScore(this.frameBeforeLast());
      }
    }
  }

  // scores previous frame if it's a spare
  this.scoreSpare();
};

BowlingGame.prototype.secondRoll = function(numberOfPins) {
  this.currentFrame.setSecondRollValue(numberOfPins);
  this.addFrame();
  if (this.currentFrame.isSpare !== true) {
    this.updateTotalScore(this.currentFrame);
  }

  // update frame before last if it was a strike (and current frame is not a strike)
  if (this.frames.length > 1) {
    if (this.frameBeforeLast().isStrike === true) {
      if (this.lastFrame().isSpare === true) {
        this.frameBeforeLast().setScore(10 + this.lastFrame().firstRollValue + this.lastFrame().secondRollValue);
        this.totalScore += this.frameBeforeLast().score;
      } else if (this.lastFrame().isStrike === undefined) {
        this.frameBeforeLast().setScore(10 + this.lastFrame().score);
        this.updateTotalScore(this.frameBeforeLast());
      }
    }
  }
};
