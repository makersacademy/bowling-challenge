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

Bowling.prototype.getPins = function() {return this._pins;}
Bowling.prototype.getExtra = function() {return this._extra;}

Bowling.prototype.addRow = function(hits) { // hits = user input
  this.setHits(hits);
  this.updateBonus();
  if (this.noPinsLeft()) { this.updateStrikeOrSpare();};
  this.updateRunningTotal();
  // this.writeRow();
  // this.endOfRowProcessing();
}
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
Bowling.prototype.writeRow = function() {
  console.log( "Frame: " + this.getFrame() +
  "	  Roll: " + this.getRoll() + "	 Hits: " + this.getHits() +
  "  " + this.getStrikeOrSpare() + "  Bonus: " + this. getBonus() +
  "		Total: " + this.getRunningTotal());
}
Bowling.prototype.isNewFrame = function() {
  return (this.getRoll() == 2 || this.getStrikeOrSpare() == "Strike")
}
Bowling.prototype.endOfRowProcessing = function() {
  if (this.isNewFrame()) {
    this.setUpNewFrame();
  } else {
    this.setUpNewRoll();
  }
  this.updateExtras();
}
Bowling.prototype.setUpNewFrame = function() {
  this._frame++;
  this._roll = 1;
  this._pins = 10;
  this.resetScoring();
};
Bowling.prototype.setUpNewRoll = function() {
  this._roll = 2;
  this._pins -= this.getHits();
  this.resetScoring();
};
Bowling.prototype.resetScoring = function() {
  this._hits = 0;
  this._bonus = 0;
  this._strikeOrSpare = ""; //
}
Bowling.prototype.updateExtras = function() {
  this.removeSpentExtras();
  this.addNewExtras();
};
Bowling.prototype.removeSpentExtras = function() {
  this._extra = this._extraNext;
  this._extraNext--;
}
Bowling.prototype.addNewExtras = function() {
  if (this.getStrikeOrSpare() == "Strike") {
    this._extra++;
    this._extraNext++;
  } else if (this.getStrikeOrSpare() == "Spare") {
    this._extra++;
  }
}
