function BowlingGame() {
  this.rollNumber = 0;
  this.frameNumber = 1;
  this.numberOfBonus = 0;
  this.score = {frame: {}};
}

BowlingGame.prototype.frameTotal = function(frameNum) {
  if (this.frameNumber === 1 && this.rollNumber === 0) return 0;
  return this.score.frame[frameNum].reduce(function(score1, score2) {
    return score1 + score2;
  });
};

BowlingGame.prototype.gameTotal = function() {
  var total = 0;
  for (var i = 1; i < 11; i++) { total += this.frameTotal(i); }
  return total;
};

BowlingGame.prototype.roll = function(pins) {
  this.rollNumber ++;
  this._checkProcedure(pins);
};

BowlingGame.prototype._checkProcedure = function(pins) {
  this._isGameFinished();
  this._calculateScore(pins);
  if (this.frameNumber < 10) this._goesToNextFrame(pins);
};

BowlingGame.prototype._isGameFinished = function() {
  if (this.rollNumber > 3) this.numberOfBonus = 0;
  if (this.rollNumber >= 3 && this.numberOfBonus === 0) throw new Error('Game Over');
  };

BowlingGame.prototype._calculateScore = function(pins) {
  if (this.rollNumber <= 2) this._logScoreWithSpare(pins);
  if (this.rollNumber === 1) this._logScoreWithStrike(pins);
  this._logScoreWithoutBonus(pins);
  this._logBonus();
};

BowlingGame.prototype._goesToNextFrame = function(pins) {
  if (this._isStrike() || this.rollNumber === 2) {
    this.frameNumber ++;
    this.rollNumber = 0;
  }
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
  var scoreArray = this.score.frame[this.frameNumber];
  !scoreArray ? this.score.frame[this.frameNumber] = [pins] : scoreArray.push(pins);
};

BowlingGame.prototype._logBonus = function() {
  if (this._isStrike()) this.numberOfBonus ++;
  if (this._isSpare()) this.numberOfBonus ++;
};

BowlingGame.prototype._isStrike = function() {
  return this.score.frame[this.frameNumber][0] === 10;
};

BowlingGame.prototype._isSpare = function() {
  return this.score.frame[this.frameNumber].reduce(function(score1, score2) {
    return score1 + score2;
  }) === 10;
};
