'use strict';

var Frame = function() {
  this._bowls = [null, null];
  this._currentBowl = 0
  this._remainingPins = 10
}

Frame.prototype.bowls = function() {
  return this._bowls;
}

Frame.prototype.bowl = function(pinsAmount) {
  if(this._remainingPins < pinsAmount) throw new Error('Error - cannot knock down more pins than are here! (' + this._remainingPins + ')')
  if(this._currentBowl === 2 || this._remainingPins === 0) throw new Error('Cannot bowl - this frame is complete')
  this._bowls[this._currentBowl] = pinsAmount;
  this._remainingPins -= pinsAmount
  this._currentBowl ++
}

Frame.prototype.isComplete = function() {
  return this._currentBowl === 2 ? true : false;
}
