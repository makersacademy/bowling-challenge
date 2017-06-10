'use strict';

var Frame = function() {
  this._bowls = [null, null];
  this._currentBowl = 0
}

Frame.prototype.bowls = function() {
  return this._bowls;
}

Frame.prototype.bowl = function(pinsAmount) {
  if(this._currentBowl === 2) throw new Error('Cannot bowl - this frame is complete')
  this._bowls[this._currentBowl] = pinsAmount;
  this._currentBowl ++
}
