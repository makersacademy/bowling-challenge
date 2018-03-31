'use strict'

function Game(frameClass){
  this.frameClass = frameClass;
  this.frames = [];
  this.currentFrame = 1;
};

Game.prototype.createEmptyFrames = function(){
  for(var i = 1; i <= 10; i++)
  this.frames.push(new this.frameClass(i));
};

Game.prototype.getFrames = function(){
  return this.frames;
};

Game.prototype.getCurrentFrame = function(){
  return this.currentFrame;
};
