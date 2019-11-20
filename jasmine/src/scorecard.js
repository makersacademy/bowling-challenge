'use strict';

function Scorecard() {
  this.frames = [new Frame()]
};

Scorecard.prototype.getFrames = function() {
  return this.frames;
};

Scorecard.prototype.lastFrame = function() {
  return this.frames[this.frames.length-1]
};

Scorecard.prototype.addRoll = function(rollScore) {
  if (!this.lastFrame().isComplete()) {
    this.lastFrame().addRoll(rollScore)
  } else if (this.frames.length < 10) {
    this.addFrame()
    this.addRoll(rollScore)
  } 
};

Scorecard.prototype.addFrame = function() {
  if (this.frames.length < 9) {
    this.frames.push(new Frame)
  } else if (this.frames.length === 9) {
    this.frames.push(new FinalFrame)
  }
};