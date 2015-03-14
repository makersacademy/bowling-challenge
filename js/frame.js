var Frame = function() {
  this.rollOne = 0;
  this.rollTwo = 0;
  this.bonusRoll = 0;
};

Frame.prototype.setRollOneScore = function(roll) {
  return this.rollOne = roll.getPinsHit()
};

Frame.prototype.getRollOneScore = function() {
  return this.rollOne
};
