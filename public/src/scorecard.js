"use strict";

var Scorecard = function() {
  this.frames = [];
  this.rolls = [];
};

Scorecard.prototype.addFrame = function(frame) {
  this.frames.push(frame)
};

