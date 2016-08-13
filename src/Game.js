'use strict';

function Game(){

  this.DEFAULT_SCORE = 0;
  this.score = this.DEFAULT_SCORE;
  this.MAX_FRAMES = 10;
  this.frames = [];
};

Game.prototype.getScore = function() {
  return this.score;
};

Game.prototype.getFrameCounter = function() {
  this.frameCounter = this.frames.length;
  return this.frameCounter;
};

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame.frameScore);
};
