function BowlingScorecard() {
  this.frames = [];
  this.addFrame();
  this._complete = false;
}

BowlingScorecard.prototype.setGameComplete = function() {
  this._complete = true;
};

BowlingScorecard.prototype.isGameComplete = function() {
  return this._complete;
};

BowlingScorecard.prototype.score = function () {
  return this.frames.reduce(function(sum, frame) {
      return sum + frame.score();
  }, 0);
};

BowlingScorecard.prototype.addFrame = function() {
  this.frames.push(new Frame());
};

BowlingScorecard.prototype.frame = function() {
  return this.frames[this.frames.length -1];
};

BowlingScorecard.prototype.previousFrame = function() {
  return this.frames[this.frames.length -2];
};

BowlingScorecard.prototype.secondPreviousFrame = function() {
  return this.frames[this.frames.length -3];
};

BowlingScorecard.prototype.frameNumber = function() {
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
  return this.isLastFrame() && this.frame().score() >= 10;
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
      this.previousFrame().addBonus(this.frame().score());
  }
};

BowlingScorecard.prototype.addScore = function(score) {
  if (this.frame().isFirstBowl()) {
    this.frame().setScore1(score);
    this.checkSpareBonus(score);
    this.checkStrikeBonusFirstBowl(score);
  }
  else if(this.frame().isSecondBowl()) {
    this.frame().setScore2(score);
    if (this.isLastFrame() && this.frame().score() < 10) {
      this.setGameComplete();
      return;
    }
    this.checkStrikeBonusSecondBowl();
  }
  else if (this.isBonusRoll()) {
    this.frame().addBonus(score);
    this.setGameComplete();
    return;
  }
  if (this.isNotLastFrame() && this.frame().isComplete()) this.addFrame();
};
