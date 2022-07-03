class ScoreCalculator {
  calculateTotal(scores) {
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

    const bonusCalculator = new BonusCalculator(bonusForSpares, bonusForStrikes, scores)

    this.total = bonusCalculator.calculateSpareBonus(this.total)

    // if (bonusForSpares.length > 0) {
    //   bonusForSpares.map((bonusIndex) => {
    //     this.total += scores[bonusIndex][0];
    //   })
    // } 

    if (bonusForStrikes.length > 0) {
      bonusForStrikes.map((bonusIndex) => {
        this.total += scores[bonusIndex][0];
        if (scores[bonusIndex][1] == 0) {
          this.total += scores[bonusIndex + 1][0]
        }
        else {
          this.total += scores[bonusIndex][1];
        }
      })
    } 

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

  calculateStrikeBonus(total) {

  }

  calculateSpareBonus(total) {
    if (this.bonusForSpares.length > 0) {
      this.bonusForSpares.map((bonusIndex) => {
        total += this.scores[bonusIndex][0];
      })
    } 
    return total;
  }


}

module.exports = ScoreCalculator;
