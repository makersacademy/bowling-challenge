'use strict';

function Bonus() {
  this._strikeOrSpare = "";
  this._nextMultiplier = 0;
  this._nextButOneMultiplier = 0;
};
Bonus.prototype.getStrikeOrSpare = function() {return this._strikeOrSpare;};
Bonus.prototype.getNextMultiplier = function() {return this._nextMultiplier;};
Bonus.prototype.getNextButOneMultiplier = function() {return this._nextButOneMultiplier;};


Bonus.prototype.useBonuses = function() { // "use up" after applying to current row; shift along one space
  this._nextMultiplier = this._nextButOneMultiplier;
  this._nextButOneMultiplier = 0;
  this._strikeOrSpare = "";
};

Bonus.prototype.recordStrikeOrSpare = function(roll) { // add to next in either case and also to nextbut1 if strike
    (roll == 1) ? this.record("Strike") : this.record("Spare");
};
Bonus.prototype.record = function(type) {
  this._strikeOrSpare = type;
  this._nextMultiplier++;
  if (type == "Strike") { this._nextButOneMultiplier++;};
};
