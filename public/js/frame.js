/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// const Bonus = require('./bonus');

class Frame {
  constructor(bonus = new Bonus()) {
    this.bonus = bonus;
    this.bonusTurnsLeft = 0;
  }

  setRollOne(score) {
    if (score < 0 || score > 10) { throw new Error(Frame.INVALID_SCORE()); }
    if (!Frame.numbers().includes(score)) { throw new Error(Frame.INVALID_SCORE()); }

    this.rollOne = score;
  }

  getRollOne() {
    return this.rollOne;
  }

  setRollTwo(score) {
    if (score < 0 || score > 10) { throw new Error(Frame.INVALID_SCORE()); }

    this.rollTwo = score;
  }

  getRollTwo() {
    return this.rollTwo;
  }

  getScore() {
    const rollOne = this.rollOne ? this.rollOne : 0;
    const rollTwo = this.rollTwo ? this.rollTwo : 0;

    return rollOne + rollTwo + this.bonus.getPoints();
  }

  isA(type) {
    if (type === 'strike') {
      this.bonusTurnsLeft = 2;
    } else if (type === 'spare') {
      this.bonusTurnsLeft = 1;
    }
  }

  dropBonusTurn() {
    this.bonusTurnsLeft -= 1;
  }

  hasBonusTurnsLeft() {
    return this.bonusTurnsLeft > 0;
  }

  awardBonus(points) {
    this.bonus.add(points);
  }

  static INVALID_SCORE() {
    return 'This score is not possible.';
  }

  static numbers() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
}

// module.exports = Frame;
