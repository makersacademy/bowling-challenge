function Frame (frameNumber) {
  this.frameNumber = frameNumber
  this.rollOne = null
  this.rollTwo = null
}

Frame.prototype.rollOneScore = function (rollScore) {
  this.rollOne = rollScore
};

Frame.prototype.rollTwoScore = function (rollScore) {
  this.rollTwo = rollScore
};
