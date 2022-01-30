class Frames {
  constructor() {
    this.frames = [];
  }

  createNewFrame(rollsArr) {
    this.#addBonusPoints(rollsArr);

    if (this.tenthFrame()) {
      this.frames.at(-1).rolls.concat(rollsArr);
    } else {
      this.frames.push({
        rolls: rollsArr,
        total: rollsArr.reduce((a, b) => a + b, 0)
      });
    }
  }

  totalPoints() {
    let result = 0;
    this.frames.forEach((frame) => (result += frame.total));
    return result;
  }

  tenthFrame() {
   return this.frames.length === 10;
  }

  #addBonusPoints(rollsArr) {
    if (this.#previousWasStrike()) { 
      this.frames.at(-1).total += rollsArr.reduce((a, b) => a + b, 0); 
    } else if (this.#previousWasSpare()) {
      this.frames.at(-1).total += rollsArr[0]; 
    }
  }

  #previousWasStrike() {
    return this.frames.length > 0 && 
    this.frames.at(-1).rolls.at(-1) === 10;
  }

  #previousWasSpare() {
    return this.frames.length > 0 && 
    this.frames.at(-1).total === 10 &&
    this.frames.at(-1).rolls[0] !== 10;
  }
}

module.exports = Frames;
