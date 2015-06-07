function Frame() {
  this.standingPins = 10
  this.bowlsRecorded = 0
}

Frame.prototype.registerScore = function(knockedDown, bowlsLeft) {
  this.standingPins -= knockedDown;
  this.bowlsRecorded += 1;
};

Frame.prototype.pinsLeft = function() {
  return this.standingPins
};

Frame.prototype.isOver = function() {
    return (this.bowlsRecorded === 2 || this.standingPins === 0 );
};