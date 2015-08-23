var Bowling = function Bowling() {
  this.pins = 10
  this.firstRollScore = 0
  this.secondRollScore = 0
  this.frameNumber = 0
};

Bowling.prototype.firstRoll = function(number) {
  this._updatePins(number);
  return this.firstRollScore = number
};

Bowling.prototype.secondRoll = function(number) {
  this._updatePins(number);
  return this.secondRollScore = number
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