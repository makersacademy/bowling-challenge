class Frame {
  constructor() {
    this.frames = [];
  }

  createNewFrame(rollsArr) {
    this.#addBonusPoints(rollsArr);

    this.frames.push({
      rolls: rollsArr,
      total: rollsArr.reduce((a, b) => a + b, 0)
    });
  }

  totalPoints() {
    let result = 0;
    this.frames.forEach((frame) => (result += frame.total));
    return result;
  }

  #addBonusPoints(rollsArr) {
    if (this.#previousWasStrike()) { 
      this.frames.at(-1).total += rollsArr.reduce((a, b) => a + b, 0); 
    } else if (this.#previousWasSpare()) {
      this.frames.at(-1).total += rollsArr[0]; 
    }
  }

  #previousWasStrike() {
    return this.frames.length > 0 && this.frames.at(-1).rolls.length === 1;
  }

  #previousWasSpare() {
    return this.frames.length > 0 && this.frames.at(-1).total === 10;
  }
}

module.exports = Frame;
