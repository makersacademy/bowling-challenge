const BonusCalculator = require('./BonusCalculator');

class ScoreCalculator {

  addBonus(scores) {
    this.total = 0;
    const bonusCalculator = new BonusCalculator(scores);
    bonusCalculator.findSparesAndStrikes();
    this.total = bonusCalculator.addSpareBonus(this.total);
    this.total = bonusCalculator.addStrikeBonus(this.total);
  }

  giveTotal(scores) {
    scores.map((frame) => { 
      this.total += frame.reduce((total, amount) => total += amount) 
    });
    return this.total;
  }
}

module.exports = ScoreCalculator;
