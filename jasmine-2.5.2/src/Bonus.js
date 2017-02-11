'use strict';

function Bonus() {
  this._strikeOrSpare = "";
  this._nextMultiplier = 0;
  this._nextButOneMultiplier = 0;
};
Bonus.prototype.getStrikeOrSpare = function() {return this._strikeOrSpare;};
Bonus.prototype.getNextMultiplier = function() {return this._nextMultiplier;};
Bonus.prototype.getNextButOneMultiplier = function() {return this._nextButOneMultiplier;};

Bonus.prototype.addFutureBonuses = function(roll) {
    (roll == 1) ? this.record("Strike") : this.record("Spare");
};
Bonus.prototype.record = function(type) {
  this._strikeOrSpare = type;
  this._nextMultiplier = this._nextButOneMultiplier + 1;
  (type == "Strike") ? this._nextButOneMultiplier = 1 : this._nextButOneMultiplier = 0;
};

Bonus.prototype.resetBonuses = function() {
  this._nextMultiplier = this._nextButOneMultiplier;
  this._nextButOneMultiplier = 0;
};
