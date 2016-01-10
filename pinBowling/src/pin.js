function Pin (frameRules, initialPins) {
  'use strict'
  this._initialPinsThere = initialPins || 10;
  this._pinsThere = this._initialPinsThere;
  this.frame = frameRules || new Frame ();
}

Pin.prototype.pinsHit = function (number) {
  if (number > this._pinsThere) {throw "cannot exceed pin number"; }
  if(number < this._initialPinsThere) {this.frame.upFrameOrRound();}
  else {this.frame.upFrame();}
  this._pinsThere--;
  return number;
};

Pin.prototype.countPinsThere = function () {
  return this._pinsThere;
};

Pin.prototype.reset = function (first_argument) {
  this._pinsThere = this._initialPinsThere;
};
