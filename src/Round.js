'use strict';

const MAX_SCORE = 10;
const PIN_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function Round() {
  this._pins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  this._score = 0;
}

Round.prototype.knockDownPins = function(pinsKnockedOver) {
  this._pins.splice(-pinsKnockedOver, pinsKnockedOver);
};

Round.prototype.score = function() {
  return MAX_SCORE - this._pins.length;
};

Round.prototype.reset = function() {
  this._pins = PIN_ARRAY;
};

Round.prototype.isStrike = function() {
  return (this.score() === MAX_SCORE) ? true : false;
}

// Does not like const to be in constructor
