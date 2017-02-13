"use strict";

function Game () {
  this.frames = [];
  this.rolls = [];
}

Game.prototype.addRoll = function(knockingDownPins) {
  this.rolls.push(knockingDownPins);
};

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame);
};

Game.prototype.totalScore = function() {
  var runningTotal = 0;
  for (var i = 0; i < this.frames.length; i++) {
    runningTotal += this.frames[i].total();
  }
  return runningTotal;
};