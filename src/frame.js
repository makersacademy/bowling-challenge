function Frame() {
  this.rolls = []
}

Frame.prototype.roll = function(pins) {
  this.rolls.push(pins);
}

Frame.prototype.calcScore = function() {
  return this.rolls.reduce((a,b) => a+b);
}

Frame.prototype.isComplete = function() {
  return this.rolls.length === 2;
}

Frame.prototype.resetPins = function() {
  this.rolls.length = 0;
}
