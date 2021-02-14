class Frame {

  constructor() {
    this.scores = []
    this.bonusScores = []
  }

  addScore(score) {
    this.scores.push(score);
  }

  addBonusScore(score) {
    this.bonusScores.push(score);
  }

  isMissingBonus() {
    return this.scores.reduce((total, score) => {
      return total + score
    }, 0) === 10 && this.scores.length + this.bonusScores.length < 3
  }

  isComplete() {
    return this.totalScore() === 10 || this.scores.length === 2
  }

  totalScore() {
    let standardScores = this.scores.reduce((total, score) => {
      return total + score
    }, 0)
    let bonusScores = this.bonusScores.reduce((total, score) => {
      return total + score
    }, 0)
    return standardScores + bonusScores;
  }



}

Frame
