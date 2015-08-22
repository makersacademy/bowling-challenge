function BowlingGame() {
  this.rollNumber = 0;
  this.frameNumber = 1;
  this.numberOfBonus = 0;
  this.score = {frame: {}};
}

BowlingGame.prototype.roll = function(pins) {
  this._isGameFinished();
  this.rollNumber ++;
  this._calculateScore(pins);
  if (this.frameNumber < 10) { this._goesToNextFrame(pins); }
};

BowlingGame.prototype._isGameFinished = function(first_argument) {
  if (this.rollNumber >= 3) { this.numberOfBonus = 0; }
  if (this.rollNumber >= 2 && this.numberOfBonus === 0) {
    throw new Error('Game Over');
  }
};

BowlingGame.prototype._calculateScore = function(pins) {
  this._logScoreWithSpare(pins);
  this._logScoreWithStrike(pins);
  this._logScoreWithoutBonus(pins);
  this._logBonus();
};

BowlingGame.prototype._logScoreWithSpare = function(pins) {
  if (this.numberOfBonus > 0) {
    this.score.frame[this.frameNumber - 1].push(pins);
    this.numberOfBonus --;
  }
};

BowlingGame.prototype._logScoreWithStrike = function(pins) {
  if (this.numberOfBonus > 0 && this.frameNumber > 2) {
    this.score.frame[this.frameNumber - 2].push(pins);
    this.numberOfBonus --;
  }
};

BowlingGame.prototype._logScoreWithoutBonus = function(pins) {
  if (this.frameNumber < 11) {
    var scoreArray = this.score.frame[this.frameNumber];
    !scoreArray ? this.score.frame[this.frameNumber] = [pins] : scoreArray.push(pins);
  }
};

BowlingGame.prototype._logBonus = function() {
  if (this._isStrike()) { this.numberOfBonus ++; }
  if (this._isSpare()) { this.numberOfBonus ++; }
};

BowlingGame.prototype._isStrike = function() {
  return this.score.frame[this.frameNumber][0] === 10;
};

BowlingGame.prototype._isSpare = function() {
  return this.score.frame[this.frameNumber].reduce(function(score1, score2) {
    return score1 + score2;
  }) === 10;
};

BowlingGame.prototype._goesToNextFrame = function(pins) {
  if (this._isStrike() || this.rollNumber === 2) {
    this.frameNumber ++;
    this.rollNumber = 0;
  }
};

