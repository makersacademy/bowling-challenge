class BonusCalculator {
  constructor(bonusForSpares, bonusForStrikes, scores) {
    this.bonusForSpares = bonusForSpares;
    this.bonusForStrikes = bonusForStrikes;
    this.scores = scores;
  }

  calculateSpareBonus(total) {
    if (this.bonusForSpares.length > 0) {
      this.bonusForSpares.map((bonusIndex) => {
        total += this.scores[bonusIndex][0];
      })
    } 
    return total;
  }

  calculateStrikeBonus(total) {
    if (this.bonusForStrikes.length > 0) {
      this.bonusForStrikes.map((bonusIndex) => {
        total += this.scores[bonusIndex][0];
        total += this.scores[bonusIndex][1];
        if (this.scores[bonusIndex][0] == 10 && this.scores[bonusIndex + 1]) {
          total += this.scores[bonusIndex + 1][0]
        }
      })
    } 
    return total;
  }
}

module.exports = BonusCalculator;