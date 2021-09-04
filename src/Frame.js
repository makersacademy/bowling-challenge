'use strict';

class Frame {

  #maxPins = 10;

  constructor() {
    this._bowls = [];
  }

  bowls() {
    return this._bowls;
  }

  addBowl(number) {
    this.#startOver()
    this.#noNegativeNums(number)
    this.#sumTooHigh(number)
    
    this._bowls.push(number);
  }

  #sumTooHigh(number) {
    if (this._bowls[0] + number > this.#maxPins || number > this.#maxPins) {
      throw Error('Sum of bowls for this frame cannot exceed 10');
    };
  }

  #noNegativeNums(number) {
    if (number < 0) {
      throw Error('Cannot input negative numbers')
    }
  }

  #startOver() {
    if (this._bowls[0] === this.#maxPins || this._bowls.length === 2) {
      this._bowls = [];
    }
  }

}