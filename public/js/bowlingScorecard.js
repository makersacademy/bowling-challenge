function BowlingScorecard() {
  this.frames = [];
  this.addFrame();
  this.complete = false;
}

BowlingScorecard.prototype.setGameComplete = function() {
  this.currentFrame().setComplete();
  this.complete = true;
};

BowlingScorecard.prototype.isGameComplete = function() {
  return this.complete;
};

BowlingScorecard.prototype.score = function () {
  return this.frames.reduce(function(sum, frame) {
      return sum + frame.score();
  }, 0);
};

BowlingScorecard.prototype.addFrame = function() {
  this.frames.push(new Frame());
};

BowlingScorecard.prototype.currentFrame = function() {
  return this.frames[this.frames.length -1];
};

BowlingScorecard.prototype.previousFrame = function() {
  return this.frames[this.frames.length -2];
};

BowlingScorecard.prototype.secondPreviousFrame = function() {
  return this.frames[this.frames.length -3];
};

BowlingScorecard.prototype.currentFrameNumber = function() {
  return this.frames.length;
};

BowlingScorecard.prototype.getFrame = function(number) {
  return this.frames[number - 1];
};

BowlingScorecard.prototype.isLastFrame = function() {
  return this.frames.length === 10;
};

BowlingScorecard.prototype.isNotLastFrame = function() {
  return !this.isLastFrame();
};

BowlingScorecard.prototype.isBonusRoll = function() {
  return this.isLastFrame() && this.currentFrame().score() >= 10;
};

BowlingScorecard.prototype.checkSpareBonus = function(score) {
  if (this.previousFrame() && this.previousFrame().isSpare()) {
    this.previousFrame().addBonus(score);
  }
};

BowlingScorecard.prototype.checkStrikeBonusFirstBowl = function(score) {
  if (this.secondPreviousFrame() && this.secondPreviousFrame().isStrike()) {
    this.secondPreviousFrame().addBonus(this.previousFrame().score() + score);
  }
};

BowlingScorecard.prototype.checkStrikeBonusSecondBowl = function(score) {
  if (this.previousFrame() && this.previousFrame().isStrike()) {
      this.previousFrame().addBonus(this.currentFrame().score());
  }
};

BowlingScorecard.prototype.addScore = function(score) {
  if (this.currentFrame().isFirstBowl()) {
    this.currentFrame().setScore1(score);
    if (this.currentFrame().isStrike() && this.isNotLastFrame()) {
      this.currentFrame().setComplete();
    }
    this.checkSpareBonus(score);
    this.checkStrikeBonusFirstBowl(score);
  }
  else if(this.currentFrame().isSecondBowl()) {
    this.currentFrame().setScore2(score);
    if (this.isLastFrame() && this.currentFrame().score() < 10) {
      this.setGameComplete();
    }
    if (this.isNotLastFrame()) { this.currentFrame().setComplete(); }
    this.checkStrikeBonusSecondBowl();
  }
  else if (this.isBonusRoll()) {
    this.currentFrame().setScore3(score);
    this.setGameComplete();
  }
  if (this.isNotLastFrame() && this.currentFrame().isComplete()) {
    this.addFrame();
  }
};
