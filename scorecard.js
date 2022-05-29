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
    if(this.roll === 1) {
      console.log(`Frame: ${this.frame}`)
      if(number <= 10) {
        this.frameScore += number
        this.roll += 1
      } else {
        throw ('Score exceeds maximum number of pins. Please input score again by calling frameInput.')
      }
    } else {
      if(this.frameScore + number <= 10 ) {
        this.frameScore += number
      } else {
        this.frameScore = 10
      }
        this.frameScoretoTotalScore()
        this.frame += 1
        this.roll = 1
        this.frameScore = 0
    }
  return this.score
  }
}

module.exports = Scorecard