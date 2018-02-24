var Bowling = function() {
  this.firstRollScore;
  this.secondRollScore;
  this.total;
};

Bowling.prototype.firstRoll = function() {
  var roll = Math.floor(Math.random() * 11);
  return (this.firstRollScore = roll);
};

Bowling.prototype.secondRoll = function() {
  var roll = Math.floor(Math.random() * (11 - this.firstRollScore));
  return (this.secondRollScore = roll);
};

Bowling.prototype.total = function() {
  return (this.total = this.firstRollScore + this.secondRollScore);
};
