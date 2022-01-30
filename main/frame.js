class Frame {
  constructor() {
    this.score = 0;
  }

  addRoll(points) {
    //  create roll1 or roll2
    this.roll1 ? (this.roll2 = points) : (this.roll1 = points);
    //summarise frame
    this.#summariseFrame()
    // check if strike? and then fill the 2nd roll as null
    // if complete we want to get bonus rolls
  }

  addBonus(points) {
    if (this.bonusPoints > 0) {
      this.bonus1 ? (this.bonus2 = points) : (this.bonus1 = points)
      this.bonusPoints -= 1
    } else {
      throw new Error('no bonus points')
    }
  }

  isStrike() {
    return this.roll1 === 10;
  }

  isSpare() {
    return this.isStrike() ? false : this.roll1 + this.roll2 === 10;
  }

  isComplete() {
    // returns true if it was a strike or has second roll
    return !!this.roll2 || this.isStrike()
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
