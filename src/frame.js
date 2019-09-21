function Frame() {
  this.rolls = [];
  this.score = 0;
  this.strike = false
};

Frame.prototype.addRoll = function(roll) {
  if (this.rolls.length == 0 && roll.pinsDown == 10) { this.strike = true };
  this.rolls.push(roll.pinsDown)
  this.score += roll.pinsDown
};
