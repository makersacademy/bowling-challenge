'use strict';

function Bonus() {
  this._strikeOrSpare = "";
  this._extra = 0;
  this._extraNext = 0;
};
Bonus.prototype.getStrikeOrSpare = function() {return this._strikeOrSpare;};
Bonus.prototype.getExtra = function() {return this._extra;};
Bonus.prototype.getExtraNext = function() {return this._extraNext;};
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
