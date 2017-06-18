'use strict';

var TenthFrame = function() {
  this._bowls = [null, null, null]
  this._currentBowl = 0
}

TenthFrame.prototype.bowl = function(pinsAmount) {
  this._bowls[this._currentBowl] = pinsAmount;
  this._currentBowl ++;
}
