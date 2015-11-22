function Frame() {
  this.standingPins = 10;
  this.rolls = [];

  Frame.prototype.updateFrame = function(pinsKnockedDown) {
    this.rolls.push(pinsKnockedDown);
    this.standingPins -= pinsKnockedDown;
  }

  Frame.prototype.isOver = function() {
    return this.rolls.length === 2 || this.isStrike() ? true : false;
  }

  Frame.prototype.isStrike = function() {
    if (this.rolls[0] === 10) return true;
  }
}
