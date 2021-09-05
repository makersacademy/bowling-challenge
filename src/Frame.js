class Frame {
  static #SPARE_BONUS = 0;

  constructor() {
    this.score = [];
    this.bonus = Frame.#SPARE_BONUS;
  }

  play(knocked_pins) {
    if (this.score.length === 0) {
      this.isPerfectScore(knocked_pins)
        ? [this.roll(knocked_pins), this.bonus++]
        : this.roll(knocked_pins);
    }
  }

  whatever(knocked_pins) {
    if (this.isPerfectScore(knocked_pins)) {
      this.bonus++;
    }
  }

  roll(knocked_pins) {
    this.score.push(knocked_pins);
  }

  isPerfectScore(knocked_pins) {
    if (knocked_pins === 10) {
      return true;
    }
  }
}
