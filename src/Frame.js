'use strict';

const MAX_ROUNDS = 2;

function Frame() {
  this._pins = [1,2,3,4,5,6,7,8,9,10];
  this._roundsPlayed = 0;
};

Frame.prototype.pinsKnockedOver = function(pinCount) {
  this._pins.splice(-pinCount, pinCount);
};

Frame.prototype.isStrikeOnFirstRound = function() {
  if (this._roundsPlayed === 1 && this._pins.length === 0) {
    return true;
  };
  return false;
};

Frame.prototype.play = function(pinCount) {
  if (this._roundsPlayed === 2) {
    throw new Error('Max number of rounds played');
  } else {
    this._roundsPlayed += 1;
    this.pinsKnockedOver(pinCount);
  }
}
