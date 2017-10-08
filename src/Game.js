'use strict';

function Game() {
  this.completeFrames = [];
  this.framePoints = [];
}

Game.prototype.totalPoints = function() {
  return this.framePoints.reduce((a, b) => a + b, 0);
};

Game.prototype.previousFrame = function(){
  return this.completeFrames[this.completeFrames.length-1];
};

Game.prototype.play = function(frame) {
  if (frame.isComplete()) {
    this.framePoints.push(frame.totalPoints);
    this.completeFrames.push(frame);
  };
};
