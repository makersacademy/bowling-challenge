function BowlingGame() {
  this.rollNumber = 0;
  this.frameNumber = 1;
  this.numberOfBonus = 0;
  this.roll = {frame: {}};
  this.score = {frame: {}};
}

BowlingGame.prototype.frameTotal = function(frameNum) {
  if (this.frameNumber === 1 && this.rollNumber === 0) return 0;
  return this.score.frame[frameNum].reduce(function(score1, score2) {
    return score1 + score2;
  });
};

BowlingGame.prototype.gameTotal = function(frameNum) {
  var total = 0;
  for (var i = 1; i < frameNum + 1; i++) { total += this.frameTotal(i); }
  return total;
};

BowlingGame.prototype.register = function(pins) {
  if (this.frameNumber < 10) this._goesToNextFrame(pins);
  if (this.rollNumber === 1 && pins !== 10) this._checkValidRoll(pins);
  this._checkProcedure(pins);
};

BowlingGame.prototype._checkProcedure = function(pins) {
  this.rollNumber ++;
  this._logRoll(pins);
  this._isGameFinished();
  this._calculateScore(pins);
};

BowlingGame.prototype._isGameFinished = function() {
  if (this.rollNumber > 3) this.numberOfBonus = 0;
  if (this.rollNumber >= 3 && this.numberOfBonus === 0) throw new Error('Game Over');
  };

BowlingGame.prototype._logRoll = function(pins) {
  var rollArray = this.roll.frame[this.frameNumber];
  !rollArray ? this.roll.frame[this.frameNumber] = [pins] : rollArray.push(pins);
};

BowlingGame.prototype._calculateScore = function(pins) {
  this._logScoreCurrentFrame(pins);
  this._logScorePreviousFrame(pins);
  if (this.frameNumber > 2 && this.rollNumber === 1) this._logScorePreviousTwoFrames(pins);
  this._logBonus(pins);
};

BowlingGame.prototype._goesToNextFrame = function() {
  var condition1 = this.rollNumber === 2;
  var condition2 = this.rollNumber === 1 && this.roll.frame[this.frameNumber][0] === 10;
  if (condition1 || condition2) {
    this.frameNumber ++;
    this.rollNumber = 0;
  }
};

BowlingGame.prototype._checkValidRoll = function(pins) {
  if (pins + this.roll.frame[this.frameNumber][0] > 10) throw new Error('Not possbile');
};

BowlingGame.prototype._logScoreCurrentFrame = function(pins) {
  var scoreArray = this.score.frame[this.frameNumber];
  !scoreArray ? this.score.frame[this.frameNumber] = [pins] : scoreArray.push(pins);
};

BowlingGame.prototype._logScorePreviousFrame = function(pins) {
  if (this.numberOfBonus > 0 && this.rollNumber <= 2) {
    this.score.frame[this.frameNumber - 1].push(pins);
    this.numberOfBonus --;
  }
};

BowlingGame.prototype._logScorePreviousTwoFrames = function(pins) {
  if (this.roll.frame[this.frameNumber - 1][0] === 10 && this.roll.frame[this.frameNumber - 2][0] === 10) {
    this.score.frame[this.frameNumber - 2].push(pins);
    this.numberOfBonus --;
  }
};

BowlingGame.prototype._logBonus = function(pins) {
    if (this._isStrike(pins)) this.numberOfBonus ++;
    if (this._isSpare()) this.numberOfBonus ++;
  };

BowlingGame.prototype._isStrike = function(pins) {
  return this.rollNumber === 1 && pins === 10;
};

BowlingGame.prototype._isSpare = function() {
  return this.score.frame[this.frameNumber].reduce(function(score1, score2) {
    return score1 + score2;
  }) === 10;
};
