class Frame {

  constructor() {
    this.totalScore = 0
    this.needBonus = false
  }

  addScore(score) {
    this.totalScore += score;
    if(this.totalScore == 10) {
      this.needBonus = true;
    }
  }

  isMissingBonus() {
    return this.needBonus
  }
}

Frame
