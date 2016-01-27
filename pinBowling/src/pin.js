function Pin (frameRules, initialPins) {
  'use strict'
  this._initialPinsThere = initialPins || 10;
  this._pinsThere = this._initialPinsThere;
  this.frame = frameRules || new Frame ();
}

Pin.prototype.pinsHit = function (number) {
  if (number > this._pinsThere) {throw "cannot exceed pin number"; }
  this._pinsThere -= number;
  if(number < this._initialPinsThere) {this.frame.upFrameOrRound(this);}
  else {this.frame.upFrame(this);}
  return number;
};

Pin.prototype.reset = function (first_argument) {
  this._pinsThere = this._initialPinsThere;
};
