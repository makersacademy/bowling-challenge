"use strict";

function Frame() {
  this.roll = [];
  this._isTenthFrame = false;
};

Frame.prototype.addPins = function(pins) {
  this.roll.push(pins);
  if (this.roll.length === 3) { this._isTenthFrame = true };
  return this.roll;
};

Frame.prototype.score = function() {
  var score = 0;
  this.roll.forEach(function(element) {
    score += element;
  });
  return score;
};

Frame.prototype.scoreForBonus = function() {
  if (this._isTenthFrame) {
    return this.roll[0] + this.roll[1];
  } else { return this.score() }
};

Frame.prototype.bonus = function() {
  if (this.score() === 10) {
    if (this.roll.length === 2) {
      return "spare";
    } else { return "strike" };
  } else { return null }
};
