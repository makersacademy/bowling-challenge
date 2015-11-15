"use strict";

var Frame = function() {
  this.remainingPins = 10;
  this.frameHistory = [];
  this.gameHistory = [];
};

Frame.prototype.STARTING_PINS = 10;

Frame.prototype.STRIKE = 10;

Frame.prototype.recordPinsHit = function(num) {
  this.remainingPins -= num;
  this.frameHistory.push(num);
};

Frame.prototype.remainingPins = function() {
  return this.remainingPins;
};

Frame.prototype.isOver = function() {
  if(this.frameHistory.length === 2 || this.frameHistory[0] === this.STRIKE) {
    return true;
  }
};

Frame.prototype.totalScore = function() {
  var frameScore = 0;
  for (var i = 0; i < this.frameHistory.length; i++) {
    frameScore += this.frameHistory[i];
  }
  return frameScore;
  // return this.STARTING_PINS - this.remainingPins
  // return this.frameHistory.reduce((a, b) => a + b);
};

Frame.prototype.reset = function() {
  this.gameHistory.push(this.frameHistory);
  this.frameHistory = [];
};
