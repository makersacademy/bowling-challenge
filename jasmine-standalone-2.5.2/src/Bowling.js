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

Bowling.prototype.addBonuses = function(rolls) {
  this._bonuses += rolls;
}

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
