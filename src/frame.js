/* eslint-disable no-unused-vars */
"use strict";

class Frame {
  constructor() {
    this.frameRolls = [];
  }

  frameRolls() {
    return this.frameRolls;
  }

  addRoll(pin) {
    if (this.isStrike === true) {
      throw new Error(
        "A frame with a strike does not accept a 2nd roll in this frame is not possibile"
      );
    } else if (this.frameComplete() === true) {
      throw new Error("Frame is complete - no more rolls allowed");
    } else {
      this.frameRolls.push(pin);
    }
  }

  get isStrike() {
    if (this.frameRolls[0] === 10) {
      return true;
    }
    return false;
  }

  get isSpare() {
    if (this.frameRolls.reduce((acc, val) => acc + val) === 10) {
      return true;
    }
    return false;
  }

  frameComplete() {
    if (this.frameRolls.length > 1) {
      return true;
    }
    return false;
  }
}
