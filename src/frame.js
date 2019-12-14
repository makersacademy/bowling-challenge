const Bonus = require('./bonus');

class Frame {
  constructor(bonus = new Bonus()) {
    this.bonus = bonus;
    this.rollOne = 0;
    this.rollTwo = 0;
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
    return this.rollOne + this.rollTwo + this.bonus.getPoints();
  }

  awardBonus(points) {
    this.bonus.add(points);
  }
}

module.exports = Frame;
