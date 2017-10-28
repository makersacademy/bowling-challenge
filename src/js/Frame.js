'use strict';

function Frame() {
  // this._score = [
  this._pins = 10;
  this._rolls = [];
};

Frame.prototype.score = function () {
  0
};

Frame.prototype.pinsRemaining = function () {
  return this._pins;
};

Frame.prototype.roll = function (pins) {
  if (pins > this.pinsRemaining()) throw new Error('number to knock down cannot be greater than the number of pins remaning')
  if (this.isComplete()) throw new Error('cannot roll more than twice for a frame');
  this._pins = (this._pins - pins);
  this._rolls.push(pins);
};

Frame.prototype.rollNumber = function () {
  return this._rolls.length + 1;
};

Frame.prototype.isComplete = function () {
  return this._rolls.length === 2 || this.pinsRemaining() === 0;
};
