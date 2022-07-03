class BonusCalculator {
  constructor(scores) {
    this.bonusForSpares = [];
    this.bonusForStrikes = [];
    this.scores = scores;
  }

  findSparesAndStrikes() {
    console.log(this.scores);
    this.scores.forEach((frame) => {
      if ((frame.includes(10)) && frame.length < 3) {
        this.bonusForStrikes.push(this.scores.indexOf(frame) + 1);
      }
      else if (frame[0] + frame[1] == 10) {
        this.bonusForSpares.push(this.scores.indexOf(frame) + 1);
      }
    });
  }

  addSpareBonus(total) {
    if (this.bonusForSpares.length > 0) {
      this.bonusForSpares.map((bonusIndex) => {
        total += this.scores[bonusIndex][0];
      })
    } 
    return total;
  }

  addStrikeBonus(total) {
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
