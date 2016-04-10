'use strict';

function Game(){
  this.frames = [];
  this.score = 0;
  this.newFrame();
}

Game.prototype.newFrame = function(frame){
  this.currentFrame = typeof frame !== 'undefined' ? frame : new Frame();
}

Game.prototype.saveFrame = function(){
  this.frames.push(this.currentFrame);
}

Game.prototype.bowl = function(pins){
  this.currentFrame.bowl(pins);
  if (this.currentFrame.frameComplete === true) {
    this.saveFrame();
    this.newFrame();
  }
}
Game.prototype.evaluateScore = function() {
  var result = 0
  for(var i=0; i < this.frames.length ; i++){
    result += this.frames[i].getScore();
  }
  this.score = result;
}
