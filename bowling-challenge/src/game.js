'use strict'

function Game(){
  this.currentFrame = []
  this.frames = []
  this.ball1Pins = 0
  this.ball2Pins = 0
};

Game.prototype.ball1 = function(pins){
  this.currentFrame.push(pins);
  this.ball1Pins = pins
};

Game.prototype.ball2 = function(pins){
  this.currentFrame.push(pins);
  this.ball2Pins = pins
  this.frames.push(this.currentFrame);
  this.resetCurrentFrame()
};

Game.prototype.framesPlayed = function() {
  return this.frames.length;
};

Game.prototype.resetCurrentFrame = function () {
  this.currentFrame = [];
};
