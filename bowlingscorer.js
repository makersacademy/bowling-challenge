class BowlingScorer {

  constructor() {
    this.scorecard = []
  }

  enterScore(pins) {
    this.scorecard.push(pins)
  }

  score() {
    let score = 0
    let scorecardIndex = 0

    //frames are iterated through within the score function
    for (let frameIndex = 0 ; frameIndex < 10 ; frameIndex++) {
      //strike logic
      //isStrike checks to see that the current score
      if (this.isStrike(scorecardIndex)) {
        score += this.strikeBonus(scorecardIndex)
        //
        scorecardIndex++;
        continue;
      }
      
      const frameScore = this.scorecard[scorecardIndex] + this.scorecard[scorecardIndex + 1]

      // spare logic
      if (this.isSpare(frameScore)) {
        score += this.spareBonus(scorecardIndex)
      } else {
        score += frameScore
      }

      scorecardIndex += 2
    }
    return score
  }

  isSpare(frameScore) {
    return frameScore === 10
  }

  spareBonus(scorecardIndex) {
    return 10 + this.scorecard[scorecardIndex + 2]
  }

  isStrike(scorecardIndex) {
    return this.scorecard[scorecardIndex] === 10
  }

  strikeBonus(scorecardIndex) {
    return 10 + this.scorecard[scorecardIndex + 1] + this.scorecard[scorecardIndex + 2]
  }
}

module.exports = BowlingScorer;