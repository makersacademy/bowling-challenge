'use strict';

function Frame() {
  this.score = 0;
  this.DEFAULT_PINS = 10;
  this.pins = this.DEFAULT_PINS;
}

Frame.prototype.addToScore = function addToScore(pins) {
  this.score += pins;
};

Frame.prototype.bowl = function bowl(pins) {
  var pinsKnockedDown = Math.floor(Math.random() * (pins - 0 + 1) + 0);
  this.pins -= pinsKnockedDown;
  this.addToScore(pinsKnockedDown);
  return pinsKnockedDown;
};

Frame.prototype.resetFrame = function resetFrame() {
  this.pins = this.DEFAULT_PINS;
};
