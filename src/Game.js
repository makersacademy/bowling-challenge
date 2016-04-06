'use strict';

function Game(){
  this.frames = [];
  this.score = 0;
  // this.currentFrame = [];
}

Game.prototype.newFrame = function(frame){
  this.currentFrame = typeof frame !== 'undefined' ? frame : new Frame();
}

Game.prototype.saveFrame = function(){
  this.frames.push(this.currentFrame);
}

Game.prototype.bowl = function(pins){
  this.currentFrame.bowl(pins);
}
// evaluateScore
// getScore
