function Frame() {
  this.standingPins = 10;
  this.rolls = [];
  this.isLastFrame = false;
}

Frame.prototype.updateFrame = function(pinsKnockedDown) {
  this.rolls.push(pinsKnockedDown);
  this.standingPins -= pinsKnockedDown;
  this.score += pinsKnockedDown;
}

Frame.prototype.isOver = function() {
  if (this.isLastFrame) {
    return this.isLastFrameOver()
  }
  return (this.rolls.length === 2) || (this.isStrike()) ? true : false;
}

Frame.prototype.isStrike = function() {
  return (this.rolls[0] === 10);
}

Frame.prototype.isSpare = function() {
  return (this.rolls[0] + this.rolls[1] === 10) ? true : false;
}

Frame.prototype.isLastFrameOver = function() {
  return (this.rolls.length === 3) || (this.standingPins > 0 && this.rolls.length === 2);
}
