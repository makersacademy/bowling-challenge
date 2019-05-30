function Scorecard() {
  this.totalScore = 0;
  this.frameNumber = 0;
  this.rolls = [];
  this.roll1 = 0;
  this.roll2 = 0;
  this.strikeBonus = 0;
  this.displayRoll1 = 0;
  this.displayRoll2 = 0;
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

Scorecard.prototype.displayRolls = function() {
  if (this.frameNumber === 1) {
    this.displayRoll1 = this.rolls[this.frameNumber - 1]
  } else {
    this.displayRoll1 = this.rolls[this.frameNumber + 1]
  }
  this.displayRoll2 = this.rolls[this.frameNumber]
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
    this.rolls.push(0);
    this.totalScore += 10;
    this.strikeBonus += 1;
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
  this.bonus();
};

Scorecard.prototype.rollErrors = function(score) {
  if (this.frameNumber === 10) {
    throw new Error("Unable to add new rolls; the game has finished.")
  } else if (score > 10) {
    throw new Error("Score must be below 10.")
  }
};

Scorecard.prototype.bonus = function() {
  if (this.strikeBonus > 0) {
    this.totalScore += (this.roll1 + this.roll2)
    this.strikeBonus = 0;
  }
};
