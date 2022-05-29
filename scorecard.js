class Scorecard {
  constructor() {
    this.score = 0
    this.roll = 1
    this.frame = 1
  }

  frameScore(number) {
    this.score += number
    if(this.roll === 2) {
      this.frame += 1
      this.roll = 1
      console.log(`Frame: ${this.frame}`)
    } else {
      this.roll += 1
    }
    return this.score
  }
}

module.exports = Scorecard