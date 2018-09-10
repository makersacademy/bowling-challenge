// TurnIncrementer.js
// returns the next frame and roll

"use strict";

function TurnIncrementer() {
  this.nextTurn = { frame: 1, roll: 1 };
};

TurnIncrementer.prototype.incrementFrame = function() {
  if (this._isTenthFrame()) {
    this._incrementRoll(); // allows three rolls in 10th frame
  } else {
    this.nextTurn.frame++;
    this.nextTurn.roll = 1;
  }
  return this.nextTurn
};

TurnIncrementer.prototype.incrementTurn = function() {
  if (this._isTenthFrame()) {
    this._incrementRoll();
  } else {
    this.nextTurn.roll === 2 ? this.incrementFrame() : this._incrementRoll();
  };
  return this.nextTurn;
};

TurnIncrementer.prototype._incrementRoll = function() {
  this.nextTurn.roll++
}

TurnIncrementer.prototype._isTenthFrame = function() {
  return this.nextTurn.frame === 10
};
