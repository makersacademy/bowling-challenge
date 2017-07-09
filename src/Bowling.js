'use strict';

var Bowling = function() {
  this.frameNumber = 1; 
  this.rollsCurrentFrame = 0;
  this.pinsRemaining = 10;
  this.rolls = [];
}

Bowling.prototype.getFrameNumber = function() {
  return this.frameNumber;
}

Bowling.prototype.nextFrame = function() {
  this.rollsCurrentFrame = 0;
  this.pinsRemaining = 10;
  this.frameNumber < 11 ? this.frameNumber += 1 : this.frameNumber = 11;
}

Bowling.prototype.roll = function(pins) {
  if (pins > this.pinsRemaining) {
    throw new Error('Invalid number of pins knocked over');
  } else {
    this.rollsCurrentFrame += 1;
    this.rolls.push(pins);
    this.pinsRemaining -= pins;
    this.isFrameComplete();
  }
}

Bowling.prototype.isFrameComplete = function() {
  if (this.rollsCurrentFrame === 2 || (this.pinsRemaining === 0)) {
    this.nextFrame();
  } else {
    return false;
  }
};
