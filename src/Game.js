"use strict";

function Game(frameObject) {
  this.frameObject = frameObject;
  this.currentFrame;
  this.log = new Array();
}

Game.prototype.record = function(pinScore) {
  this.getCurrentFrame().record(pinScore);
}

Game.prototype.getCurrentFrame = function() {
  this.currentFrame = this.currentFrame || this.createNewFrame();

  if (this.currentFrame.isComplete()) {
    this.createNewFrame();
  }
  return this.currentFrame;
}

Game.prototype.frames = function() {
  return this.log;
}

Game.prototype.createNewFrame = function() {
  this.currentFrame = this.frameObject || new Frame();
  this.log.push(this.currentFrame);
  return this.currentFrame;
}

Game.prototype.score = function() {
  var scoreTotal = 0;

  for(var i in this.log) {
    for(var j in this.log[i].total()) {
      scoreTotal += this.log[i].total()[j];

      if(this.log[i].total()[0] === 10) {

      }
    }
  }
  return scoreTotal;
}
