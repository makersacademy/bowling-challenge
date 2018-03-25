'use strict';

const MAXIMUM_SCORE = 10;

function Round(numberOfPins) {
  if (numberOfPins > MAXIMUM_SCORE) {
    throw new Error('Max number of pins exceeded');
  } else {
    this._score = numberOfPins;
  };
};

Round.prototype.isOver = function() {
  if (this._score === MAXIMUM_SCORE) {
    return true;
  };
  return false;
};
