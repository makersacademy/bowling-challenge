function Frame() {
  this.rolls = [];
  this.score = 0;
};

Frame.prototype.addRoll = function(roll) {
  this.rolls.push(roll.pinsDown)
  this.score += roll.pinsDown
};
