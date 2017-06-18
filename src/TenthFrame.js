'use strict';

var TenthFrame = function() {
  this._bowls = [null, null, null]
  this._currentBowl = 0
  this._remainingPins = 10
  this._score = 0
}

TenthFrame.prototype.bowl = function(pinsAmount) {
  if(this.isComplete()) throw(new Error('Cannot bowl - this frame is complete'))
  this._bowls[this._currentBowl] = pinsAmount;
  this._currentBowl ++;
  this._score += pinsAmount;
  this._remainingPins -= pinsAmount;
}

TenthFrame.prototype.isComplete = function() {
  if(this._currentBowl < 2) return false;
  if(this._currentBowl < 3 && this._score === (10 || 20)) return false;
  return true;
}
