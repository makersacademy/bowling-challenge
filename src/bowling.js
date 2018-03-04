var BowlingFrame = function() {
  this.firstRollScore;
  this.secondRollScore;
  this.totalScore;
  this.rollNumber = 1;
};

BowlingFrame.prototype.firstRoll = function(number) {
  this.rollNumber += 1;
  return (this.firstRollScore = number);
};

BowlingFrame.prototype.secondRoll = function(number) {
  return (this.secondRollScore = number);
};

BowlingFrame.prototype.total = function() {
  return (this.total = this.firstRollScore + this.secondRollScore);
};
