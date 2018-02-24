var BowlingFrame = function() {
  this.firstRollScore;
  this.secondRollScore;
  this.totalScore;
  this.rollNumber = 1;
};

BowlingFrame.prototype.firstRoll = function() {
  var roll = Math.floor(Math.random() * 11);
  this.rollNumber += 1;
  return (this.firstRollScore = roll);
};

BowlingFrame.prototype.secondRoll = function() {
  var roll = Math.floor(Math.random() * (11 - this.firstRollScore));
  return (this.secondRollScore = roll);
};

BowlingFrame.prototype.total = function() {
  return (this.total = this.firstRollScore + this.secondRollScore);
};
