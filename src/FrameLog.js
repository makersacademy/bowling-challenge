"use strict";

function FrameLog(frameFunction) {
  this.frameFunction = frameFunction;
  this.currentFrame;
  this.log = new Array();
}

FrameLog.prototype.record = function(pinScore) {
  this.getCurrentFrame().record(pinScore);
}

FrameLog.prototype.getCurrentFrame = function() {
  this.currentFrame = this.currentFrame || this.createNewFrame();

  if (this.currentFrame.isComplete()) {
    this.createNewFrame();
  }
  return this.currentFrame;
}

FrameLog.prototype.frames = function() {
  return this.log;
}

FrameLog.prototype.createNewFrame = function() {
  this.currentFrame = this.frameFunction || new Frame();
  this.log.push(this.currentFrame);
  return this.currentFrame;
}

FrameLog.prototype.score = function() {
  var scoreTotal = 0;

  for(var i in this.log) {
    for(var j in this.log[i].total()) {
      scoreTotal += this.log[i].total()[j];

      if(this.log[i].total()[0] == 10) {

      }
    }
  }
  return scoreTotal;
}
