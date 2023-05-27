class Frame {
  
  constructor(rolls) {
    this.rolls = rolls,
    this.score = null
  }

  getFrameScore() {
    if (this.spare() || this.strike()) {
      return this.score;
    } else {
      return this.#pinsDown();
    }
  }

  spare() {
    return this.#pinsDown() === 10 && this.rolls.length === 2;
  }

  strike() {
    return this.#pinsDown() === 10 && this.rolls.length === 1;
  }

  scoreWithSpareBonus(frame) {
    this.score = 10 + frame.rolls[0];
  }

  scoreWithStrikeBonus(frame1, frame2) {
    if (frame1.strike()) {
      if (frame2 === undefined) {
        return
      } else {
        this.score = 20 + frame2.rolls[0];
      }
    } else {
      this.score = 10 + frame1.#pinsDown();
    }
  }

  #pinsDown() {
    return this.rolls.reduce((sum, num) => {
      return sum += num;
    }, 0)
  }
}

module.exports = Frame;