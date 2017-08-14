'use strict';

var Frame = function(id) {
  this._id = id || '';
  this._firstRoll = 0;
  this._secondRoll = 0;
  this._firstExtraRoll = 0;
  this._secondExtraRoll = 0;
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

Frame.prototype.setFirstExtraRoll = function(pins) {
  pins = pins || 0;
  this._checkBonusPinsExceeded(pins);
  this._checkBonusFinalFrame();
  this._firstExtraRoll = pins;
};

Frame.prototype.setSecondExtraRoll = function(pins) {
  pins = pins || 0;
  this._checkBonusPinsExceeded(pins);
  this._checkStrikeFinalFrame();
  this._secondExtraRoll = pins;
};

Frame.prototype.getFirstRoll = function() {
  return this._firstRoll;
};

Frame.prototype.getSecondRoll = function() {
  return this._secondRoll;
};

Frame.prototype.getFirstExtraRoll = function() {
  return this._firstExtraRoll;
};

Frame.prototype.getSecondExtraRoll = function() {
  return this._secondExtraRoll;
};

Frame.prototype._checkPinsExceeded = function(pins) {
  pins = pins || 0;
  if (this._firstRoll + pins > 10 ) throw new Error('Pins cannot exceed a maximum of 10');
};

Frame.prototype._checkBonusPinsExceeded = function(pins) {
  pins = pins || 0;
  if (this._firstExtraRoll + pins > 10 ) throw new Error('Pins cannot exceed a maximum of 10');
};

Frame.prototype.isAStrike = function() {
  return this._bonus === 'strike' ? true : false;
};

Frame.prototype.isASpare = function() {
  return this._bonus === 'spare' ? true : false;
};

Frame.prototype.isOpen = function() {
  return this._bonus === 'none' ? true : false;
};

Frame.prototype.calculateScore = function(previousTotal, bonus) {
  if (previousTotal === undefined) throw new Error('Previous total required');
  if (bonus === undefined && (this.isAStrike() || this.isASpare())) throw new Error('Bonus required');
  bonus = bonus || 0;
  return this._score = previousTotal + this._firstRoll + this._secondRoll + bonus;
};

Frame.prototype.getScore = function() {
  return this._score;
};

Frame.prototype._checkBonusFinalFrame = function () {
  if(this._id !== 10) throw new Error('Extra first roll only available for final frame');
  if(this.isOpen()) throw new Error('Extra first roll only available for bonus final frame');
};

Frame.prototype._checkStrikeFinalFrame = function () {
  if(this._id !== 10) throw new Error('Extra second roll only available for final frame');
  if(!this.isAStrike()) throw new Error('Extra second roll only available for strike final frame');
};
