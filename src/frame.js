function Frame() {
  this.rolls = []
}

Frame.prototype.roll = function(pins) {
  this.rolls.push(pins);
}

Frame.prototype.calcScore = function() {
  return this.rolls.reduce((a,b) => a+b);
}
