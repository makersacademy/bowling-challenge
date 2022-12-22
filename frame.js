class Frame {
  constructor(rolls) {
    this.rolls = rolls;
  }

  scores() {
    return this.rolls;
  }

  strike() {
    if (this.rolls[0] === 10) {
      return true;
    } else {
      return false;
    }
  }

  spare() {
    if (this.strike() === false && this.#sum() === 10) {
      return true;
    } else {
      return false;
    }
  }

  isComplete(frame_count) {
    if (this.rolls.length >= this.#frameLength(frame_count)) {
      return true;
    } else {
      return false;
    }
  }

  #sum() {
    const sum = this.rolls.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    return sum;
  }

  #frameLength(frame_count) {
    let frameLength = 2;
    if (this.#sum() >= 10) {
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
