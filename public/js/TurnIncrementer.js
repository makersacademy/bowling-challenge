// TurnIncrementer.js
// returns true/false if there is a new frame

"use strict";

function TurnIncrementer() {
  this.turn = { frame: 1, roll: 0 };
  this._newFrame = false; // if true then model constructs new Frame object
  this._isStrike = false; // record if last roll was strike
};

TurnIncrementer.prototype.isNewFrame = function(pins) {
  if (this.turn.roll === 0) {
    this._incrementRoll();
    return true; // edge case for first move
  } else {
    this._decideNextTurn(pins);
    return this._newFrame;
  };
};

TurnIncrementer.prototype._decideNextTurn = function(pins) {
  if (pins === 10 || this._isStrike === true) {
    if (pins !== 10) { this._isStrike = false }
    else { this._isStrike = true };
    this._incrementFrame()
  } else { this._incrementTurn() };
};

TurnIncrementer.prototype._incrementFrame = function() {
  if (this._isTenthFrame()) {
    this._incrementRoll();
  } else {
    this.turn.frame++;
    this.turn.roll = 1;
  }
  this._newFrame = true;
};

TurnIncrementer.prototype._incrementTurn = function() {
  this._newFrame = false;
  if (this._isTenthFrame()) {
    this._incrementRoll();
  } else {
    this.turn.roll === 2 ? this._incrementFrame() : this._incrementRoll();
  };
};

TurnIncrementer.prototype._incrementRoll = function() {
  this.turn.roll++;
}

TurnIncrementer.prototype._isTenthFrame = function() {
  return this.turn.frame === 10;
};
