class Frame {

  constructor( {finalFrame = false} = {} ) {
    this.scores = []
    this.bonusScores = []
    this.isFinalFrame = finalFrame
  }

  addScore(score) {
    this.scores.push(score);
  }

  addBonusScore(score) {
    this.bonusScores.push(score);
  }

  isMissingBonus() {
    return this.isStrikeOrSpare() && this.scores.length + this.bonusScores.length < 3
  }

  isComplete() {
    if(this.isFinalFrame && this.isStrikeOrSpare()) {
      return !this.isMissingBonus()
    } else {
      return this.isStrike() || this.scores.length === 2
    }
  }

  totalScore() {
    return this.standardScore() + this.bonusScore();
  }

  standardScore() {
    return this.scores.reduce((total, score) => {
      return total + score
    }, 0)
  }

  bonusScore() {
    return this.bonusScores.reduce((total, score) => {
      return total + score
    }, 0)
  }

  isStrike() {
    return this.isStrikeOrSpare() && this.scores.length === 1
  }

  isStrikeOrSpare() {
    return this.standardScore() === 10
  }

}

Frame
