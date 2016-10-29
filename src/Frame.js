function Frame() {
  this.score = 0;
}

Frame.prototype.rollOneScore = function(pins) {
  this.score += pins;
};

Frame.prototype.rollTwoScore = function(pins) {
  this.score += pins;
};
