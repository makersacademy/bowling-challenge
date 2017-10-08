'use strict';

function Bowling() {
  this.score = 0;
  this.frames = [];
}

Bowling.prototype.getScore = function() {
  return this.score;
}

Bowling.prototype.getFrames = function() {
  return this.frames;
}

Bowling.prototype.playFrame = function(frame) {
  this.frames.push(frame);
}
