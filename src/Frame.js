function Frame(firstRoll) {
  this.firstRoll = firstRoll;
  this.secondRoll = null;
}

Frame.prototype.total = function() {
  return this.firstRoll + this.secondRoll;
}

Frame.prototype.addRoll = function(second_roll) {
  this.secondRoll = second_roll;
}

Frame.prototype.isOngoing = function() {
  return this.secondRoll === null && !this.isStrike();
}

Frame.prototype.isStrike = function() {
  return this.firstRoll === 10;
}

Frame.prototype.isSpare = function() {
  return !this.isStrike() && this.total() === 10;
}
