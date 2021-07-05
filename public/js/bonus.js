/* eslint-disable no-unused-vars */

class Bonus {
  constructor() {
    this.points = 0;
  }

  add(newPoints) {
    this.points += newPoints;
  }

  getPoints() {
    return this.points;
  }
}

// module.exports = Bonus;
