'use strict';

var Frame = function() {
  this._bowls = [null, null];
}

Frame.prototype.bowls = function() {
  return this._bowls;
}

Frame.prototype.bowl = function(pinsAmount) {
  this._bowls[0] = pinsAmount;
}
