'use strict';

function Frame() {
  // this._score = [
  this._pins = 10;
};

Frame.prototype.score = function () {
  0
};

Frame.prototype.pinsRemaining = function () {
  return this._pins;
};

Frame.prototype.roll = function (pins) {
  return this._pins = (this._pins - pins);
};
