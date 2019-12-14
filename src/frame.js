const Bonus = require('./bonus');

class Frame {
  constructor(bonus = new Bonus()) {
    this.bonus = bonus;
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

  awardBonus(points) {
    this.bonus.add(points);
  }
}

module.exports = Frame;
