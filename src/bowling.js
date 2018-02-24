var Bowling = function() {
  this.firstRollScore;
};

Bowling.prototype.firstRoll = function() {
  var roll = Math.floor(Math.random() * 11);
  return (this.firstRollScore = roll);
};

Bowling.prototype.secondRoll = function() {
  var roll = Math.floor(Math.random() * (11 - this.firstRollScore));
  return roll;
};
