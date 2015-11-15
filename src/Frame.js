"use strict";

var Frame = function() {
  this.remainingPins = 10;
  this.frameScore = [];
};

Frame.prototype.recordPinsHit = function(num) {
  this.remainingPins -= num;
  this.frameScore.push(num);
};

Frame.prototype.remainingPins = function() {
  return this.remainingPins;
};

Frame.prototype.isOver = function() {
  return true;
};
