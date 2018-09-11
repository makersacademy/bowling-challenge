"use strict";

function Frame() {
  this.roll = [];
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

Frame.prototype.bonus = function() {
  if (this.score() === 10) {
    if (this.roll.length === 2) {
      return "spare";
    } else { return "strike" };
  } else { return null }
};
