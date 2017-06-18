'use-strict';
// Frame is responsible for knocking down up to 10 pins

var Frame = function() {
  this.remainingPins = 10
  this.currentScore = 0
}

Frame.prototype.bowl = function() {
  var score = this.pinsKnockedDown(this.remainingPins);
  this.currentScore += score
  return score
}

Frame.prototype.pinsKnockedDown = function(pinsRemaining) {
  return Math.floor((Math.random() * pinsRemaining));
}
