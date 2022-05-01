class Frame {
  constructor() {
    this.pinsRemaining = 10
    this.firstRoll = null;
    this.secondRoll = null;
  }

  addFirstRoll(num) {
    this.#privatecheckError(num);
    this.firstRoll = num;
  }

  addSecondRoll(num) {
    this.#privatecheckError(num);
    this.secondRoll = num;
  }

  isSpare() {
    return this.pinsRemaining === 0 && this.firstRoll != 10
  }

  isStrike() {
    return this.firstRoll === 10
  }

  // private methods

  #privatecheckError(num) {
    if (num < 0) {
      throw "Cannot knock down a negative number of pins";
    } else if (num > this.pinsRemaining) {
      throw "Cannot knock down more pins than what is remaining";
    }
    this.pinsRemaining -= num;
  }
}

module.exports = Frame;