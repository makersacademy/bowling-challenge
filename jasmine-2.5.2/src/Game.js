'use strict';

// fix game logic
// currently depends on order of updating pins, frame and roll
// will not hold good as is if strike or spare probably
// ==> investigate
function Game() {
  this._frame = 1; // Game
  this._roll = 1; // Game
  this._pins = 10; // Game
  this._extraRolls = 0; // to do replace test dummy with StrOrSpr call
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
Game.prototype.updateFrame = function() {
  if (this.isEndOfFrame()) { this._frame++; };
};
Game.prototype.updatePins = function() {
  if (this.isEndOfFrame()) { this._pins = 10; };
};
Game.prototype.getExtraRolls = function() {
  return this._extraRolls; // to do testing dummy replace via StrOrSpr
};
// to do note this depends when ask
// also is over when frame = 10 and roll = 2
// if ask at end of updatePFR will be over if frame == 11
Game.prototype.isOver = function() {
  return (this.getFrame() == 11 && this.getExtraRolls() == 0);
};
Game.prototype.makeReport = function() {
  return "frame: " + this.getFrame() + "  roll: " +
  this.getRoll() + "  pins: " + this.getPins();
}
// must be aske in this order
Game.prototype.updatePFR = function() {
  this.updatePins(); //
  this.updateFrame(); // ++ if no pins or roll == 2
  this.updateRoll(); // => 1 if end of frame frame++
}
Game.prototype.rollTheBall = function() {
  if (!this.isOver()) {
    this.knockDownPins(4); // to do testing dummy replace with user input and arg
    this.makeReport(); // to do testing function replace later
    this.updatePFR(); // insert score and StrOrSpr calls too
  };
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
