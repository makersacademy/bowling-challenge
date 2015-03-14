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

Frame.prototype.setRollTwoScore = function(roll) {
  return this.rollTwo = roll.getPinsHit()
};

Frame.prototype.getRollTwoScore = function() {
  return this.rollTwo
};


Frame.prototype.setBonusRollScore = function(rollIndex) {
  return this.bonusRoll = rollIndex
};

Frame.prototype.getBonusRollScore = function() {
  return this.bonusRoll
};

