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
  scoreWithStrikeBonus(frame) {
    if (frame.strike()) {
      return
    }
    this.score = 10 + frame.#pinsDown();
  }

  #pinsDown() {
    return this.rolls.reduce((sum, num) => {
      return sum += num;
    }, 0)
  }
}

module.exports = Frame;