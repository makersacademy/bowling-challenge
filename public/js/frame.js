const Bonus = require('./bonus');

class Frame {
  constructor(bonus = new Bonus()) {
    this.bonus = bonus;
    this.bonusTurnsLeft = 0;
  }

  setRollOne(score) {
    this.rollOne = score;
  }

  getRollOne() {
    return this.rollOne;
  }

  setRollTwo(score) {
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
}

module.exports = Frame;
