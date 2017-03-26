"use strict";

function Frame() {
  this.currentFrame = [];
};

Frame.prototype.bowl = function() {
  var bowlOne = Math.floor((Math.random() * 10) + 1);
  var bowlTwo = bowlOne === 10 ? 0 : this.calculateBowlTwo(bowlOne);
  this.currentFrame.push(bowlOne, bowlTwo);
}

Frame.prototype.calculateBowlTwo = function(bowlOne) {
  var remainingPins = 10 - bowlOne;
  return Math.round((Math.random() * remainingPins));
}

Frame.prototype.clearFrame = function() {
  this.currentFrame = [];
}
