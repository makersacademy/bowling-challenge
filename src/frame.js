'use-strict';
// Frame is responsible for knocking down up to 10 pins

var Frame = function() {
  this.remainingPins = 10
}

Frame.prototype.bowl = function() {
  return this.pinsKnockedDown(this.remainingPins);
}

Frame.prototype.pinsKnockedDown = function(pinsRemaining) {
  return Math.floor((Math.random() * pinsRemaining));
}
