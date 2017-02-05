'use strict';

function Bowling() {
  this._frame = 1;
  this._roll = 1;
  this._pins = 10;
  this._hits = 0;
  this._bonus = 0;
  this._extraNext = 0;
  this._extra2ndNext = 0;
  this._runningTotal = 0;
  this._bonuses = 0; // to do deprecate
};
Bowling.prototype.getRunningTotal = function() {return this._runningTotal;};
Bowling.prototype.getHits = function() {return this._hits;};
Bowling.prototype.getFrame = function() {return this._frame;};
Bowling.prototype.getPins = function() {return this._pins;};
Bowling.prototype.getRoll = function() {return this._roll;};
Bowling.prototype.getBonuses = function() {return this._bonuses;};
Bowling.prototype.getBonus = function() {return this._bonus;};
Bowling.prototype.getExtraNext = function() {return this._extraNext;};
Bowling.prototype.getExtra2ndNext = function() {return this._extra2ndNext;};

// Need these:

// getScore() - needs splitting as said elsewhere
// getBonus()   - get bonuses does something else
// getStrikeOrSpare()
// getRunningTotal() √

Bowling.prototype.knockDownPins = function(hits) {
  if (hits > this.getPins()) {
    hits = this.getPins();
  };
  this._pins -= hits;
  this._hits = hits;
};
Bowling.prototype.updateRunningTotal = function() {
  if ((this.getBonuses() > 0) && (this.getFrame() <= 10 )) {
    this._hits *= 2;
    this._bonuses--;
  }
  this._runningTotal += this.getHits();
};

Bowling.prototype.recordBonuses = function() {
  if (this.isAStrike()) {
    this.addBonuses(2);
  } else if (this.isASpare()) {
    this.addBonuses(1);
  };
};

Bowling.prototype.updateRollAndFrame = function() {
  if (this.getRoll() == 2 || this.isAStrike()) {
    this.newFrame();
  } else {
    this.secondRoll();
  };
};

Bowling.prototype.addBonuses = function(bonuses) {
  this._bonuses += bonuses;
}

Bowling.prototype.isAStrike = function() {
  return (this.getPins() == 0 && this.getRoll() == 1);
};

Bowling.prototype.isASpare = function() {
  return (this.getPins() == 0 && this.getRoll() == 2);
};

Bowling.prototype.newFrame = function() {
  this._frame++;
  this._pins = 10;
  this._roll = 1;
  this._hits = 0;
};

Bowling.prototype.secondRoll = function() {
  this._roll = 2;
  this._hits = 0;
};

Bowling.prototype.isGameOver = function() {
  return (this.getFrame() == 11 && this.getBonuses() == 0);
}



// Bowling.prototype.updateRow = function() {
//   // NOT TESTED // if not game over:
  // knockDownPins();
  // updateRunningTotal();
  // recordBonuses();
  // updateRollAndFrame();
// }
// make _hits into separate values to be less error prone:
// _pinsDown _bonusScore
// then _runningTotal = _runningTotal + _pinsDown + _bonusScore

// to do
// SRP and classes

// write html and rethink for output
