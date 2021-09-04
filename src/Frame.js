'use strict';

class Frame {

  #maxPins = 10;

  constructor() {
    this._bowls = [];
  }

  addBowl(number) {
    this.#noNegativeNums(number)
    this.#maxBowls();
    this.#sumTooHigh(number)
    this._bowls.push(number);
  }

  #sumTooHigh(number) {
    if (this._bowls[0] + number > this.#maxPins || number > this.#maxPins) {
      throw Error('Sum of bowls for this frame cannot exceed 10');
    };
  }

  #maxBowls() {
    if (this._bowls.length === 2) {
      throw Error('Limit of bowls for this frame has been reached');
    };
  }
  #noNegativeNums(number) {
    if (number < 0) {
      throw Error('Cannot input negative numbers')
    }
  }

}