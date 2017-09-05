'use strict';

var Frame = function () {
  this._scores = [0,0,0];
  this._frameScore = 0;
  this.roll = new Roll()
};

Frame.prototype.firstRoll = function(pins) {
  this._scores[0] = this.roll.makeRoll(pins);
  return this._scores[0];
};

Frame.prototype.secondRoll = function(pins) {
  var limit = 10 - this._scores[0]
  if (pins > limit) {
    throw new Error("Can not knock down more than 10 pins in a frame")
  } else {
    this._scores[1] = this.roll.makeRoll(pins);
  }
  return this._scores[1];
};

Frame.prototype.frameScore = function() {
  this._frameScore = this._scores.reduce(function(a, b) { return a + b; }, 0);
  return this._frameScore
}
