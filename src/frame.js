function Frame() {
  this.rolls = [];
  this.score = 0;
};

Frame.prototype.addRoll = function(roll) {
  this.rolls.push(roll.pinsDown)
  this.score += roll.pinsDown
  if (this.rolls.length == 1 && this.score == 10) { this.strike = true };
  if (this.rolls.length == 2 && this.score == 10) { this.spare = true};
};
