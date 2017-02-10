'use strict';

function Bonus() {
  this._strikeOrSpare = "";
  this._next = 0;
  this._nextButOne = 0;
};
Bonus.prototype.getStrikeOrSpare = function() {return this._strikeOrSpare;};
Bonus.prototype.getNext = function() {return this._next;};
Bonus.prototype.getNextButOne = function() {return this._nextButOne;};

Bonus.prototype.getFutureBonuses = function(game) {
  if (game.areNoPinsLeft()) {
    if (game.getRolls == 1) {
      this.record("Strike");
    } else {
      this.record("Spare");
    };
  };
};
Bonus.prototype.record = function(type) {
  this._strikeOrSpare = type;
  this._next = this._nextButOne + 1;
  (type == "Strike") ? this._nextButOne = 1 : this._nextButOne = 0;
};


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
