'use strict'

function Game(){
  this.currentFrame = []
  this.frames = []
  this.frameTotals = []
};

Game.prototype.ball1 = function(pins){
  this.currentFrame.push(pins);
};

Game.prototype.ball2 = function(pins){
  this.currentFrame.push(pins);
  this.frames.push(this.currentFrame);
  this.resetCurrentFrame()
};

Game.prototype.framesPlayed = function() {
  return this.frames.length;
};

Game.prototype.resetCurrentFrame = function () {
  this.currentFrame = [];
};
