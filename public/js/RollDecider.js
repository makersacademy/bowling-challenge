"use strict";

function RollDecider() {
  this.nextTurn = { frame: 1, roll: 1 }
};

RollDecider.prototype.increment = function(knockedPins) {
  if (this.nextTurn.frame === 10) {
    this.increaseRoll(); // allows three rolls in 10th frame regardless of strikes
  } else {
    this.increaseNextTurn(knockedPins);
  }
  return this.nextTurn;
};

RollDecider.prototype.increaseNextTurn = function(knockedPins) {
  if (knockedPins === 10 || this.nextTurn.roll === 2) { // if strike: increment frame
    this.increaseFrame();
  } else {
    this.increaseRoll();
  }
};

RollDecider.prototype.increaseFrame = function() {
  this.nextTurn.frame++;
  this.nextTurn.roll = 1;
};

RollDecider.prototype.increaseRoll = function() {
  this.nextTurn.roll++;
};
