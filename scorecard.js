class Scorecard {
  constructor() {
    this.score = 0
    this.roll = 1
    this.frame = 1
    this.frameScore = 0
  }

  frameScoretoTotalScore() {
    this.score += this.frameScore
  }

  frameInput(number) {
    if(this.frameScore < 10) {
      this.frameScore += number
      if(this.roll === 2) {
        this.frameScoretoTotalScore()
        this.frame += 1
        this.roll = 1
        this.frameScore = 0
        console.log(`Frame: ${this.frame}`)
      } else {
        this.roll += 1
      }
    }
    return this.score
  }
}

module.exports = Scorecard