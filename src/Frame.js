function Frame() {
  this.score = 0;
  this.rollOneScore = 0;
  this.rollTwoScore = 0;
}

Frame.prototype.addRollOneScore = function(pins) {
  this.rollOneScore = pins;
  this.score += this.rollOneScore;
};

Frame.prototype.addRollTwoScore = function(pins) {
  this.rollTwoScore = pins;
  this.score += this.rollTwoScore;
};
