'use strict';

var Frame = function(id) {
  this._id = id;
  this._firstRoll = 0;
  this._secondRoll = 0;
  this._bonus = 'none';
};

Frame.prototype.getID = function() {
  return this._id;
};

Frame.prototype.setFirstRoll = function(pins) {
  this._checkPinsExceeded(pins);
  this._firstRoll = pins;
  if (this._firstRoll === 10) this._bonus = 'strike';
};

Frame.prototype.setSecondRoll = function(pins) {
  this._checkPinsExceeded(pins);
  this._secondRoll = pins;
  if (this._firstRoll + this._secondRoll === 10) this._bonus = 'spare';
};

Frame.prototype.getFirstRoll = function() {
  return this._firstRoll;
};

Frame.prototype.getSecondRoll = function() {
  return this._secondRoll;
};

Frame.prototype._checkPinsExceeded = function(pins) {
  if (this._firstRoll + pins > 10 ) throw new Error('Pins cannot exceed a maximum of 10');
};

Frame.prototype.isAStrike = function() {
  return this._bonus === 'strike' ? true : false;
};

Frame.prototype.isASpare = function() {
  return this._bonus === 'spare' ? true : false;
};
