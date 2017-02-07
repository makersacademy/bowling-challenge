'use strict';

function Game() {
  this._frame = 1; // Game
  this._roll = 1; // Game
  this._pins = 10; // Game
};
Game.prototype.getFrame = function() {return this._frame;};
Game.prototype.getRoll = function() {return this._roll;};
Game.prototype.getPins = function() {return this._pins;};

Game.prototype.knockDownPins = function(hits) {
  this.getPins() > hits ? this._pins -= hits : this._pins = 0;
};
Game.prototype.areNoPinsLeft = function() {
  return this.getPins() == 0;
};
Game.prototype.isEndOfFrame = function() {
  return (this.getRoll() == 2 || this.areNoPinsLeft());
};
Game.prototype.updateRoll = function() {
  this.isEndOfFrame() ? this._roll = 1 : this._roll = 2;
};
//
// Game.prototype.addRow = function(hits) {
//   this.updateBonus();
//   if (this.noPinsLeft()) { this.updateStrikeOrSpare();};
//   this.updateRunningTotal();
// }
// Game.prototype.setHits = function(hits) {
//   (hits > this.getPins())? this._hits = this.getPins() : this._hits = hits;
// };
// Game.prototype.updateBonus = function() {
//   this._bonus = this.getHits() * this.getExtra();
// }
// Game.prototype.noPinsLeft = function() {
//   return ((this.getPins() - this.getHits()) == 0);
// }
// Game.prototype.updateStrikeOrSpare = function() {
//   if (this.getRoll() == 1) {
//     this._strikeOrSpare = "Strike";
//   } else {
//     this._strikeOrSpare = "Spare";
//   }
// }
// Game.prototype.updateRunningTotal = function() {
//   this._runningTotal += this.getHits() + this.getBonus();
// };
// Game.prototype.isNewFrame = function() {
//   return (this.getRoll() == 2 || this.getStrikeOrSpare() == "Strike")
// }
// Game.prototype.endOfRowProcessing = function() {
//   this.isNewFrame() ? this.setUpNewFrame() : this.setUpNewRoll();
//   this.updateExtras();
//   this.resetScoring();
// }
// Game.prototype.setUpNewFrame = function() {
//   this._frame++;
//   this._roll = 1;
//   this._pins = 10;  
// };
// Game.prototype.setUpNewRoll = function() {
//   this._roll = 2;
//   this._pins -= this.getHits();
// };
// Game.prototype.resetScoring = function() {
//   this._hits = 0;
//   this._bonus = 0;
//   this._strikeOrSpare = ""; //
// }
// Game.prototype.updateExtras = function() {
//   this.removeSpentExtras();
//   this.addNewExtras();
// };
// Game.prototype.removeSpentExtras = function() {
//   this._extra = this._extraNext;
//   this._extraNext = 0;
// }
// Game.prototype.addNewExtras = function() {
//   if (this.getStrikeOrSpare() == "Strike") {
//     this._extra++;
//     this._extraNext++;
//   } else if (this.getStrikeOrSpare() == "Spare") {
//     this._extra++;
//   }
// }
