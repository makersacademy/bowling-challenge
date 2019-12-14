const Bonus = require('./bonus')

class Frame {
  constructor(bonus = new Bonus) {
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

  getFrameScore() {
    return this.rollOne + this.rollTwo + this.bonus.getPoints();
  }

  awardBonus(points) {
    this.bonus.add(points);
  }
}

module.exports = Frame;
