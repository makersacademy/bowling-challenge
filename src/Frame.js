'use strict';

function Frame () {
  this.rolls = []
  this._score = 0;
};

Frame.prototype.getCurrentScore = function () {
//   var frameScore
//   frameScore = this.rolls.reduce((acc, val) => {
//   return acc + val;
// });
  return this._score
};

Frame.prototype.knockedDown = function (pins) {
  this.rolls.push(pins)
  this._score += pins
};
