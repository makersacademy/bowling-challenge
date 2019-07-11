"use strict";

var Scorecard = function() {
  this.frames = [];
  this.rolls = [];
  this.totalScore = 0; 
};

Scorecard.prototype.addFrame = function(frame) {
  this.frames.push(frame)
};

Scorecard.prototype.addRoll = function(pins) {
  this.rolls.push(pins)
  this._addScore(pins)
};

Scorecard.prototype._addScore = function(pins) {
  this.totalScore += pins;
}

