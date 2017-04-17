"use strict";

function Frame() {
  this._pins = 10;
  this._bowls = []
};

Frame.prototype.bowl = function() {
  var fallenPins = Math.floor((Math.random() * 11));
  this._pins = this._pins - (fallenPins);
  this._bowls.push(fallenPins);
};
