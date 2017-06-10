'use strict';

var Frame = function() {
  this._bowls = [null, null];
  this._currentBowl = 0
  this._remainingPins = 10
  this._score = 0
}

Frame.prototype.bowls = function() {
  return this._bowls;
}

Frame.prototype.bowl = function(pinsAmount) {
  if(this._remainingPins < pinsAmount) throw new Error('Error - cannot knock down more pins than are here! (' + this._remainingPins + ')');
  if(this._currentBowl === 2 || this._remainingPins === 0) throw new Error('Cannot bowl - this frame is complete');
  this._bowls[this._currentBowl] = pinsAmount;
  this._remainingPins -= pinsAmount;
  this._score += pinsAmount;
  this._currentBowl ++
}

Frame.prototype.isComplete = function() {
  return this._currentBowl === 2 || this.isStrike() ? true : false;
}

Frame.prototype.score = function() {
  return this._score;
}

Frame.prototype.isStrike = function() {
  return this._bowls[0] === 10 ? true : false;
}

Frame.prototype.isSpare = function() {
  return this._bowls[0] !== 10 && this._remainingPins === 0 ? true : false;
}
