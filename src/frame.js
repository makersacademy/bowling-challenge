class Frame {

  constructor() {
    this.scores = []
  }

  addScore(score) {
    this.scores.push(score);
  }

  isMissingBonus() {
    return this.totalScore() === 10
  }

  isComplete() {
    return this.totalScore() === 10 || this.scores.length === 2
  }

  totalScore() {
    return this.scores.reduce((total, score) => {
      return total + score
    }, 0)
  }

}

Frame
