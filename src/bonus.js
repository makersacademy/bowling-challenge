class Bonus {
  constructor() {
    this.bonusPoints = 0;
  }

  addBonusPoints(points) {
    this.bonusPoints += points;
  }

  getBonusPoints() {
    return this.bonusPoints;
  }
}

module.exports = Bonus;
