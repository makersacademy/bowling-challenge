var Frame = function() {
  this.rollOne = {index: 0, score: 0};
  this.rollTwo = {index: 0, score: 0};
  this.bonusRoll = {index: 0, score: 0};
};

Frame.prototype.setRollOneScore = function(roll) {
  return this.rollOne.score = roll.getPinsHit()
};

Frame.prototype.getRollOneScore = function() {
  return this.rollOne.score
};

Frame.prototype.setRollOneIndex = function(index) {
  return this.rollOne.index = index
}

Frame.prototype.getRollOneIndex = function() {
    return this.rollOne.index
}

Frame.prototype.setRollTwoScore = function(roll) {
  return this.rollTwo.score = roll.getPinsHit()
};

Frame.prototype.getRollTwoScore = function() {
  return this.rollTwo.score
};

Frame.prototype.setRollTwoIndex = function(index) {
  return this.rollTwo.index = index
}

Frame.prototype.getRollTwoIndex = function() {
    return this.rollTwo.index
}

Frame.prototype.setBonusRollScore = function(rollIndex) {
  return this.bonusRoll.score = rollIndex
};

Frame.prototype.getBonusRollScore = function() {
  return this.bonusRoll.score
};

Frame.prototype.setBonusRollIndex = function(index) {
  return this.bonusRoll.index = index
}

Frame.prototype.getBonusRollIndex = function() {
    return this.bonusRoll.index
}
