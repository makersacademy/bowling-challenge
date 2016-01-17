'use strict';

function Frame() {
this.INITIAL_STANDING_PINS = 10
this.INITIAL_KNOCKED_PINS = 0
this.INITIAL_FRAME_SCORE = 0
this.standingPins = this.INITIAL_STANDING_PINS
this.rollKnockedPins = this.INITIAL_KNOCKED_PINS
this.frameKnockedPins = this.INITIAL_KNOCKED_PINS
this.frameScore = this.INITIAL_FRAME_SCORE
}

Frame.prototype.getStandingPins = function() {
  return this.standingPins;
}

Frame.prototype.getRollKnockedPins = function() {
  return this.rollKnockedPins;
}

Frame.prototype.getFrameKnockedPins = function() {
  return this.frameKnockedPins;
}

Frame.prototype.getFrameScore = function() {
  return this.frameScore;
}

Frame.prototype.isValidNumber = function(knockedPins) {
  return Number.isInteger(knockedPins) &&
         knockedPins >= 0 &&
         knockedPins <= this.standingPins;
}

Frame.prototype.setRollKnockedPins = function(knockedPins) {
  this.rollKnockedPins = knockedPins;
}

Frame.prototype.setRollKnockedPins = function(knockedPins) {
  this.rollKnockedPins = knockedPins;
}

Frame.prototype.updateFrameKnockedPins = function() {
  this.frameKnockedPins += this.rollKnockedPins
}

Frame.prototype.updateStandingPins = function() {
  this.standingPins -= this.rollKnockedPins;
}

Frame.prototype.setFrameScore = function(knockedPins) {
  this.frameScore += knockedPins
}

Frame.prototype.roll = function(knockedPins) {
  var error = "Only valid numbers: no cheating, please!";
  if (!this.isValidNumber(knockedPins)) { throw new Error (error) }
  this.setRollKnockedPins(knockedPins)
  this.updateFrameKnockedPins()
  this.updateStandingPins()
  this.setFrameScore(knockedPins)
}
