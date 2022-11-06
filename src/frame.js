class Frame {
  constructor() {
    this.firstRoll = 0;
    this.secondRoll = 0;
    this.strike = false;
    this.spare = false;
    this.unplayed = true;
    this.complete = false;
  }

  setFirstRoll(firstRoll) {
    this.firstRoll = firstRoll;
    this.unplayed = false;
    if (firstRoll === 10) {
      this.spare = true;
      this.complete = true;
    }
  }

  getFirstRoll() {
    return this.firstRoll;
  }

  setSecondRoll(secondRoll) {
    this.secondRoll = secondRoll;
    this.complete = true;
    if (this.firstRoll + secondRoll === 10) {
      this.spare = true;
    }
  }

  getSecondRoll() {
    return this.secondRoll;
  }

  markComplete() {
    this.complete = true;
  }

  isComplete() {
    return this.complete;
  }

  isUnplayed() {
    return this.unplayed;
  }

  isStrike() {
    return this.firstRoll === 10;
  }

  isSpare() {
    return this.spare === true;
  }
}

module.exports = Frame;
