class Frame {
  constructor() {
    this.pinsRemaining = 10
    this.firstRoll = "";
    this.secondRoll = "";
  }

  getFirstRoll() {
    return this.firstRoll;
  }

  getSecondRoll() {
    return this.secondRoll;
  }

  addFirstRoll(num) {
    this.#privateCheckError(num);
    this.firstRoll = num;
  }

  addSecondRoll(num) {
    this.#privateCheckError(num);
    this.secondRoll = this.#privateStrikeCheck(num);
  }

  pins() {
    return this.getFirstRoll() + this.getSecondRoll();
  }

  isSpare() {
    return this.pinsRemaining === 0 && this.firstRoll != 10
  }

  isStrike() {
    return this.firstRoll === 10
  }

  // private functions

  #privateCheckError(num) {
    if (num < 0) {
      throw "Cannot knock down a negative number of pins";
    } else if (num > this.pinsRemaining) {
      throw "Cannot knock down more pins than what is remaining";
    }
    this.pinsRemaining -= num;
  }

  #privateStrikeCheck(num) {
    if (this.firstRoll != 10) {
      return num;
    } else if (this.firstRoll === 10) {
      return null;
    }
  }
}

module.exports = Frame;