'use strict';

var TenthFrame = function() {
  this._bowls = [null, null, null]
}

TenthFrame.prototype.bowl = function(pinsAmount) {
  this._bowls[0] = pinsAmount;
}
