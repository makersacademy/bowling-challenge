function Frame() {
  this.fullRack = 10
  this.remainingPins = 10
  this.bowlsRecorded = 0
}

Frame.prototype.registerScore = function(knockedDown, bowlsLeft) {
  this.remainingPins -= knockedDown;
  this.bowlsRecorded += 1;
};

Frame.prototype.pinsLeft = function() {
  return this.remainingPins
};

Frame.prototype.isOver = function() {
  return (this.bowlsRecorded === 2 || this.remainingPins === 0 );
};

Frame.prototype.total = function() {
  return this.fullRack - this.remainingPins
};