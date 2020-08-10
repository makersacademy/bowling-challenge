"use strict";

class Frame {
  constructor() {
    this._rolls = [];
  }

  add(roll) {
    this._rolls.push(roll);
  }

  showRolls() {
    return this._rolls;
  }
}
