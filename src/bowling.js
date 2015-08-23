var Bowling = function Bowling() {
  this.pins = 10
  this.firstRollScore = 0
  this.secondRollScore = 0
  this.frameNumber = 0
  this.totalScore = 0
};

Bowling.prototype.firstRoll = function(number) {
  if(number < 0 || number > 10) {
    throw new Error('That is an invalid number')
  }
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
  return "Please wait while we set up the next frame"
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
  this.pins = 10
};