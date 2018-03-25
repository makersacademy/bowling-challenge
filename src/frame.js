'use strict';

function Frame () {
  this._rolls = [];
  this._isSpare = false;
  this._isStrike = false;
  this._n
};

Frame.prototype.roll = function(number) {
  if (this.illegalRoll()) { return this.illegalRoll() }
  this._rolls.push(number);
  this.specials();
}

Frame.prototype.score = function() {
  return this._rolls.reduce(function (sum, x) { return sum + x }, 0);
}

Frame.prototype.isSpare = function() {
  return this._isSpare;
}

Frame.prototype.illegalRoll = function() {
  if (this._n != 10 && this._rolls.length === 2) {
    return 'Only two rolls per frame until frame 10!';
  }
  return false
}

Frame.prototype.specials = function() {
  if (this._rolls.length === 2 && this.score() === 10) { this._isSpare = true };
}
