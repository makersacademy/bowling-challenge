function Frame() {
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
