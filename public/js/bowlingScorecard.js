function BowlingScorecard() {
  this._frames = new Array(10).fill(new Frame());
  this._complete = false;
  this._score = 0;
  this.frameNumber = 1;
}

BowlingScorecard.prototype.setGameComplete = function() {
  this._complete = true;
};

BowlingScorecard.prototype.isGameComplete = function() {
  return this._complete;
};

BowlingScorecard.prototype.score = function() {
  return this._score;
};

BowlingScorecard.prototype.updateGameStatus = function () {
  if (this.frame().isComplete()) {
    if (this.frameNumber < 10) this.frameNumber += 1;
    else if (this.frame().totalScore < 10 || this.frame().bonus) {
      this.setGameComplete();
    }
  }
};

BowlingScorecard.prototype.updateScore = function() {
  this._score = this._frames.reduce(function(sum, frame) {
      return sum + frame.totalScore;
  }, 0);
};

BowlingScorecard.prototype.getFrame = function(i) {
  return this._frames[i -1];
};

BowlingScorecard.prototype.frame = function() {
  return this._frames[this.frameNumber -1];
};

BowlingScorecard.prototype.previousFrame = function() {
  return this._frames[this.frameNumber -2];
};

BowlingScorecard.prototype.secondPreviousFrame = function() {
  return this._frames[this.frameNumber -3];
};

BowlingScorecard.prototype.isBonusRoll = function() {
  return this.frameNumber === 10 && this.frame().totalScore >= 10;
};

BowlingScorecard.prototype.checkFrameBonus = function(frames, frameNumber, score) {
  if (this.frameNumber < 2) return;
  if (this.frame().isFirstBowl) {
    if (this.previousFrame().isSpare()) {
      this.previousFrame().addBonus(score);
    }
    else if (this.frameNumber > 2 && this.secondPreviousFrame().isStrike()) {
      this.secondPreviousFrame().addBonus(this.previousFrame().totalScore + score);
    }
  }
  else if (this.previousFrame().isStrike()) {
    this.previousFrame().addBonus(this.frame().totalScore);
  }
};

BowlingScorecard.prototype.addScore = function(score) {
  if (this.isBonusRoll()) {
    this.frame().addBonus(score);
  }
  else {
    this.frame().addScore(score);
  }
  this.checkFrameBonus(score);
  this.updateScore();
  this.updateGameStatus();
};
