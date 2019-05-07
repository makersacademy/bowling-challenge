function Scorecard() {
  this.totalScore = 0;
  this.frameNumber = 0;
  this.rolls = [];
  this.roll1 = 0;
  this.roll2 = 0;
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
  this.rollErrors(score);
  if (this.roll1 + this.roll2 === 10) {
    this.rolls.push(score);
    this.rolls.push(score);
    this.totalScore += (score + score);
    this.roll1 = 0;
    this.roll2 = 0;
  } else if (score === 10) {
    this.frameNumber += 1;
    this.rolls.push(10);
    this.totalScore += 10;
  } else {
    this.rolls.push(score);
    this.totalScore += score;
    this.roll1 = score;
  }
};

Scorecard.prototype.secondRoll = function(score) {
  this.rollErrors(score);
  this.frameNumber += 1;
  this.rolls.push(score);
  this.totalScore += score;
  this.roll2 = score;
};

Scorecard.prototype.rollErrors = function(score) {
  if (this.frameNumber === 10) {
    throw new Error("Unable to add new rolls; the game has finished.")
  } else if (score > 10) {
    throw new Error("Score must be below 10.")
  }
};
