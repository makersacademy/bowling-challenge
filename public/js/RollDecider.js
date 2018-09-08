"use strict";

function RollDecider() {
  this.nextTurn = { frame: 1, roll: 1 }
}

RollDecider.prototype.increment = function(knockedPins) {
  if (this.nextTurn.frame === 10) {
    this.nextTurn.roll += 1; // allows three rolls in 10th frame regardless of strikes
  } else {
    if (knockedPins === 10 || this.nextTurn.roll === 2) { // if strike: increment frame
      this.nextTurn.frame += 1;
      this.nextTurn.roll = 1;
    } else {
      this.nextTurn.roll = 2;
    }
  }
  return this.nextTurn;
};
