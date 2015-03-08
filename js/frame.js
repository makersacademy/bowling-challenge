var Frame = function() {
  this.rollOne = 0;
  this.rollTwo = 0;
  this.bonusRoll = 0;
  this.frameNumber = 1;
};

Frame.prototype.nextFrame = function() {
  return this.frameNumber += 1
  };

Frame.prototype.setRollOneScore = function(roll) {
  if (roll.getPinsHit() < 10 ){
    return this.rollOne = roll.getPinsHit()
  }else {
    return this.rollOne = 0};
};

Frame.prototype.getRollOneScore = function() {
  return this.rollOne
};
