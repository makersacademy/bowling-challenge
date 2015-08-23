var Bowling = function Bowling() {
  this.pins = 10
  this.firstRollScore = 0
  this.secondRollScore = 0
  this.frameNumber = 1
  this.totalScore = 0
  this.spareBonusPoints = 0
  this.strikeBonusPoints = 0
  this.spare = 0
  this.strike = 0
};

Bowling.prototype.firstRoll = function(number) {
  if(number < 0 || number > 10) {
    throw new Error('That is an invalid number')
  }
  if(number === 10) {
    this.strike += 1
    this.newFrame();
    this.firstRollScore = 10
    this._countsTotalScore();
  }
  if(this.spare > 0) {
    this.spareBonusPoints = number
    this.spare = 0
  }
  this._updatePins(number);
  return this.firstRollScore = number
};

Bowling.prototype.secondRoll = function(number) {
  if(number + this.firstRollScore > 10) {
    throw new Error('That is an invalid number')
  }
  if (this.firstRollScore + number === 10) {
    this._updateSpare();
  }
  if(this.strike > 0) {
    this.strikeBonusPoints = this.firstRollScore + number
    this.strike = 0
  }
  this.secondRollScore = number
  this._updatePins(number);
  this._countsTotalScore();
  this.newFrame();
};

Bowling.prototype.newFrame = function() {
  this._countsFrame();
};

Bowling.prototype._updatePins = function(number) {
  this.pins -= number
};

Bowling.prototype._countsFrame = function() {
  this.frameNumber += 1
};

Bowling.prototype._countsTotalScore = function() {
  this.totalScore += (this.firstRollScore + this.secondRollScore + this.spareBonusPoints + this.strikeBonusPoints)
  this.spareBonusPoints = 0
  this.strikeBonusPoints = 0
  this.firstRollScore = 0
  this.secondRollScore = 0
  this.pins = 10
};

Bowling.prototype._updateSpare = function() {
  this.spare += 1
};