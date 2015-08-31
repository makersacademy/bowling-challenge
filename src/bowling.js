var Bowling = function Bowling() {
  this.firstRollScore = 0
  this.secondRollScore = 0
  this.thirdRollScore = 0
  this.frameNumber = 1
  this.totalScore = 0
  this.spareBonusPoints = 0
  this.strikeBonusPoints = 0
  this.spare = 0
  this.strike = 0
};

Bowling.prototype.firstRoll = function(number) {
  if (number < 0 || number > 10) {
    throw new Error('That is an invalid number')
  }
  if (number === 10 && this.frameNumber < 10) {
    this.strike += 1
    this.frameNumber += 1
    this.firstRollScore = 10
    this._countsTotalScore();
  }
  if (this.spare > 0) {
    this.spareBonusPoints += number
    this.spare = 0
  }
  return this.firstRollScore = number
};

Bowling.prototype.secondRoll = function(number) {
  if ((number + this.firstRollScore > 10) && (this.frameNumber < 10)) {
    throw new Error('That is an invalid number')
  }
  if (this.firstRollScore + number === 10) {
    this.spare += 1
  }
  if (this.strike === 1) {
    this.strikeBonusPoints += (this.firstRollScore + number)
    this.strike = 0
  }
  if (this.strike > 1) {
    this._calculatesConsecutiveBonusPoints(number);
    this.strike = 0
  }
  this.secondRollScore = number
  if (this.frameNumber < 10) {
    this._countsTotalScore();
    this.frameNumber += 1
  }
};

Bowling.prototype.thirdRoll = function(number) {
  this.thirdRollScore = number
  this._countsTotalScore();
};

Bowling.prototype._calculatesConsecutiveBonusPoints = function(number) {
  this.strikeBonusPoints = ((this.strike - 1) * 2 - 1) * 10 + this.firstRollScore * 2 + number
};

Bowling.prototype._countsTotalScore = function() {
  this.totalScore += (this.firstRollScore + this.secondRollScore + this.spareBonusPoints + this.strikeBonusPoints + this.thirdRollScore)
  this._reset();
};

Bowling.prototype._reset = function() {
  this.spareBonusPoints = 0
  this.strikeBonusPoints = 0
  this.firstRollScore = 0
  this.secondRollScore = 0
  this.thirdRollScore = 0
};