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
  if (this._isInvalid(number)) throw new Error('That is an invalid number');
  if (this._strikes(number)) this._processStrikes();
  if (this._spares()) this._processSpares(number);
  this.firstRollScore = number
};

Bowling.prototype.secondRoll = function(number) {
  if (this._exceedsTenPins(number)) throw new Error('There are only 10 pins');
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

Bowling.prototype._isInvalid = function(number) {
  return number < 0 || number > 10
};

Bowling.prototype._exceedsTenPins = function(number) {
  return (number + this.firstRollScore > 10) && (this.frameNumber < 10)
};

Bowling.prototype._strikes = function(number) {
  return number === 10 && this.frameNumber < 10
};

Bowling.prototype._spares = function() {
  return this.spare > 0
};

Bowling.prototype._processStrikes = function() {
  this.strike += 1
  this.frameNumber += 1
  this.firstRollScore = 10
  this._countsTotalScore();
};

Bowling.prototype._processSpares = function(number) {
  this.spareBonusPoints += number
  this.spare = 0
};