class Frame {
  static #SPARE_BONUS = 0;

  constructor() {
    this.score = [];
    this.bonus = Frame.#SPARE_BONUS;
  }

  play(knocked_pins) {
    if (this.score.length === 0) {
      this._isPerfectStrike(knocked_pins)
        ? [this._roll(knocked_pins), this.bonus++]
        : this._roll(knocked_pins);
    } else {
      this._isStrike(knocked_pins)
        ? [this._roll(knocked_pins), this.bonus++]
        : this._roll(knocked_pins);
    }
  }

  _roll(knocked_pins) {
    this.score.push(knocked_pins);
  }

  _isPerfectStrike(knocked_pins) {
    if (knocked_pins === 10) {
      return true;
    }
  }

  _isStrike(knocked_pins) {
    if (this.score[0] + knocked_pins === 10) {
      return true;
    }
  }
}
