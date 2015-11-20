function Frame(rollIndex) {
  this.rollIndex = rollIndex;
  this.turns = 0;
  this.pins = 0;
}

Frame.prototype.isFinished = function() {
  return this.turns === 2 || this.isStrike();
}

Frame.prototype.addRoll = function(roll) {
  this.pins += roll;
  this.turns ++;
}

Frame.prototype.isStrike = function() {
  return (this.turns === 1 && this.pins === 10);
}

Frame.prototype.isSpare = function() {
  return (this.turns === 2 && this.pins === 10);
}

Frame.prototype.bonus = function() {
  if(this.isStrike()) { return [ this.rollIndex + 1, this.rollIndex + 2]; }
  if(this.isSpare()) { return [this.rollIndex + 2] }
}
