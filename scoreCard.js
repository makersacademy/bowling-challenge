class ScoreCard {
  constructor() {
    this.totalPoints = 0;
  }

  addKnockedPins(pins) {
    this.totalPoints += pins;
  }

  getTotalPoints() {
    return this.totalPoints;
  }
}

module.exports = ScoreCard;
