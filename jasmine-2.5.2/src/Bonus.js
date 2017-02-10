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
}




// Bonus.prototype.updateBonus = function() {
//   this._bonus = this.getHits() * this.getExtra();
// }
// Bonus.prototype.updateStrikeOrSpare = function() {
//   if (this.getRoll() == 1) {
//     this._strikeOrSpare = "Strike";
//   } else {
//     this._strikeOrSpare = "Spare";
//   }
// }
// Bonus.prototype.updateExtras = function() {
//   this.removeSpentExtras();
//   this.addNewExtras();
// };
// Bonus.prototype.removeSpentExtras = function() {
//   this._extra = this._extraNext;
//   this._extraNext = 0;
// }
// Bonus.prototype.addNewExtras = function() {
//   if (this.getStrikeOrSpare() == "Strike") {
//     this._extra++;
//     this._extraNext++;
//   } else if (this.getStrikeOrSpare() == "Spare") {
//     this._extra++;
//   }
// }
