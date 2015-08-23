var Bowling = function Bowling() {
  this.pins = 10
  this.firstRollScore = 0
  this.secondRollScore = 0
  this.frameNumber = 0
  this.totalScore = 0
};

Bowling.prototype.firstRoll = function(number) {
  this._updatePins(number);
  return this.firstRollScore = number
};

Bowling.prototype.secondRoll = function(number) {
  this._updatePins(number);
  this.secondRollScore = number
  this._countsTotalScore();
  this.newFrame();
};

Bowling.prototype.newFrame = function() {
  this._countsFrame();
  return this.pins = 10
};

Bowling.prototype._updatePins = function(number) {
  this.pins -= number
};

Bowling.prototype._countsFrame = function() {
  this.frameNumber += 1
};

Bowling.prototype._countsTotalScore = function() {
  this.totalScore = this.firstRollScore + this.secondRollScore
  this.firstRollScore = 0
  this.secondRollScore = 0
};