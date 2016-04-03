"use strict";

function FrameLog() {
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
  this.currentFrame = new Frame();
  this.log.push(this.currentFrame);
  return this.currentFrame;
}
