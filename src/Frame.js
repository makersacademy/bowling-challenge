class Frame {
  static #SPARE_BONUS = 0;

  constructor() {
    this.score = [];
    this.bonus = Frame.#SPARE_BONUS;
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
