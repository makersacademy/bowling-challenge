var Frame = function() {
  this.rollOne = 0;
  this.rollTwo = 0;
};

Frame.prototype.firstRoll = function(score) {
  this.rollOne = score;
};

Frame.prototype.secondRoll = function(score) {
  this.rollTwo = score;
};

Frame.prototype.isStrike = function() {
  return this.rollOne === 10;
};
