class Scorecard {
  constructor() {
    this.totalScore = []
  }

  rollBall(numberOfPins) {
    let total = this.totalScore
    total.push(numberOfPins)
  }

}