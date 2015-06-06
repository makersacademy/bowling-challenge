function Frame() {
  this.standingPins = 10
}

Frame.prototype.registerScore = function(knockedDown) {
  this.standingPins -= knockedDown;
};

Frame.prototype.pinsLeft = function() {
  return this.standingPins
};