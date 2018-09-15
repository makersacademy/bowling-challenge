"use strict";

function Frame(isTenth) {
  this.roll = [];
  this._isTenthFrame = isTenth;
};

Frame.prototype.addPins = function(pins) {
  this.roll.push(pins);
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
    return this.roll[0];
  } else { return this.score() }
};

Frame.prototype.bonusForTenth = function() {
  if (this.roll.length === 1) { // edge case when incrementing 10th frame
    return this.roll[0];
  } else { return this.roll[0] + this.roll[1] };
}

Frame.prototype.bonus = function() {
  if (this.score() === 10) {
    if (this.roll.length === 2) {
      return "spare";
    } else { return "strike" };
  } else { return null }
};
