// TurnIncrementer.js
// returns the next frame and roll

"use strict";

function TurnIncrementer() {
  this.nextTurn = { frame: 1, roll: 1 }
};

TurnIncrementer.prototype.increment = function(knockedPins) {
  if (this.nextTurn.frame === 10) {
    this.incrementRoll(); // allows three rolls in 10th frame regardless of strikes
  } else {
    this.incrementTurn(knockedPins);
  }
  return this.nextTurn;
};

TurnIncrementer.prototype.incrementTurn = function(knockedPins) {
  if (knockedPins === 10 || this.nextTurn.roll === 2) { // if strike: increment frame
    this.incrementFrame();
  } else {
    this.incrementRoll();
  }
};

TurnIncrementer.prototype.incrementFrame = function() {
  this.nextTurn.frame++;
  this.nextTurn.roll = 1;
};

TurnIncrementer.prototype.incrementRoll = function() {
  this.nextTurn.roll++;
};
