"use strict";

function Scorecard() {
  this.full = false
  this.rolls = []
  this.frames = []
  this.total = 0
  this.MAXIMUM_NUMBER_OF_FRAMES = 10
  this.test = []
};

Scorecard.prototype.isFull = function() {
  if (this.frames.length >= this.MAXIMUM_NUMBER_OF_FRAMES) {
    return this.full = true
  } else {
    return this.full = false
  };
};

Scorecard.prototype.knockedPinsRoll = function(rollNumber) {
  if ( this.rolls.length === 0 ) {
    return 0 
  } else {
    return this.rolls[rollNumber - 1]
  }
};

Scorecard.prototype.recordRoll = function(knockedPins) {
  if ((this.rolls.length === 2) && (this.frames.length === 9)) {
    this.rolls.push(knockedPins)
    this.frames.push(this.rolls)
  } else if ((this.rolls.length === 2) && (this.frames.length != 9)) {
    this.frames.push(this.rolls)
    this.rolls = [];
    this.rolls.push(knockedPins)
  } else {
    this.rolls.push(knockedPins)
  };
};

Scorecard.prototype.scoreFrame = function(frameNumber) { 
  if (this.frames.length === 0 ) {
    return 0
  } else {
    var totalForOneFrame = this.frames[frameNumber - 1].reduce( function (a, b) {
    return a + b;
    });
    return totalForOneFrame
  };
};

Scorecard.prototype.scoreTotal = function() { 
  if (this.frames.length === 0 ) {
    return 0
  } else {
    for ( var i = 0; i <= this.frames.length; i++){
      this.total += this.scoreFrame(i + 1)
    };
    return this.total
  };
};

