function Frame() {
   this.bonus = 0;
}

Frame.prototype.score = function() {
  return this.rollOne + this.rollTwo;
};

Frame.prototype.setRoll = function(rollNum, score, frameNum) {
  if (rollNum === 1) {
    this.checkStrike(score);
    this.rollOne = score;
  } else {
    this.checkSpare(score);
    this.rollTwo = score;
  }
};

Frame.prototype.checkStrike = function(score) {
  if (score === 10) this.bonus = 2;
};

Frame.prototype.checkSpare = function(score) {
  if (this.rollOne + score === 10) this.bonus = 1;
};

Frame.prototype.applyBonus = function(score) {
  if (this.isBonusAvailable()) {
    this.bonus--;
    return true;
  } else {
    return false;
  }
};

Frame.prototype.isBonusAvailable = function() {
  return this.bonus > 0;
};

