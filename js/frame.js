'use strict';

function Frame(maxRolls) {
  this.maxRolls = maxRolls;
  this.MAX_PINS = 10;
  this.rolls = [];
  this.complete = false;
  this.strike = false;
  this.spare = false;
  this.isLast = false;
};

Frame.prototype.isComplete = function() {
  return this.complete;
};

Frame.prototype.getScore = function() {
  var sum = this.rolls.reduce((a, b) => a + b, 0);
  return sum;
};

Frame.prototype.roll = function(pins) {
  this._addRoll(pins);
  this._completeFrameIfRequired();
  this._registerBonusIfRequired();
};

Frame.prototype.hasStrike = function() {
  return this.strike;
};

Frame.prototype.hasSpare = function() {
  return this.spare;
};

Frame.prototype.addBonus = function(nextFrame, nextNextFrame) {
  if(this.hasSpare()) { this._increaseKnockedPins(nextFrame.getScore())};
  if(this.hasStrike()) {
    this._increaseKnockedPins(nextFrame.getScore());
    this._increaseKnockedPins(nextNextFrame.getScore());
  };
};

Frame.prototype.makeLast = function() {
  this.isLast = true;
};

Frame.prototype.getRoll = function(n) {
  return this.rolls[n];
};

// Private implementation

Frame.prototype._addRoll = function(pins) {
  this.rolls.push(pins);
};

Frame.prototype._registerBonusIfRequired = function() {
  if(this.getScore() === this.MAX_PINS) {
    if(this.rolls.length === 1) {
      this.strike = true;
    } else {
      this.spare = true;
    };
  };
};

Frame.prototype._completeFrameIfRequired = function() {
  if(this.getScore() === this.MAX_PINS || this.rolls.length === this.maxRolls) { this.complete = true };
};
