'use strict';

function Frame() {
this.INITIAL_PLAYED_ROLLS = 0;
this.INITIAL_STANDING_PINS = 10;
this.INITIAL_KNOCKED_PINS = 0;
this.INITIAL_FRAME_SCORE = 0;
this.playedRolls = this.INITIAL_PLAYED_ROLLS;
this.standingPins = this.INITIAL_STANDING_PINS;
this.rollKnockedPins = this.INITIAL_KNOCKED_PINS;
this.frameKnockedPins = this.INITIAL_KNOCKED_PINS;
this.frameScore = this.INITIAL_FRAME_SCORE;
}

var noMoreRolls = 'Only 2 rolls per frame: no cheating, please!';
var invalidValue = 'Only valid numbers: no cheating, please!';

Frame.prototype.getPlayedRolls = function() {
  return this.playedRolls;
};

Frame.prototype.getStandingPins = function() {
  return this.standingPins;
};

Frame.prototype.getRollKnockedPins = function() {
  return this.rollKnockedPins;
};

Frame.prototype.getFrameKnockedPins = function() {
  return this.frameKnockedPins;
};

Frame.prototype.getFrameScore = function() {
  return this.frameScore;
};

Frame.prototype.isValidNumber = function(knockedPins) {
  return typeof knockedPins === 'number' &&
         knockedPins % 1 === 0 &&
         knockedPins >= 0 &&
         knockedPins <= this.standingPins;
};

Frame.prototype.addPlayedRoll = function() {
  this.playedRolls += 1;
};

Frame.prototype.setRollKnockedPins = function(knockedPins) {
  this.rollKnockedPins = knockedPins;
};

Frame.prototype.setRollKnockedPins = function(knockedPins) {
  this.rollKnockedPins = knockedPins;
};

Frame.prototype.updateFrameKnockedPins = function() {
  this.frameKnockedPins += this.rollKnockedPins;
};

Frame.prototype.updateStandingPins = function() {
  this.standingPins -= this.rollKnockedPins;
};

Frame.prototype.setFrameScore = function(knockedPins) {
  this.frameScore += knockedPins;
};

Frame.prototype.roll = function(knockedPins) {
  if (this.playedRolls >= 2) { throw new Error (noMoreRolls) }
  if (!this.isValidNumber(knockedPins)) { throw new Error (invalidValue) }
  this.setRollKnockedPins(knockedPins);
  this.updateFrameKnockedPins();
  this.updateStandingPins();
  this.setFrameScore(knockedPins);
  this.addPlayedRoll();
};
