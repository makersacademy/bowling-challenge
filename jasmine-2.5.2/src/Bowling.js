'use strict';

function Bowling() {
  this.game = new Game();
  this.score = new Score();
  this.bonus = new Bonus(); // incorp into score better?
};
Bowling.prototype.getFrame = this.game.getFrame();
Bowling.prototype.getRoll = this.game.getRoll();
Bowling.prototype.getHits = this.score.getHits();
Bowling.prototype.getBonus = this.score.getBonus();
Bowling.prototype.getStrikeOrSpare = this.bonus.getStrikeOrSpare();
Bowling.prototype.getRunningTotal = this.score.getRunningTotal();

// Bowling.prototype.addRow = function(hits) {
//   this.setHits(hits);
//   this.updateBonus();
//   if (this.noPinsLeft()) { this.updateStrikeOrSpare();};
//   this.();
// }
// while not game over - call from interface
Bowling.prototype.addRow = function(hits) {
  game.knockDownPins();
  score.updateScore();
  if (game.areNoPinsLeft()) {
    bonus.addFutureBonuses(game.getPins());
  }
}

// addRow something like this until output row
// then add rest call for after writin
// while !game.isOver()
//     game.knockDownPins()
//     score.updateScore() // inc bonus.resetBonuses
//     bonus.addFutureBonuses(game.getPins()) if game.areNoPinsLeft()
//     output row to screen at this point
//     game.resetForNextRoll OR game.reset()
// end while

// old:

//
// Bowling.prototype.setHits = function(hits) {
//   (hits > this.getPins())? this._hits = this.getPins() : this._hits = hits;
// };
// Bowling.prototype.updateBonus = function() {
//   this._bonus = this.getHits() * this.getExtra();
// }
// Bowling.prototype.noPinsLeft = function() {
//   return ((this.getPins() - this.getHits()) == 0);
// }
// Bowling.prototype.updateStrikeOrSpare = function() {
//   if (this.getRoll() == 1) {
//     this._strikeOrSpare = "Strike";
//   } else {
//     this._strikeOrSpare = "Spare";
//   }
// }
// Bowling.prototype.updateRunningTotal = function() {
//   this._runningTotal += this.getHits() + this.getBonus();
// };
// Bowling.prototype.isNewFrame = function() {
//   return (this.getRoll() == 2 || this.getStrikeOrSpare() == "Strike")
// }
// Bowling.prototype.endOfRowProcessing = function() {
//   this.isNewFrame() ? this.setUpNewFrame() : this.setUpNewRoll();
//   this.updateExtras();
//   this.resetScoring();
// }
// Bowling.prototype.setUpNewFrame = function() {
//   this._frame++;
//   this._roll = 1;
//   this._pins = 10;  
// };
// Bowling.prototype.setUpNewRoll = function() {
//   this._roll = 2;
//   this._pins -= this.getHits();
// };
// Bowling.prototype.resetScoring = function() {
//   this._hits = 0;
//   this._bonus = 0;
//   this._strikeOrSpare = ""; //
// }
// Bowling.prototype.updateExtras = function() {
//   this.removeSpentExtras();
//   this.addNewExtras();
// };
// Bowling.prototype.removeSpentExtras = function() {
//   this._extra = this._extraNext;
//   this._extraNext = 0;
// }
// Bowling.prototype.addNewExtras = function() {
//   if (this.getStrikeOrSpare() == "Strike") {
//     this._extra++;
//     this._extraNext++;
//   } else if (this.getStrikeOrSpare() == "Spare") {
//     this._extra++;
//   }
// }
