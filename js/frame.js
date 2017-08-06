'use strict';

function Frame() {
  this.MAX_PINS = 10;
  this.complete = false;
  this.rollsCount = 0;
  this.pinsKnocked = 0;
};

Frame.prototype.isComplete = function() {
  return this.complete;
};

Frame.prototype.getPinsKnocked = function() {
  return this.pinsKnocked;
};

Frame.prototype.roll = function(pins) {
  this.rollsCount += 1;
  this._increaseScoreBy(pins);
  this._CompleteFrameIfRequired();
};


// Private implementation

Frame.prototype._increaseScoreBy = function(n) {
  this.pinsKnocked += n;
};

Frame.prototype._CompleteFrameIfRequired = function() {
  if(this.getPinsKnocked() === 10 || this.rollsCount === 2) { this.complete = true };
};
