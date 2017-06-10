'use strict';

var Frame = function() {
  this._bowls = [null, null];
  this._currentBowl = 0
}

Frame.prototype.bowls = function() {
  return this._bowls;
}

Frame.prototype.bowl = function(pinsAmount) {
  this._bowls[this._currentBowl] = pinsAmount;
  this._currentBowl ++
}
