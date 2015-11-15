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
  if(this.frameScore.length === 2 || this.frameScore[0] === 10) {
    return true;
  }
};
