function Frame() {
  this.rolls = []
  this.score = 0
  this.MAX_SCORE = 10
}

Frame.prototype.roll = function(pins) {
  this.rolls.push(pins);
}

Frame.prototype.calcScore = function() {
  this.score = this.rolls.reduce((a,b) => a+b);
  return this.score;
}

Frame.prototype.isComplete = function() {
  if (this.isStrike() === true) {
    return true
  }
  return this.rolls.length === 2;
}

Frame.prototype.resetPins = function() {
  this.rolls.length = 0;
}

Frame.prototype.isStrike = function() {
  return this.rolls[0] === this.MAX_SCORE;
}

Frame.prototype.isSpare = function() {
  return this.rolls[0] + this.rolls[1] === this.MAX_SCORE;
}
