"use strict";

function Frame(number) {
  this.rollIndex = number;
  this.frameIndex = number;
  this.pins = 0;
  this.rollCount = 0;
}

Frame.prototype.registerRoll = function(knockingDownPins) {
  this.pins += knockingDownPins;
  this.rollCount ++;
};

Frame.prototype.isOver = function() {
  if (this.isLastFrame()) {
    return this.isLastFrameCompleted();
  } else {
    return (this.rollCount === 2 || this.pins === 10);
  }
};

Frame.prototype.isStrike = function() {
  return (this.rollCount === 1 && this.pins === 10);
};

Frame.prototype.isSpare = function() {
  return (this.rollCount === 2 && this.pins === 10);
};

Frame.prototype.totalFrame = function() {
  return this.pins;
};

Frame.prototype.bonus = function() {
  if (this.isStrike()) {
    return [this.rollIndex + 1, this.rollIndex + 2];
  }
  if (this.isSpare()) {
    return [this.rollIndex + 1];
  }
};

Frame.prototype.isLastFrame = function() {
  return this.frameIndex === 9;
};

Frame.prototype.isLastFrameCompleted = function() {
  return ((this.rollCount === 2 && this.pins < 10) || (this.rollCount === 3));
};



