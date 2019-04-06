var Frame = function() {
  this.rolls = [];
};

Frame.prototype.getFrameRolls = function() {
  return this.rolls;
};

Frame.prototype.roll = function(roll) {
  this.rolls.push(roll);
};
