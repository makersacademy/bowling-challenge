// TurnIncrementer.js
// returns the next frame and roll

"use strict";

function TurnIncrementer() {
  this.turn = { frame: 1, roll: 0 };
  this._newFrame = false;
};

TurnIncrementer.prototype.isNewFrame = function(pins) {
  console.log("i'm called")
  if (this.turn.roll === 0) {
    this.turn.roll++;
    return true; // edge case for first move
  } else {
    this._decideNextTurn(pins);
    return this._newFrame;
  }
};

TurnIncrementer.prototype._decideNextTurn = function(pins) {
  if (pins === 10) {
    this._incrementFrame()
  } else { this._incrementTurn() };
};

TurnIncrementer.prototype._incrementFrame = function() {
  this._newFrame = true;
  if (this._isTenthFrame()) {
    this._incrementRoll();
  } else {
    this.turn.frame++;
    this.turn.roll = 1;
  }
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
  this.turn.roll++
}

TurnIncrementer.prototype._isTenthFrame = function() {
  return this.turn.frame === 10
};
