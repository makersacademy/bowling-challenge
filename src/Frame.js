var Frame = function() {
  this.score = 0;
};

Frame.prototype.roll = function(roll1, roll2) {
  this.rollOne = roll1;
  this.rollTwo = roll2 || 0;
  this.updateScore();
};

Frame.prototype.addBonus = function(bonus) {
  this.score += bonus;
};

Frame.prototype.updateScore = function() {
  this.score = this.rollOne + this.rollTwo;
};

Frame.prototype.isSpare = function() {
  if (this.rollOne + this.rollTwo === 10 && this.rollTwo > 0) {
    return true;
  } else {
    return false;
  }
};

Frame.prototype.isStrike = function() {
  if (this.rollOne + this.rollTwo === 10 && this.rollTwo === 0) {
    return true;
  } else {
    return false;
  }
};