function Pin (initialPins) {
  'use strict'
  this._initialPinsThere = initialPins || 10;
  this._pinsThere = this._initialPinsThere
}

Pin.prototype.pinsHit = function (number) {
  if (number > this._pinsThere) {throw "cannot exceed pin number"; }
  this._pinsThere--; 
  return number;
};

Pin.prototype.countPinsThere = function () {
  return this._pinsThere;
};
