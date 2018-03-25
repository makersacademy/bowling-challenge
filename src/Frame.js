'use strict';

const MAX_ROUNDS = 2;
const MAX_PIN_COUNT = 10

function Frame() {
  this._pins = [1,2,3,4,5,6,7,8,9,10];
  this._roundsPlayed = 0;
  this._score = 0;
  this._bonusFrame = false;
};

Frame.prototype.pinsKnockedOver = function(pinCount) {
  if (pinCount > this._pins.length) {
    throw new Error('Number of pins knocked over exceeds number of pins in frame');
  };
  this._pins.splice(-pinCount, pinCount);
};

Frame.prototype.isStrikeOnFirstRound = function() {
  if (this._roundsPlayed === 1 && this._pins.length === 0) {
    return true;
  };
  return false;
};

Frame.prototype.play = function(pinCount) {
  if (this._roundsPlayed === MAX_ROUNDS) {
    throw new Error('Max number of rounds played');
  } else {
    this.pinsKnockedOver(pinCount);
    this.isBonusFrame();
    this._roundsPlayed += 1;
  };
};

Frame.prototype.score = function() {
  return this._score = MAX_PIN_COUNT - this._pins.length
};

Frame.prototype.isBonusFrame = function() {
  if (this._pins.length === 0) {
    return this._bonusFrame = true;
  }
};
