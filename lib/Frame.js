/* eslint-disable require-jsdoc */
// Represents a Frame.
// Responsible for keeping track of the state a frame,
// e.g. roll values, if a frame is over, etc.
class Frame {
  constructor() {
    this.rolls = [];
  }
  // returns this.rolls
  getRolls() {
    // ...
  }
  // adds a roll to this.rolls
  addRoll() {
    // ...
  }
  // returns boolean value representing if a frame is over
  // (checks for strikes, this.rolls count)
  isFrameOver() {
    // ...
  }
};

module.exports = Frame;
