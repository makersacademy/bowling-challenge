function BowlingGame() {
  this.rollNumber = 0;
  this.frameNumber = 1;
  this.numberOfBonus = 0;
  this.remainingPins = 10;
  this.roll = {frame: {}};
  this.score = {frame: {}};
  this._buildStoringArrays();
}

BowlingGame.prototype._buildStoringArrays = function() {
  for (counter = 1; counter <= 10; counter++) {
    this.roll.frame[counter] = [];
    this.score.frame[counter] = 0;
  }
};

BowlingGame.prototype.gameTotal = function(frameNum) {
  var total = 0;
  for (var i = 1; i < frameNum + 1; i++) { total += this.score.frame[i]; }
  return total;
};

BowlingGame.prototype.rerack = function () {
  this.remainingPins = 10;
};

BowlingGame.prototype.register = function(pins) {
  if (this.frameNumber < 10) this._checkIfNextFrame(pins);
  this._checkValidRoll(pins);
  this._checkProcedure(pins);
};

BowlingGame.prototype._checkProcedure = function(pins) {
  this.rollNumber ++;
  this.removePins(pins);
  this._logRoll(pins);
  this._isGameFinished();
  this._calculateScore(pins);
};

BowlingGame.prototype._isGameFinished = function() {
  if (this.rollNumber > 3) this.numberOfBonus = 0;
  if (this.rollNumber >= 3 && this.numberOfBonus === 0) throw new Error('Not possbile');
  };

  BowlingGame.prototype.removePins = function (pins) {
    this.remainingPins -= pins;
    if (this.remainingPins === 0) this.rerack();
  };

BowlingGame.prototype._logRoll = function(pins) {
  this.roll.frame[this.frameNumber].push(pins);
};

BowlingGame.prototype._calculateScore = function(pins) {
  this._logScoreCurrentFrame(pins);
  this._logScorePreviousFrame(pins);
  if (this.frameNumber > 2 && this.rollNumber === 1) this._logScorePreviousTwoFrames(pins);
  this._logBonus(pins);
};

BowlingGame.prototype._checkIfNextFrame = function() {
  var condition1 = this.rollNumber === 2;
  var condition2 = this.rollNumber === 1 && this.roll.frame[this.frameNumber][0] === 10;
  if (condition1 || condition2) { this.frameNumber ++; this.rollNumber = 0; this.rerack(); }
};

BowlingGame.prototype._checkValidRoll = function(pins) {
  if (pins > this.remainingPins) throw new Error('Not possbile');
};

BowlingGame.prototype._logScoreCurrentFrame = function(pins) {
  this.score.frame[this.frameNumber] += pins;
};

BowlingGame.prototype._logScorePreviousFrame = function(pins) {
  if (this.numberOfBonus > 0 && this.rollNumber <= 2) {
    this.score.frame[this.frameNumber - 1] += pins;
    this.numberOfBonus --;
  }
};

BowlingGame.prototype._logScorePreviousTwoFrames = function(pins) {
  if (this.roll.frame[this.frameNumber - 1][0] === 10 && this.roll.frame[this.frameNumber - 2][0] === 10) {
    this.score.frame[this.frameNumber - 2] += pins;
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
  return this.roll.frame[this.frameNumber].reduce(function(score1, score2) {
    return score1 + score2;
  }) === 10;
};
