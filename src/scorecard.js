function Scorecard() {
  this.totalScore = 0;
  this.frameNumber = 0;
  this.rolls = [];
};

Scorecard.prototype.showTotal = function() {
  return this.totalScore;
};

Scorecard.prototype.showFrame = function() {
  return this.frameNumber;
};

Scorecard.prototype.roll = function(score) {
  if (score === 10) {
    this.frameNumber += 1;
    this.rolls.push("X");
  } else {
  }
};
