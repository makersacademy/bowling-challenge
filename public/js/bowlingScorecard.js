function BowlingScorecard() {
  this._frames = [];
  this.addFrame();
  this._complete = false;
  this._score = 0;
  this.frameNumber = 1;
}

BowlingScorecard.prototype.addFrame = function() {
  this._frames.push(new Frame());
};

BowlingScorecard.prototype.setGameComplete = function() {
  this._complete = true;
};

BowlingScorecard.prototype.isGameComplete = function() {
  return this._complete;
};

BowlingScorecard.prototype.isFirstBowl = function() {
  return this.frame().isFirstBowl;
};

BowlingScorecard.prototype.score = function() {
  return this._score;
};

BowlingScorecard.prototype.updateGameStatus = function () {
  if (this.frame().isComplete()) {
    if (this.frameNumber < 10) {
      this.addFrame();
      this.frameNumber += 1;
    }
    else if ((this.frame().isComplete() && this.frame().totalScore < 10) || this.frame().bonus) {
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
  return this.frameNumber === 10 && this.frame().isComplete();
};

BowlingScorecard.prototype.checkBonus = function(score) {
  if (this.frameNumber === 1) return;
  if (this.frame().isComplete()) {
    if (this.previousFrame().isStrike()) {
      this.previousFrame().addBonus(this.frame().score1 + this.frame().score2);
    }
    if (this.frameNumber > 2 && this.secondPreviousFrame().isStrike() && this.previousFrame().isStrike()) {
      if (this.frameNumber === 10 && this.frame.score2) return;
      this.secondPreviousFrame().addBonus(10);
    }
  }
  else {
    if (this.previousFrame().isSpare()) {
      this.previousFrame().addBonus(score);
    }
  }
};

BowlingScorecard.prototype.addScore = function(score) {
  if (this.frameNumber === 10) {
    if (this.frame().score2 === null) this.frame().addScore(score);
    else this.frame().addBonus(score);
  }
  else this.frame().addScore(score);
  this.checkBonus(score);
  this.updateScore();
  this.updateGameStatus();
};
