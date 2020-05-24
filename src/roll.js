'use strict';

class Roll {

  static ERROR_ROLL_GREATER_THAN_10 = `Roll can't be greater than 10`;
  static ERROR_ROLL_NEGATIVE = `Roll can't be negative`;

  constructor(pinsDown) {
    if (pinsDown > 10) {
      throw new Error(Roll.ERROR_ROLL_GREATER_THAN_10);
    }
    if (pinsDown < 0) {
      throw new Error(Roll.ERROR_ROLL_NEGATIVE);
    }
    this._pinsDown = pinsDown;
  }

  get pinsDown() {
    return this._pinsDown;
  }
}