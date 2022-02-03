class Frame {
  constructor() {
    this.score = 0;
  }

  addRoll(points) {
    this.#validateRoll(points)
    this.roll1 || this.roll1 === 0? (this.roll2 = points) : (this.roll1 = points);
    this.#summariseFrame()
    return this
  }

  addBonus(points) {
    this.#validateBonus(points);
    if (this.bonusPoints > 0) {
      this.bonus1? (this.bonus2 = points) : (this.bonus1 = points)
      this.bonusPoints -= 1
      this.#updateScore(this.roll1, this.roll2, this.bonus1, this.bonus2)
    } else {
      throw 'no bonus points'
    }
  }

  isStrike() {
    return this.roll1 === 10;
  }

  isSpare() {
    return this.isStrike() ? false : this.roll1 + this.roll2 === 10;
  }

  isComplete() {
    return !!this.roll2 || this.roll2 === 0 || this.isStrike();
  }

  #validateRoll(points) {
    if (points > 10) throw 'invalid roll'
    if (this.roll1 + points > 10) throw 'invalid roll'
  }

  #validateBonus(points) {
    if (points > 10) throw 'invalid bonus'
    if (this.bonus1 != 10) {
      if (this.bonus1 + points > 10) throw 'invalid bonus'
    }
  }

  #summariseFrame() {
    if (this.isStrike()) this.roll2 = null;
    if (this.isComplete()) this.bonusPoints = this.#assignBonusPoints();
    this.#updateScore(this.roll1, this.roll2, this.bonus1, this.bonus2)
  }

  #assignBonusPoints() {
    return this.isStrike() ? 2 : this.isSpare() ? 1 : 0
  }

  #updateScore(roll1 = 0, roll2 = 0, bonus1 = 0, bonus2 = 0) {
    this.score = roll1 + roll2 + bonus1 + bonus2
  }
}

module.exports = Frame;
