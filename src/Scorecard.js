"use strict";

var Scorecard = function() {
  this.frames = [];
};

Scorecard.prototype.addFrame = function() {
  this.frames.push([]);
};

Scorecard.prototype.getFrames = function() {
  return this.frames;
};
