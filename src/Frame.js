class Frame {
  static #SPARE_BONUS = 0;

  constructor() {
    this.score = [];
    this.bonus = Frame.#SPARE_BONUS;
  }

  play(knocked_pins) {
    if (this.score.length === 0) {
      this.isPerfectStrike(knocked_pins)
        ? [this.roll(knocked_pins), this.bonus++]
        : this.roll(knocked_pins);
    } else {
      this.isStrike(knocked_pins)
        ? [this.roll(knocked_pins), this.bonus++]
        : this.roll(knocked_pins);
    }
  }

  roll(knocked_pins) {
    this.score.push(knocked_pins);
  }

  isPerfectStrike(knocked_pins) {
    if (knocked_pins === 10) {
      return true;
    }
  }

  isStrike(knocked_pins) {
    if (this.score[0] + knocked_pins === 10) {
      return true;
    }
  }
}
