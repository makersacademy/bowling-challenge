class ScoreCalculator {
  constructor(scores) {
    this.bonusForSpares = [];
    this.bonusForStrikes = [];
    this.scores = scores;
    this.total = 0;
  }

  giveTotal() {
    this.findSparesAndStrikes();
    this.addSpareBonus();
    this.addStrikeBonus();
    this.scores.map((frame) => { 
      this.total += frame.reduce((total, amount) => total += amount) 
    });
    return this.total;
  }

  findSparesAndStrikes() {
    this.scores.forEach((frame) => {
      if ((frame.includes(10)) && frame.length < 3) {
        this.bonusForStrikes.push(this.scores.indexOf(frame) + 1);
      }
      else if (frame[0] + frame[1] == 10) {
        this.bonusForSpares.push(this.scores.indexOf(frame) + 1);
      }
    });
  }

  addSpareBonus() {
    if (this.bonusForSpares.length > 0) {
      this.bonusForSpares.map((bonusIndex) => {this.total += this.scores[bonusIndex][0]});
    } 
  }

  addStrikeBonus(total) {
    if (this.bonusForStrikes.length > 0) {
      this.bonusForStrikes.map((bonusIndex) => {
        this.total += this.scores[bonusIndex][0] + this.scores[bonusIndex][1];
        if (this.scores[bonusIndex][0] == 10 && this.scores[bonusIndex + 1]) {
          this.total += this.scores[bonusIndex + 1][0]
        }
      })
    } 
  }
}

module.exports = ScoreCalculator;
