function Frame() {
   this.bonus = 0;
   this.bonusPoints = [];
}

Frame.prototype.score = function() {
  return this.rollOne + this.rollTwo;
}

Frame.prototype.setRoll = function(rollNum, score) {
  if (rollNum === 1) {
    this.checkStrike(score);
    this.rollOne = score;
  } else {
    this.checkSpare(score);
    this.rollTwo = score;
  };
}

Frame.prototype.checkStrike = function(score) {
  if (score === 10) {
    this.bonus = 2;
    this.rollTwo = 0;
  };
};

Frame.prototype.checkSpare = function(score) {
  if (this.rollOne + score === 10) {
    this.bonus = 1;
  }
};

Frame.prototype.applyBonus = function(score) {
  if (this.isBonusAvailable()) {
    this.bonusPoints.push(score);
    this.bonus--;
    return true;
  } else {
    return false;
  }
}

Frame.prototype.isBonusAvailable = function() {
  return this.bonus > 0;
};
