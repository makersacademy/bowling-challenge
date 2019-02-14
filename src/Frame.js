function Frame (frameNumber) {
  this.frameNumber = frameNumber
  this.rollOne = null
  this.rollTwo = null
  this.bonus = null
}

Frame.prototype.rollOneScore = function (rollScore) {
  this.rollOne = rollScore
};

Frame.prototype.rollTwoScore = function (rollScore) {
  this.rollTwo = rollScore
};

Frame.prototype.addBonus = function (bonusScore) {
  this.bonus= bonusScore
};

Frame.prototype.frameScore = function () {
  return this.rollOne + this.rollTwo + this.bonus
};
