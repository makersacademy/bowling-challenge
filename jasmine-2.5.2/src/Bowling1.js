'use strict';

function Bowling() {
  this._frame = 1;
  this._roll = 1;
  this._hits = 0;
  this._bonus = 0;
  this._strikeOrSpare = "";
  this._runningTotal = 0;

  this._pins = 10;
  this._extra = 0;
  this._extraNext = 0;
};

Bowling.prototype.getFrame = function() {return this._frame;};
Bowling.prototype.getRoll = function() {return this._roll;};
Bowling.prototype.getHits = function() {return this._hits;};
Bowling.prototype.getBonus = function() {return this._bonus;};
Bowling.prototype.getStrikeOrSpare = function() {return this._strikeOrSpare;}
Bowling.prototype.getRunningTotal = function() {return this._runningTotal;};

Bowling.prototype.getPins = function() {return this._pins;};
Bowling.prototype.getExtra = function() {return this._extra;};
Bowling.prototype.getExtraNext = function() {return this._extraNext;};

// process user input
Bowling.prototype.addRow = function(hits) {
  this.setHits(hits);
  this.updateBonus();
  if (this.noPinsLeft()) { this.updateStrikeOrSpare();};
  this.updateRunningTotal();
  // get values to row at this point

  this.endOfRowProcessing(); // this.updatePins(); // include in updateRunningTotal
}

// functions to calculate row values for a roll
Bowling.prototype.setHits = function(hits) {
  if (hits > this.getPins()) {
    this._hits = this.getPins();
  } else {
    this._hits = hits;
  }
};
Bowling.prototype.updateBonus = function() {
  this._bonus = this.getHits() * this.getExtra();
}
Bowling.prototype.noPinsLeft = function() {
  return this.getPins() - this.getHits() == 0;
}
Bowling.prototype.updateStrikeOrSpare = function() {
  if (this.getRoll() == 1) {
    this._strikeOrSpare = "Strike";
  } else {
    this._strikeOrSpare = "Spare";
  }
}
Bowling.prototype.updateRunningTotal = function() {
  this._runningTotal += this.getHits() + this.getBonus();
};

// functions to set up before the next row
Bowling.prototype.endOfRowProcessing = function() {
  if (this.isNewFrame()) {
    this.setUpNewFrame();
  } else {
    this.setUpNewRow();
  }
}
Bowling.prototype.isNewFrame = function() {
  return (this.getRoll() == 2 || this.getStrikeOrSpare() == "Strike")
}

Bowling.prototype.updatePins = function() {
  this._pins -= this.getHits();
};

this._frame = 1; // if roll == 2 or if strike then new frame
this._roll = 1; // if not new frame roll = 2
this._pins = 10; // if not new frame pins = pins - hits
this._hits = 0; // hits = 0
this._bonus = 0; // bonus = 0
this._strikeOrSpare = ""; // strike or spare = ""
this._runningTotal = 0; // no update

this._extra = 0; // extra = extraNext; if strike or spare extra++
this._extraNext = 0; // extraNext = 0; if strike extraNext++



// to do
// this is procedural - at end make it OO


// OLD
Bowling.prototype.knockDownPins = function(hits) {
  if (hits > this.getPins()) {
    hits = this.getPins();
  };
  this._pins -= hits;
  this._hits = hits;
};

Bowling.prototype.updateRunningTotal_oldversion = function() {
  this._bonus = this.getHits() * this.getExtra();
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
