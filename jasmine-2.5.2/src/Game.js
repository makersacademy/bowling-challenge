'use strict';

// to do: call game something else
// create game class that runs it all
// nice to do: column manager class to put bonus nicely in cols

function Game() {
  this._frame = 1;
  this._roll = 1;
  this._pins = 10;
  this._extraRolls = 0; // to do dummy: delegate to StrikeOrSpare.getExtraRolls()
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
Game.prototype.getExtraRolls = function() {
  return this._extraRolls; // to do testing value see above
};
Game.prototype.isOver = function() {
  return (this.getFrame() == 11 && this.getExtraRolls() == 0);
};
Game.prototype.updateFrameRollAndPins = function() {
  if (this.isEndOfFrame()) {
    this.setUpNewFrame()
  } else {
    this.setUpNewRoll();
  };
};
Game.prototype.setUpNewFrame = function() {
  this._frame++;
  this._pins = 10;
  this._roll = 1;
};
Game.prototype.setUpNewRoll = function() {
  this._roll = 2;
};

// to do:test functions to remove later
Game.prototype.makeReport = function() {
  return "frame: " + this.getFrame() + "  roll: " +
  this.getRoll() + "  pins: " + this.getPins();
}
Game.prototype.rollTheBall = function() {
  if (!this.isOver()) {
    this.knockDownPins(4); // replace with user input
    this.makeReport(); // strOrSpr & Scoring methods go here
    this.updateFrameRollAndPins();
  };
};

    // like this:
    // while !game.isOver()
    //     game.knockDownPins()
    //     score.updateScore() // inc bonus.resetBonuses
    //     bonus.addFutureBonuses(game.getPins()) if game.areNoPinsLeft()
    //     output row to screen at this point
    //     game.resetForNextRoll OR game.reset()
    // end while
    //   frame row  \s  hits strike strike spare  row-total \s running-total
    // eg: 3    2        4    [+4]  strike [+4]      12           34

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
