'use strict';

function Frame() {
  // this._score = [
  this._pins = 10;
  this._bowls = [];
};

Frame.prototype.bowls = function () {
  return this._bowls;
};

Frame.prototype.pinsRemaining = function () {
  return this._pins;
};

Frame.prototype.bowl = function (pins) {
  if (pins > this.pinsRemaining()) throw new Error('number to knock down cannot be greater than the number of pins remaning')
  if (this.isComplete()) throw new Error('cannot bowl more than twice for a frame');
  this._pins = (this._pins - pins);
  this._bowls.push(pins);
};

Frame.prototype.bowlNumber = function () {
  return this._bowls.length + 1;
};

Frame.prototype.isComplete = function () {
  return this._bowls.length === 2 || this.pinsRemaining() === 0;
};

Frame.prototype.isPendingBonus = function () {
  return this.pinsRemaining() === 0 && this._bowls.length < 3;
};

Frame.prototype.addBonus = function (bonus) {
  if (!this.isPendingBonus()) throw new Error('Bonus cannot be added for this frame');
  this._bowls.push(bonus)
};
