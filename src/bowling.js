var Bowling = function Bowling() {
  this.pins = 10
  this.firstRollScore = 0
  this.secondRollScore = 0
};

Bowling.prototype.firstRoll = function(number) {
  this.pins -= number
  return this.firstRollScore = number
};

Bowling.prototype.secondRoll = function(number) {
  this.pins -= number
  return this.secondRollScore = number
};