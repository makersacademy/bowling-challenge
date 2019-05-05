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

Scorecard.prototype.showRolls = function() {
  return this.rolls;
};

Scorecard.prototype.firstRoll = function(score) {
  if (score === 10) {
    this.frameNumber += 1;
    this.rolls.push(10);
  } else {
    this.rolls.push(score);
  }
};

Scorecard.prototype.secondRoll = function(score) {
  this.frameNumber += 1;
  this.rolls.push(score);
};
