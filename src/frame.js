function Frame() {
  this.standingPins = 10
  this.bowlsLeft = 2
}

Frame.prototype.registerScore = function(knockedDown, bowlsLeft) {
  this.standingPins -= knockedDown;
  this.bowlsLeft -= 1;
};

Frame.prototype.pinsLeft = function() {
  return this.standingPins
};

Frame.prototype.isOver = function() {
    return (this.bowlsLeft === 0);
};