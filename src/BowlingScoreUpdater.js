function BowlingScoreUpdater() {
  this.game = {currentFrameNumber:1, currentFrameTotal:0,
    currentFrameBonusRounds:0, prevFrameTotal:0, prevFrameBonusRounds:0,
    prevPrevFrameTotal:0, prevPrevFrameBonusRounds:0, frameRoundsLeft:2};
};

BowlingScoreUpdater.prototype.shiftFrames = function() {
  if (this.game.frameRoundsLeft === 0){
  this._shiftPrevFrame();
  this._shiftCurrentFrame();
  this._resetCurrentFrame();
  };
};

BowlingScoreUpdater.prototype.updateBonus = function(score) {
  this._updatePrevPrevFrameBonus(score);
  this._updatePrevFrameBonus(score);
};

BowlingScoreUpdater.prototype.newRound = function(score) {
  this.shiftFrames();
  this._strikeNewRound(score);
  this._spareNewRound(score);
  this._nonSpareStrikeNewRound(score);
  this.updateBonus(score);
};


BowlingScoreUpdater.prototype._shiftPrevFrame = function() {
  this.game.prevPrevFrameTotal = this.game.prevFrameTotal;
  this.game.prevPrevFrameBonusRounds = this.game.prevFrameBonusRounds;
};

BowlingScoreUpdater.prototype._shiftCurrentFrame = function() {
  this.game.prevFrameTotal = this.game.currentFrameTotal;
  this.game.prevFrameBonusRounds = this.game.currentFrameBonusRounds;
};

BowlingScoreUpdater.prototype._resetCurrentFrame = function() {
  this.game.currentFrameNumber += 1;
  this.game.currentFrameTotal = 0;
  this.game.currentFrameBonusRounds = 0;
  this.game.frameRoundsLeft = 2;
};

BowlingScoreUpdater.prototype._updatePrevFrameBonus = function(score) {
  if (this.game.prevFrameBonusRounds > 0) {
    this.game.prevFrameTotal += score;
    this.game.prevFrameBonusRounds -= 1;
  };
};

BowlingScoreUpdater.prototype._updatePrevPrevFrameBonus = function(score) {
  if (this.game.prevPrevFrameBonusRounds === 1) {
    this.game.prevPrevFrameTotal += score;
    this.game.prevPrevFrameBonusRounds -= 1;
  };
};

BowlingScoreUpdater.prototype._strikeNewRound = function(score) {
  if (this._isStrike(score)){
    this.game.frameRoundsLeft = 0;
    this.game.currentFrameBonusRounds = 2;
    this.game.currentFrameTotal = 10;
  };
};

BowlingScoreUpdater.prototype._isStrike = function(score) {
  return score === 10 && this.game.frameRoundsLeft === 2
};

BowlingScoreUpdater.prototype._spareNewRound = function(score) {
  if (this._isSpare(score)){
    this.game.frameRoundsLeft = 0;
    this.game.currentFrameBonusRounds = 1;
    this.game.currentFrameTotal += score;
  };
};

BowlingScoreUpdater.prototype._isSpare = function(score) {
  return this.game.currentFrameTotal + score === 10
};

BowlingScoreUpdater.prototype._nonSpareStrikeNewRound = function(score) {
  if (this._isNonSpareStrike(score)){
    this.game.frameRoundsLeft -= 1;
    this.game.currentFrameTotal += score;
  };
};

BowlingScoreUpdater.prototype._isNonSpareStrike = function(score) {
  return this.game.currentFrameTotal + score < 10
};
