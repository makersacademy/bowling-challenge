function Frame() {
  this.rolls = [];
}

Frame.prototype.roll = function (numPins) {
  this.rolls.push(numPins);
}

Frame.prototype.getScore = function() {
  return this.rolls.reduce(a, b) => a + b);
}
