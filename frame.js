class Frame {
  constructor(rolls) {
    this.rolls = rolls;
  }

  getRolls() {
    return this.rolls;
  }

  strike() {
    return this.rolls[0] === 10;
  }

  spare() {
    return !this.strike() && this.frameScore() === 10;
  }

  isComplete(frame_count) {
    return this.rolls.length >= this.#frameLength(frame_count);
  }

  frameScore() {
    const sum = this.rolls.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    return sum;
  }

  #frameLength(frame_count) {
    let frameLength = 2;
    if (this.frameScore() >= 10) {
      if (frame_count === 10) {
        frameLength = 3;
      } else {
        frameLength = 1;
      }
    }
    return frameLength;
  }
}

module.exports = Frame;
