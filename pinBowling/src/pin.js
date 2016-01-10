function Pin (frameRules, initialPins) {
  'use strict'
  this._initialPinsThere = initialPins || 10;
  this._pinsThere = this._initialPinsThere;
  this.frame = frameRules || new Frame ();
}

Pin.prototype.pinsHit = function (number) {
  if (number > this._pinsThere) {throw "cannot exceed pin number"; }
  this.frame.upFrameOrRound();
  this._pinsThere--;
  return number;
};

Pin.prototype.countPinsThere = function () {
  return this._pinsThere;
};
