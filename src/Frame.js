'use strict';

function Frame() {
  this.frameScore = 0;
  this.DEFAULT_PIN_COUNT = 10;
  this.pinCount = this.DEFAULT_PIN_COUNT;
  this.bonusScore = 0;
  this.rolls = [];
};

Frame.prototype.getFrameScore = function() {
  return this.frameScore;
};

Frame.prototype.getRollCounter = function() {
  this.rollCounter = this.rolls.length;
  return this.rollCounter;
};

Frame.prototype.getPinCount = function() {
  return this.pinCount;
};

Frame.prototype.getBonusScore = function() {
  return this.bonusScore;
};

Frame.prototype.roll = function(numberOfPins) {
  this.rollScore = numberOfPins;
  this.pinCount -= numberOfPins;
  this.addRollScore();
};

Frame.prototype.addRollScore = function() {
  this.rolls.push(this.rollScore);
};

Frame.prototype.isStrike = function() {
  if ((this.getRollCounter() === 1) && (this.getPinCount() === 0)) {
    return true;
  };
};

Frame.prototype.isSpare = function() {
  if ((this.getRollCounter() === 2) && (this.getPinCount() === 0)) {
    return true;
  };
};
