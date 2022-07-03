class ScoreCalculator {
  constructor(scores) {
    this.bonusForSpares = [];
    this.bonusForStrikes = [];
    this.scores = scores;
    this.total = 0;
  }

  giveTotal() {
    this.findSparesAndStrikes();
    if (this.bonusForSpares.length > 0) { this.addSpareBonus() };
    if (this.bonusForStrikes.length > 0) { this.addStrikeBonus() };
    this.scores.map((frame) => { 
      this.total += frame.reduce((total, amount) => total += amount) 
    });
    return this.total;
  }

  findSparesAndStrikes() {
    this.scores.forEach((frame) => {
      if (this.isValidStrike(frame)) {
        this.bonusForStrikes.push(this.scores.indexOf(frame) + 1);
      }
      else if (this.isValidSpare(frame)) {
        this.bonusForSpares.push(this.scores.indexOf(frame) + 1);
      }
    });
  }

  isValidStrike(frame) {
    return frame.includes(10) && frame.length < 3;
  }

  isValidSpare(frame) {
    return frame[0] + frame[1] == 10;
  }

  addSpareBonus() {
    this.bonusForSpares.map((bonusIndex) => {this.total += this.scores[bonusIndex][0]}); 
  }

  addStrikeBonus() {
    this.bonusForStrikes.map((bonusIndex) => {
      this.total += this.scores[bonusIndex][0] + this.scores[bonusIndex][1];
      if (this.scores[bonusIndex][0] == 10 && this.scores[bonusIndex + 1]) {
        this.total += this.scores[bonusIndex + 1][0]
      }
    })
  }

}

module.exports = ScoreCalculator;
