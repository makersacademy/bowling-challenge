'use strict';

function Game () {
  this.frames = [];
}

Game.prototype.getCurrentFrame = function() {
  return this.frames;
};

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame);
};
