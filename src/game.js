'use strict';

function Game() {
  this._score = 0;
}

Game.prototype.roll = function (pins) {
  if (typeof pins === 'number' && pins >= 0 && pins <= 10 ) {
    this._score += pins;
  } else {
    throw new Error('Invalid roll');
  }
};

Game.prototype.getScore = function () {
  return this._score;
};
