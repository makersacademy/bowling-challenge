'use strict';

var Frame = function(id) {
  this._id = id || '';
  this._firstRoll = 0;
  this._secondRoll = 0;
  this._bonus = 'none';
  this._score = 0;
};

Frame.prototype.getID = function() {
  return this._id;
};

Frame.prototype.setFirstRoll = function(pins) {
  pins = pins || 0;
  this._checkPinsExceeded(pins);
  this._firstRoll = pins;
  this._bonus = (this._firstRoll === 10) ? 'strike' : 'none';
};

Frame.prototype.setSecondRoll = function(pins) {
  pins = pins || 0;
  this._checkPinsExceeded(pins);
  this._secondRoll = pins;
  this._bonus = (this._firstRoll + this._secondRoll === 10) ? 'spare' : 'none';
};

Frame.prototype.getFirstRoll = function() {
  return this._firstRoll;
};

Frame.prototype.getSecondRoll = function() {
  return this._secondRoll;
};

Frame.prototype._checkPinsExceeded = function(pins) {
  pins = pins || 0;
  if (this._firstRoll + pins > 10 ) throw new Error('Pins cannot exceed a maximum of 10');
};

Frame.prototype.isAStrike = function() {
  return this._bonus === 'strike' ? true : false;
};

Frame.prototype.isASpare = function() {
  return this._bonus === 'spare' ? true : false;
};

Frame.prototype.calculateScore = function(previousTotal, bonus) {
  if (previousTotal === undefined) throw new Error('Previous total required');
  if (bonus === undefined && (this.isAStrike() || this.isASpare())) throw new Error('Bonus required');
  bonus = bonus || 0;
  this._score = previousTotal + this._firstRoll + this._secondRoll + bonus;
};

Frame.prototype.getScore = function() {
  return this._score;
};
