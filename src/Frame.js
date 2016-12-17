var Frame = function() {
  this.rollOne = 0;
  this.rollTwo = 0;
};

Frame.prototype.firstRoll = function(score) {
  this.rollOne = score;
};
