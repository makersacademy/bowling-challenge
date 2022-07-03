class ScoreCalculator {

  addBonus(scores) {
    this.total = 0;
    let bonusForSpares = [];
    let bonusForStrikes = [];

    scores.forEach((frame) => {
      if (frame[0] == 10 && frame.length < 3) {
        bonusForStrikes.push(scores.indexOf(frame) + 1);
      }
      else if (frame[0] + frame[1] == 10) {
        bonusForSpares.push(scores.indexOf(frame) + 1);
      }
    });

    const bonusCalculator = new BonusCalculator(bonusForSpares, bonusForStrikes, scores);
    this.total = bonusCalculator.calculateSpareBonus(this.total);
    this.total = bonusCalculator.calculateStrikeBonus(this.total);
  }

  giveTotal(scores) {
    scores.map((frame) => { 
      this.total += frame.reduce((total, amount) => total += amount) 
    });

    console.log(this.total);
  
    return this.total;
  }

  isGutterGame() {
    return this.total == 0;
  }

  isPerfectGame() {
    return this.total == 300;
  }
}

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
        if (this.scores[bonusIndex][1] == 0) {
          total += this.scores[bonusIndex + 1][0]
        }
        else {
          total += this.scores[bonusIndex][1];
        }
      })
    } 
    return total;
  }
}

module.exports = ScoreCalculator;
