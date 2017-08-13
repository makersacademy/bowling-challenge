function BowlingScorecard() {
  this._frames = [];
  this.addFrame();
  this._complete = false;
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

BowlingScorecard.prototype.score = function() {
  return this._frames.reduce(function(sum, frame) {
      return sum + frame.score();
  }, 0);
};

BowlingScorecard.prototype.pinsAvailableToHit = function () {
  if (this.isGameComplete()) return -1;
  else if (this.frame().isComplete() || this.isBonusRoll()) return 10;
  else return 10 - this.frame().score1;
};

BowlingScorecard.prototype.updateGameStatus = function () {
  if (this.frame().isComplete()) {
    if (this.frameNumber() < 10) this.addFrame();
    else if ((this.frame().isComplete() && this.frame().score() < 10) || this.frame().bonus) {
      this.setGameComplete();
    }
  }
};

BowlingScorecard.prototype.frameNumber = function() {
  return this._frames.length;
};

BowlingScorecard.prototype.frame = function() {
  return this._frames[this.frameNumber() -1];
};

BowlingScorecard.prototype.isBonusRoll = function() {
  return this.frameNumber === 10 && this.frame().isComplete();
};

BowlingScorecard.prototype.checkBonus = function(score) {
  var i = this.frameNumber() - 3;
  if (i<0) i=0;
  for (i; i < this.frameNumber()-1; i++) {
    this._frames[i].addBonus(score);
  }
};

BowlingScorecard.prototype.addScore = function(score) {
  if (this.frameNumber() === 10) {
    if (this.frame().score2 === null) this.frame().addScore(score);
    else this.frame().addBonus(score);
  }
  else this.frame().addScore(score);
  this.checkBonus(score);
  this.updateGameStatus();
};
