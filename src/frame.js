'use strict';

function Frame() {
  this.score = 0;
  this.DEFAULT_PINS = 10;
  this.pins = this.DEFAULT_PINS;
  this.timesBowled = 0;
  this.MAX_TIMES_BOWLED = 2;
}

Frame.prototype.addToScore = function addToScore(pins) {
  this.score += pins;
};

Frame.prototype.bowl = function bowl(pins) {
  var pinsKnockedDown = Math.floor(Math.random() * (this.pins - 0 + 1) + 0);
  this.pins -= pinsKnockedDown;
  this.addToScore(pinsKnockedDown);
  this.timesBowled++;
  return pinsKnockedDown;
};

Frame.prototype.resetFrame = function resetFrame() {
  this.pins = this.DEFAULT_PINS;
};

Frame.prototype.isFirstBowl = function isFirstBowl() {
  return this.timesBowled === 0;
};
