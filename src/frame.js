'use strict';

class Frame {

  static ERROR_FRAME_NUMBER_LESS_THAN_1 = `Frame number can't be less than 1`;
  static ERROR_FRAME_NUMBER_MORE_THAN_10 = `Frame number can't be more than 10`;

  constructor(number) {
    if (number < 1) {
      throw new Error(Frame.ERROR_FRAME_NUMBER_LESS_THAN_1);
    }
    if (number > 10) {
      throw new Error(Frame.ERROR_FRAME_NUMBER_MORE_THAN_10);
    }

    this._number = number;
    this._rolls = [];
  }

  get number() {
    return this._number;
  }

  add(roll) {
    this._rolls.push(roll);
  }

  get rolls() {
    return this._rolls;
  }
}