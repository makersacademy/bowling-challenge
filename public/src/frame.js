"use strict";

class Frame {
  constructor() {
    this._rolls = [];
  }

  add(roll) {
    if (this._rolls.length === 2) {
      return "Two rolls per frame MAX";
    }
    this._rolls.push(roll);
  }

  showRolls() {
    return this._rolls;
  }
}
