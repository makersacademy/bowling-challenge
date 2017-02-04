'use strict';

function Bowling() {
  this._runningTotal = 0;
  this._score = 0;
  this._frame = 1;
  this._pins = 10;
  this._roll = 1;
  this._bonuses = 0;
};
Bowling.prototype.getRunningTotal = function() {return this._runningTotal;};
Bowling.prototype.getScore = function() {return this._score;};
Bowling.prototype.getFrame = function() {return this._frame;};
Bowling.prototype.getPins = function() {return this._pins;};
Bowling.prototype.getRoll = function() {return this._roll;};
Bowling.prototype.getBonuses = function() {return this._bonuses;};

Bowling.prototype.knockDownPins = function(pins) {
  if (pins > this.getPins()) {
    pins = this.getPins();
  };
  this._pins -= pins;
  this._score = pins;
};
Bowling.prototype.updateRunningTotal = function() {
  if ((this.getBonuses() > 0) && (this.getFrame() <= 10 )) {
    this._score *= 2;
    this._bonuses--;
  }
  this._runningTotal += this.getScore();
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
  this._score = 0;
};

Bowling.prototype.secondRoll = function() {
  this._roll = 2;
  this._score = 0;
};

// Sequence:
// knockDownPins() // updates pins and score; may have rollBall() random play option
// updateRunningTotal() // also resets bonuses
// recordBonuses() // adds bonuses if required
// updateRollAndFrame() // calls newFrame() or secondRoll()

// to do:
// determine final frame if strike or spare otherwise report game over

// to do
// refactor with SRP
// separate out classes if needed: only if any such have both functions and fields

// to do:
// make _score into separate values to be less error prone:
// _pinsDown _bonusScore
// then _runningTotal = _runningTotal + _pinsDown + _bonusScore
